
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GaneshHeader from "@/components/GaneshHeader";
import WishGenerator from "@/components/WishGenerator";
import ShareOptions from "@/components/ShareOptions";
import { generateShareUrl } from "@/utils/shareUtils";

const Index = () => {
  const [name, setName] = useState<string>("");
  const [showShare, setShowShare] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    // Show share options when name is entered
    setShowShare(name.length > 0);
  }, [name]);

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
          <p className="animate-pulse-slow">May Lord Ganesha bring happiness and prosperity to your life!</p>
        </div>
      </div>
      
      {/* Decorative elements with enhanced animations */}
      <div className="fixed top-10 left-10 animate-float hidden lg:block">
        <div className="w-16 h-16 bg-festival-yellow/30 rounded-full backdrop-blur-sm" />
      </div>
      <div className="fixed bottom-10 right-10 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 bg-festival-orange/30 rounded-full backdrop-blur-sm" />
      </div>
      <div className="fixed top-1/4 right-10 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <div className="w-10 h-10 bg-festival-saffron/20 rounded-full backdrop-blur-sm" />
      </div>
      <div className="fixed bottom-1/4 left-10 animate-float hidden lg:block" style={{ animationDelay: "0.5s" }}>
        <div className="w-14 h-14 bg-festival-red/20 rounded-full backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;
