
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProgressionArrowProps {
  vertical?: boolean;
  className?: string;
}

const ProgressionArrow: React.FC<ProgressionArrowProps> = ({ vertical = false, className }) => {
  if (vertical) {
    return (
      <div className={`flex justify-center py-4 ${className}`}>
        <div className="bg-slate-200 w-0.5 h-8"></div>
        <ArrowRight className="transform rotate-90 text-slate-400 -mb-2" />
      </div>
    );
  }
  
  return (
    <div className={`hidden md:flex items-center justify-center ${className}`}>
      <div className="bg-slate-200 h-0.5 w-12"></div>
      <ArrowRight className="text-slate-400" />
    </div>
  );
};

export default ProgressionArrow;
