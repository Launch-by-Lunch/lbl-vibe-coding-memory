
import React from "react";
import MemoryCard from "@/components/MemoryCard";
import ProgressionArrow from "@/components/ProgressionArrow";

const MemoryCardsSection: React.FC = () => {
  return (
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
  );
};

export default MemoryCardsSection;
