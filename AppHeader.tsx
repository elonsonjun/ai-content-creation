
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserCircle } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="border-b px-4 py-3 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <SidebarTrigger />
        <div className="ml-4 md:ml-6">
          <h2 className="font-medium">AI Content Creator</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          <span>New Content</span>
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
