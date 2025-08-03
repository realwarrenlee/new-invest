import { ThemeToggle } from "./ThemeToggle";
import { TrendingUp } from "lucide-react";

export const BlogHeader = () => {
  return (
    <header className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-between py-3 px-4">
      <div className="flex items-center space-x-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h1 className="text-lg font-bold text-blog-text-primary">
          Investment Research by Warren Lee
        </h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
};