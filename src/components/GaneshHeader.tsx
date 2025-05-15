
import React from "react";
import { cn } from "@/lib/utils";

interface GaneshHeaderProps {
  className?: string;
}

const GaneshHeader = ({ className }: GaneshHeaderProps) => {
  return (
    <header className={cn("text-center", className)}>
      <div className="animate-float mx-auto w-48 md:w-64 mb-4">
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-lg"
        >
          <path
            d="M256 64c-70.7 0-128 57.3-128 128 0 61.9 43.9 113.6 102.3 125.7 3.5-8.3 7.6-16.4 12.3-24.2C203.5 275.3 192 248.8 192 224c0-35.3 28.7-64 64-64s64 28.7 64 64c0 24.8-11.5 51.3-30.6 69.5 4.7 7.8 8.8 15.9 12.3 24.2C360.1 305.6 384 263.9 384 224c0-70.7-57.3-128-128-128z"
            fill="#F97316"
          />
          <path
            d="M256 96c-53 0-96 43-96 96 0 53 43 96 96 96s96-43 96-96c0-53-43-96-96-96zm0 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
            fill="#FEC6A1"
          />
          <path
            d="M304 192c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
            fill="#C2410C"
          />
          <path
            d="M256 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32z"
            fill="#C2410C"
          />
          <path
            d="M384 192c0 17.7-14.3 32-32 32h-64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-17.7 14.3-32 32-32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32-14.3-32-32z"
            fill="#F97316"
          />
          <path
            d="M192 192c-0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-96c0-17.7-14.3-32-32-32C14.3 288 0 273.7 0 256s14.3-32 32-32c17.7 0 32-14.3 32-32z"
            fill="#F97316"
          />
          <path
            d="M256 382.4c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24z"
            fill="#FEC6A1"
          />
        </svg>
      </div>
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-festival-saffron to-festival-red mb-2">
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
