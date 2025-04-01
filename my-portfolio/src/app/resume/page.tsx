"use client";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null;
  }
  
  return (
    <div className="mainContent">
    <div className="flex flex-col items-center p-4">
      <img 
        src="/resume(1).png" 
        alt="My Resume"
        style={{width:"100%"}}
      />
    </div>
    </div>
  );
}