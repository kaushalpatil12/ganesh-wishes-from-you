
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface WishGeneratorProps {
  className?: string;
  onNameChange: (name: string) => void;
}

const WishGenerator = ({ className, onNameChange }: WishGeneratorProps) => {
  const [searchParams] = useSearchParams();
  const fromParam = searchParams.get("from");
  
  const [name, setName] = useState<string>("");
  const [fromName, setFromName] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (fromParam) {
      setFromName(fromParam);
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);
    }
  }, [fromParam]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(newName);
  };

  // Prevent form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={cn("text-center", className)}>
      <div className="mb-8">
        {fromParam ? (
          <div className="mb-6 animate-fade-in">
            <p className="text-lg text-festival-red mb-2">You received wishes from</p>
            <h2 className={`text-2xl md:text-3xl font-bold text-festival-saffron ${showAnimation ? "animate-scale-in" : ""}`}>
              {fromName}
            </h2>
          </div>
        ) : null}
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Happy Ganesh Chaturthi from
        </h2>
        
        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-bold font-cursive text-festival-red">
            {name || "You"}
          </h3>
          {!name && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-full animate-pulse bg-festival-orange/20 h-10 rounded"></span>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="input-field"
          aria-label="Your name"
        />
      </form>
    </div>
  );
};

export default WishGenerator;
