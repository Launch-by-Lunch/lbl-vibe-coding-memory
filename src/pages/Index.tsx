
import React from "react";
import MemoryCard from "@/components/MemoryCard";
import ProgressionArrow from "@/components/ProgressionArrow";
import InfoBox from "@/components/InfoBox";
import { Box, Archive, Cloud, Database, RefreshCcw, Computer } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 py-12 mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <div className="inline-block p-2 bg-vibe-purple/10 rounded-full mb-4">
            <Database className="w-8 h-8 text-vibe-purple" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-vibe-purple to-vibe-blue">
            Understanding Memory in Your App
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A guide for non-technical founders on how to approach data storage in your applications, 
            from simple to complex solutions.
          </p>
        </header>

        <div className="mb-12">
          <InfoBox 
            title="Why This Matters" 
            className="max-w-3xl mx-auto"
            icon={<RefreshCcw className="text-blue-600 w-6 h-6" />}
          >
            <p>
              Every application needs to decide how to handle data. The right approach depends on your 
              project's stage. By following this progression, you'll avoid unnecessary complexity and tackle 
              problems at the right time.
            </p>
          </InfoBox>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch mb-16">
          <MemoryCard
            type="none"
            title="No Memory"
            description="Start with no persistent memory. Your app resets to its initial state when refreshed."
            benefits={[
              "Simplest to build",
              "No data management complexity",
              "Focus on core functionality first",
              "Quick to implement and test"
            ]}
            limitations={[
              "Data disappears on page refresh",
              "Can't save user preferences",
              "No persistence across sessions",
              "Only suitable for demos or MVPs"
            ]}
            prompts={[
              "Create a simple app with mock data",
              "Build this feature without worrying about saving data",
              "Let's create a prototype that demonstrates the UI flow"
            ]}
            className="flex-1 animate-fade-in"
          />
          
          <ProgressionArrow vertical={true} className="md:hidden" />
          <ProgressionArrow className="self-center" />
          
          <MemoryCard
            type="local"
            title="Local Memory"
            description="Store data on the user's device using local storage - only works on their machine."
            benefits={[
              "Data persists through page refreshes",
              "Works offline",
              "No server infrastructure needed",
              "Good for personal settings and preferences"
            ]}
            limitations={[
              "Only works on one device",
              "Limited storage capacity",
              "No sharing between users",
              "Data can be lost if browser cache is cleared"
            ]}
            prompts={[
              "Add localStorage to remember user preferences",
              "Use Redux with localStorage to persist data",
              "Make sure the app remembers the user's entries after refresh"
            ]}
            className="flex-1 animate-fade-in"
          />
          
          <ProgressionArrow vertical={true} className="md:hidden" />
          <ProgressionArrow className="self-center" />
          
          <MemoryCard
            type="cloud"
            title="Cloud Memory"
            description="Store data in the cloud using Supabase. Works across devices and users."
            benefits={[
              "Data syncs across all devices",
              "Multiple users can share data",
              "More storage capacity",
              "Data backup and security features"
            ]}
            limitations={[
              "Requires internet connection",
              "More complex to implement",
              "May have usage costs",
              "Needs user authentication"
            ]}
            prompts={[
              "Connect to Supabase for data persistence",
              "Add user authentication with Supabase",
              "Set up a database table for storing user data",
              "Enable real-time data sync across users"
            ]}
            className="flex-1 animate-fade-in"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-slate-100 p-6 md:p-8 max-w-4xl mx-auto">
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
        
        <div className="mt-16 text-center">
          <div className="inline-block p-2 bg-vibe-green/10 rounded-full mb-4">
            <Computer className="w-6 h-6 text-vibe-green" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Keep Things Simple</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Remember the VIBE philosophy: <strong>V</strong>alidate your idea with the simplest solution first, 
            <strong>I</strong>terate based on feedback, <strong>B</strong>uild only what you need,
            and <strong>E</strong>volve your app's complexity as your needs grow.
          </p>
        </div>
        
        <footer className="mt-20 text-center text-slate-500 text-sm">
          <p>Created for the VIBE Coding Accelerator</p>
          <p className="mt-1">Helping non-technical founders build their ideas with confidence</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
