
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import ContentGenerationForm from "@/components/ContentGenerationForm";
import ContentDisplay from "@/components/ContentDisplay";

const SocialMedia = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (content: string) => {
    setIsGenerating(true);
    // Simulate API delay
    setTimeout(() => {
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Social Media Content Generator</h1>
          <p className="text-muted-foreground">Create engaging social media posts with AI assistance</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContentGenerationForm 
            contentType="social media post" 
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
          
          {generatedContent ? (
            <ContentDisplay content={generatedContent} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground text-center">
                Your generated social media content will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default SocialMedia;
