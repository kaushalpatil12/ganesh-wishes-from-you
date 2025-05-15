
import { toast } from "@/hooks/use-toast";

export const copyToClipboard = () => {
  const url = window.location.href;
  
  navigator.clipboard.writeText(url).then(() => {
    toast({
      title: "Link copied!",
      description: "Share it with your friends and family.",
    });
  }).catch((err) => {
    console.error('Failed to copy: ', err);
    toast({
      title: "Failed to copy link",
      description: "Please try again.",
      variant: "destructive",
    });
  });
};

export const shareOnWhatsApp = (name: string) => {
  const text = `Happy Ganesh Chaturthi from ${name}! Create your own wishes: `;
  const url = generateShareUrl(name);
  
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + url)}`;
  window.open(whatsappUrl, '_blank');
};

export const shareOnFacebook = (name: string) => {
  const url = generateShareUrl(name);
  
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank');
};

export const generateShareUrl = (name: string) => {
  const url = new URL(window.location.href);
  // Remove any existing parameters
  url.search = '';
  // Add the from parameter with the encoded name
  url.searchParams.set('from', encodeURIComponent(name));
  return url.toString();
};
