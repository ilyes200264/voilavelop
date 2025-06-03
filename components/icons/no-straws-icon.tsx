import React from "react";
import { Ban, Coffee } from "lucide-react";

export function NoStrawsIcon({ className = "h-8 w-8 mx-auto" }) {
  return (
    <div className={`relative ${className}`}>
      <Ban className="absolute inset-0 text-red-500" />
      <Coffee className="absolute inset-0 h-5 w-5 top-1.5 left-1.5 opacity-75" />
    </div>
  );
}