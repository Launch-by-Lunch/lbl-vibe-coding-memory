
import React from "react";
import { Computer } from "lucide-react";

interface PageFooterProps {
  className?: string;
}

const PageFooter: React.FC<PageFooterProps> = ({ className }) => {
  return (
    <div className={`mt-16 text-center ${className}`}>
      <div className="inline-block p-2 bg-vibe-green/10 rounded-full mb-4">
        <Computer className="w-6 h-6 text-vibe-green" />
      </div>
      <h2 className="text-2xl font-bold mb-3">Keep Things Simple</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Remember the VIBE philosophy: <strong>V</strong>alidate your idea with the simplest solution first, 
        <strong>I</strong>terate based on feedback, <strong>B</strong>uild only what you need,
        and <strong>E</strong>volve your app's complexity as your needs grow.
      </p>
      
      <footer className="mt-20 text-slate-500 text-sm">
        <p>Created for the VIBE Coding Accelerator</p>
        <p className="mt-1">Helping non-technical founders build their ideas with confidence</p>
      </footer>
    </div>
  );
};

export default PageFooter;
