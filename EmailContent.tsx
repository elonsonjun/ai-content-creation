import { useState } from "react";
import AppLayout from "../components/AppLayout";
import ContentGenerationForm from "../components/ContentGenerationForm";
import ContentDisplay from "../components/ContentDisplay";

const EmailContent = () => {
  const [generatedContent, setGeneratedContent] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

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
      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Email Content Generator</h1>
          <p className="text-gray-500">Create engaging email content with AI assistance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContentGenerationForm 
            contentType="email" 
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />

          {generatedContent ? (
            <ContentDisplay content={generatedContent} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-center">
                Your generated email content will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default EmailContent;
