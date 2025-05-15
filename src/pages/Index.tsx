
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import GaneshHeader from "@/components/GaneshHeader";
import WishGenerator from "@/components/WishGenerator";
import ShareOptions from "@/components/ShareOptions";
import { generateShareUrl } from "@/utils/shareUtils";

const Index = () => {
  const [name, setName] = useState<string>("");
  const [showShare, setShowShare] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Show share options when name is entered
    setShowShare(name.length > 0);
    
    // Update URL with name parameter if name exists
    if (name) {
      const shareUrl = generateShareUrl(name);
      const url = new URL(shareUrl);
      setSearchParams({ from: name });
    } else {
      // If coming from a shared link, preserve the 'from' parameter
      const fromParam = searchParams.get("from");
      if (!fromParam) {
        setSearchParams({});
      }
    }
  }, [name, setSearchParams]);

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="festival-card max-w-lg w-full mx-auto">
        <div className="mb-8">
          <GaneshHeader />
        </div>
        
        <div className="mb-8">
          <WishGenerator onNameChange={handleNameChange} />
        </div>
        
        <ShareOptions name={name} showShare={showShare} />
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>May Lord Ganesha bring happiness and prosperity to your life!</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-10 left-10 animate-float hidden lg:block">
        <div className="w-16 h-16 bg-festival-yellow/30 rounded-full backdrop-blur-sm" />
      </div>
      <div className="fixed bottom-10 right-10 animate-float hidden lg:block">
        <div className="w-12 h-12 bg-festival-orange/30 rounded-full backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;
