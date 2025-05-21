
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  type?: "default" | "warning" | "success";
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, children, className, icon, type = "default" }) => {
  const [expanded, setExpanded] = useState(false);
  
  const bgColors = {
    default: "bg-blue-50 border-blue-200",
    warning: "bg-amber-50 border-amber-200",
    success: "bg-green-50 border-green-200"
  };
  
  const textColors = {
    default: "text-blue-800",
    warning: "text-amber-800",
    success: "text-green-800"
  };
  
  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };
  
  return (
    <div 
      className={cn(
        "rounded-lg p-4 border transition-all duration-300",
        expanded ? "shadow-md" : "",
        bgColors[type],
        className
      )}
      onClick={toggleExpand}
    >
      <div className="flex items-start gap-3">
        {icon && <div className="mt-1">{icon}</div>}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className={cn("font-semibold mb-2", textColors[type])}>{title}</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-0 h-auto"
              onClick={(e) => {
                e.stopPropagation(); 
                toggleExpand();
              }}
            >
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
          </div>
          <div 
            className={cn(
              "text-slate-700 transition-all duration-300", 
              expanded ? "opacity-100 max-h-[500px]" : "opacity-80 max-h-16 overflow-hidden"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
