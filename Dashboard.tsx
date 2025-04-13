
import { FileText, MessageSquare, Mail, Image } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import ContentTypeCard from "@/components/ContentTypeCard";

const Dashboard = () => {
  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Generate full blog articles with AI. Perfect for content marketing and SEO.",
      icon: <FileText className="h-5 w-5 text-primary" />,
      url: "/blog",
    },
    {
      title: "Social Media Posts",
      description: "Create engaging social media content for any platform.",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      url: "/social",
    },
    {
      title: "Email Content",
      description: "Generate email copy, subject lines, and outreach templates.",
      icon: <Mail className="h-5 w-5 text-primary" />,
      url: "/email",
    },
    {
      title: "Image Prompts",
      description: "Create detailed prompts for AI image generators.",
      icon: <Image className="h-5 w-5 text-primary" />,
      url: "/image",
    },
  ];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Content Creator</h1>
          <p className="text-muted-foreground">
            Generate high-quality content in seconds with our AI-powered tools.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">Content Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type) => (
              <ContentTypeCard
                key={type.title}
                title={type.title}
                description={type.description}
                icon={type.icon}
                url={type.url}
              />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
