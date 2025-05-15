
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Share, Copy, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { copyToClipboard, shareOnWhatsApp, shareOnFacebook } from "@/utils/shareUtils";
import { toast } from "@/hooks/use-toast";
import { triggerConfetti } from "@/utils/confettiUtils";

interface ShareOptionsProps {
  className?: string;
  name: string;
  showShare: boolean;
}

const motivationalMessages = [
  "Spread happiness by sharing Ganesh blessings with your loved ones!",
  "Share the divine blessings of Lord Ganesha with friends and family!",
  "Invite prosperity into others' lives by sharing these divine wishes!",
  "Share joy and good fortune with everyone in your circle!",
  "Multiply your blessings by sharing with others!"
];

const ShareOptions = ({ className, name, showShare }: ShareOptionsProps) => {
  const [motivation, setMotivation] = useState("");
  const [shareCount, setShareCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    if (showShare) {
      setMotivation(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
    }
  }, [showShare]);
  
  if (!showShare) return null;

  const handleShare = async () => {
    triggerConfetti({ count: 150 });
    setShareCount(prev => prev + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    
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
    setShareCount(prev => prev + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  const handleWhatsAppShare = () => {
    shareOnWhatsApp(name);
    triggerConfetti();
    setShareCount(prev => prev + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  const handleFacebookShare = () => {
    shareOnFacebook(name);
    triggerConfetti();
    setShareCount(prev => prev + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <div className={cn("text-center", className)}>
      <div className="mb-6 animate-fade-in">
        <div className="mb-4 bg-festival-yellow/20 p-3 rounded-lg border border-festival-saffron/30">
          <p className="text-festival-red font-medium">{motivation}</p>
          {shareCount > 0 && (
            <div className={cn("mt-2 text-sm text-festival-saffron", animate ? "animate-scale-in" : "")}>
              <Bell className="inline-block w-4 h-4 mr-1" /> 
              You've blessed {shareCount} {shareCount === 1 ? 'person' : 'people'} so far!
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleShare}
          className="share-button mb-4 w-full sm:w-auto relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <Share className="w-5 h-5 mr-1 animate-pulse" /> 
          <span className={animate ? "animate-scale-in" : ""}>Share Now</span>
        </Button>
        
        <p className="text-sm text-muted-foreground mb-4">Or share via:</p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={handleWhatsAppShare}
            className="social-share-button bg-green-500 relative overflow-hidden group" 
            aria-label="Share on WhatsApp"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          </button>
          
          <button 
            onClick={handleCopyLink}
            className="social-share-button bg-gray-600 relative overflow-hidden group" 
            aria-label="Copy link"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            <Copy className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleFacebookShare}
            className="social-share-button bg-blue-600 relative overflow-hidden group" 
            aria-label="Share on Facebook"
          >
            <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            <Facebook className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareOptions;
