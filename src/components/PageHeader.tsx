
import React from "react";
import { Database } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center mb-12">
      <div className="inline-block p-2 bg-vibe-purple/10 rounded-full mb-4">
        <Database className="w-8 h-8 text-vibe-purple" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-vibe-purple to-vibe-blue">
        {title}
      </h1>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

export default PageHeader;
