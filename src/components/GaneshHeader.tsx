
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Confetti } from "lucide-react";

interface GaneshHeaderProps {
  className?: string;
}

const GaneshHeader = ({ className }: GaneshHeaderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  
  const ganeshImages = [
    "/ganesh-1.webp",
    "/ganesh-2.webp",
    "/ganesh-3.webp"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % ganeshImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={cn("text-center", className)}>
      <div className="animate-float mx-auto mb-4 relative overflow-hidden rounded-lg shadow-xl">
        <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-festival-saffron/80 text-white p-1 md:p-2 rounded-br-lg z-10 flex items-center">
          <Confetti className="w-3 h-3 md:w-4 md:h-4 mr-1" />
          <span className="text-xs md:text-sm font-semibold">Ganesh Festival</span>
        </div>
        
        {ganeshImages.map((src, idx) => (
          <img 
            key={idx}
            src={src}
            alt="Lord Ganesha"
            className={cn(
              "w-full max-w-xs md:max-w-sm mx-auto rounded-lg transition-all duration-1000",
              idx === imageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute top-0 left-0 right-0"
            )}
          />
        ))}
      </div>
      
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-festival-saffron to-festival-red mb-2 animate-pulse-slow">
          Ganesh Chaturthi
        </h1>
        <p className="text-lg text-festival-saffron font-medium max-w-md mx-auto">
          Celebrate the arrival of Lord Ganesha with personalized wishes
        </p>
      </div>
    </header>
  );
};

export default GaneshHeader;
