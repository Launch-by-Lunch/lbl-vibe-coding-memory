
import React from "react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  type?: "default" | "warning" | "success";
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, children, className, icon, type = "default" }) => {
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
  
  return (
    <div className={cn(
      "rounded-lg p-4 border transition-all duration-300 hover:shadow-md",
      bgColors[type],
      className
    )}>
      <div className="flex items-start gap-3">
        {icon && <div className="mt-1">{icon}</div>}
        <div>
          <h4 className={cn("font-semibold mb-2", textColors[type])}>{title}</h4>
          <div className="text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
