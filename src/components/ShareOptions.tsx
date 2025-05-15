
import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Share, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { copyToClipboard, shareOnWhatsApp, shareOnFacebook } from "@/utils/shareUtils";
import { toast } from "@/hooks/use-toast";
import { triggerConfetti } from "@/utils/confettiUtils";

interface ShareOptionsProps {
  className?: string;
  name: string;
  showShare: boolean;
}

const ShareOptions = ({ className, name, showShare }: ShareOptionsProps) => {
  if (!showShare) return null;

  const handleShare = async () => {
    triggerConfetti();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ganesh Chaturthi Wishes",
          text: `Happy Ganesh Chaturthi from ${name}! Create your own wishes.`,
          url: window.location.href,
        });
        toast({
          title: "Shared successfully!",
          description: "Your wishes have been shared.",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      copyToClipboard();
    }
  };

  const handleCopyLink = () => {
    copyToClipboard();
    triggerConfetti();
  };

  const handleWhatsAppShare = () => {
    shareOnWhatsApp(name);
    triggerConfetti();
  };

  const handleFacebookShare = () => {
    shareOnFacebook(name);
    triggerConfetti();
  };

  return (
    <div className={cn("text-center", className)}>
      <div className="mb-6 animate-fade-in">
        <Button 
          onClick={handleShare}
          className="share-button mb-4 w-full sm:w-auto"
        >
          <Share className="w-5 h-5 mr-1" /> Share Now
        </Button>
        
        <p className="text-sm text-muted-foreground mb-4">Or share via:</p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={handleWhatsAppShare}
            className="social-share-button bg-green-500" 
            aria-label="Share on WhatsApp"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          </button>
          
          <button 
            onClick={handleCopyLink}
            className="social-share-button bg-gray-600" 
            aria-label="Copy link"
          >
            <Copy className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleFacebookShare}
            className="social-share-button bg-blue-600" 
            aria-label="Share on Facebook"
          >
            <Facebook className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareOptions;
