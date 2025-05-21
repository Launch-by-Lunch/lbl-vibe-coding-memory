
import React from "react";
import { RefreshCcw } from "lucide-react";
import InfoBox from "@/components/InfoBox";
import PageHeader from "@/components/PageHeader";
import MemoryCardsSection from "@/components/MemoryCardsSection";
import ApproachSection from "@/components/ApproachSection";
import PageFooter from "@/components/PageFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 py-12 mx-auto max-w-6xl">
        <PageHeader 
          title="Understanding Memory in Your App"
          subtitle="A guide for non-technical founders on how to approach data storage in your applications, from simple to complex solutions."
        />

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

        <MemoryCardsSection />
        
        <ApproachSection />
        
        <PageFooter />
      </div>
    </div>
  );
};

export default Index;
