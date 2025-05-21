
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Archive, Cloud } from "lucide-react";

type MemoryType = "none" | "local" | "cloud";

interface MemoryCardProps {
  type: MemoryType;
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prompts: string[];
  className?: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ 
  type, 
  title, 
  description,
  benefits,
  limitations,
  prompts,
  className
}) => {
  const [showPrompts, setShowPrompts] = useState(false);
  
  const icons = {
    none: <Box className="w-12 h-12 text-slate-500" />,
    local: <Archive className="w-12 h-12 text-vibe-blue" />,
    cloud: <Cloud className="w-12 h-12 text-vibe-purple" />
  };
  
  const bgColors = {
    none: "bg-white",
    local: "bg-blue-50",
    cloud: "bg-purple-50"
  };
  
  const borderColors = {
    none: "border-slate-200",
    local: "border-vibe-blue",
    cloud: "border-vibe-purple"
  };
  
  return (
    <Card 
      className={cn(
        "memory-card transition-all relative overflow-hidden", 
        bgColors[type], 
        borderColors[type], 
        "border-t-4",
        className
      )}
      onMouseEnter={() => setShowPrompts(true)}
      onMouseLeave={() => setShowPrompts(false)}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <div>{icons[type]}</div>
        </div>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Benefits</h3>
          <ul className="list-disc pl-5 space-y-1">
            {benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-2">Limitations</h3>
          <ul className="list-disc pl-5 space-y-1">
            {limitations.map((limitation, idx) => (
              <li key={idx}>{limitation}</li>
            ))}
          </ul>
        </div>
        
        <div
          className={cn(
            "prompt-container transition-all duration-300",
            showPrompts 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8 pointer-events-none"
          )}
        >
          <h3 className="font-semibold text-lg mb-2">Prompts to Use</h3>
          <div className="bg-slate-100 p-3 rounded-md space-y-2">
            {prompts.map((prompt, idx) => (
              <div key={idx} className="p-2 bg-white rounded border border-slate-200 font-mono text-sm">
                "{prompt}"
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="w-full text-sm text-muted-foreground">
          {type === "none" ? "Stage 1: Build functionality first" : 
           type === "local" ? "Stage 2: Add personal memory" : 
           "Stage 3: Add shared memory"}
        </div>
      </CardFooter>
    </Card>
  );
};

export default MemoryCard;
