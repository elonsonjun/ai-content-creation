
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, RefreshCw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContentGenerationFormProps {
  contentType: string;
  onGenerate: (formData: {
    topic: string;
    keywords: string;
    tone: string;
    length: number[];
  }) => void;
  isGenerating: boolean;
}

const ContentGenerationForm = ({ 
  contentType, 
  onGenerate, 
  isGenerating 
}: ContentGenerationFormProps) => {
  const { toast } = useToast();
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState([500]);

  const handleGenerate = () => {
    if (!topic) {
      toast({
        title: "Topic is required",
        description: "Please enter a topic to generate content",
        variant: "destructive"
      });
      return;
    }
    
    onGenerate({
      topic,
      keywords,
      tone,
      length
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="topic">Topic or Title</Label>
            <Input 
              id="topic"
              placeholder={`What's your ${contentType} about?`} 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)} 
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="keywords">Keywords (optional)</Label>
            <Input 
              id="keywords"
              placeholder="Enter keywords separated by commas" 
              value={keywords} 
              onChange={(e) => setKeywords(e.target.value)} 
              className="mt-1"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Keywords help the AI understand what to focus on
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="tone">Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger id="tone" className="mt-1">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="persuasive">Persuasive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Content Length (words)</Label>
              <div className="mt-4">
                <Slider
                  value={length}
                  min={100}
                  max={2000}
                  step={100}
                  onValueChange={setLength}
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>Short</span>
                  <span>{length[0]} words</span>
                  <span>Long</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={handleGenerate} 
              className="w-full gap-2" 
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate {contentType}
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentGenerationForm;
