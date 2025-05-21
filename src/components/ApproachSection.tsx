
import React from "react";
import { Box, Archive, Cloud } from "lucide-react";

interface ApproachSectionProps {
  className?: string;
}

const ApproachSection: React.FC<ApproachSectionProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg border border-slate-100 p-6 md:p-8 max-w-4xl mx-auto ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-slate-800">When To Use Each Approach</h2>
      
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Box className="w-5 h-5 text-slate-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Start With No Memory</h3>
            <p className="text-slate-600 mb-2">
              Begin by building your core functionality without worrying about data persistence.
              This keeps your initial development simple and focused.
            </p>
            <div className="bg-slate-50 rounded p-3 text-slate-700">
              <strong>When to use:</strong> For initial prototypes, simple demos, and when testing if your 
              core idea works before adding complexity.
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Archive className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Progress to Local Memory</h3>
            <p className="text-slate-600 mb-2">
              Once your core features work, add localStorage to make the app remember user preferences
              and data between sessions on the same device.
            </p>
            <div className="bg-blue-50 rounded p-3 text-slate-700">
              <strong>When to use:</strong> Personal tools, settings that need to persist, 
              single-user applications, or when you're validating if persistence adds value before investing in a database.
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Cloud className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Graduate to Cloud Memory</h3>
            <p className="text-slate-600 mb-2">
              When you need to share data between users or devices, or require more robust storage,
              implement Supabase for cloud-based memory.
            </p>
            <div className="bg-purple-50 rounded p-3 text-slate-700">
              <strong>When to use:</strong> Multi-user applications, apps requiring data synchronization
              across devices, when you need secure data storage, or for production-ready applications.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
