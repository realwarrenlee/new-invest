import { BlogHeader } from "@/components/BlogHeader";
import { BlogCard } from "@/components/BlogCard";
import { useNavigate } from "react-router-dom";

// Import frontmatter from MDX files
import { frontmatter as figmaFrontmatter } from "@/content/figma.mdx";
import { frontmatter as nvidiaFrontmatter } from "@/content/nvidia.mdx";
import { frontmatter as coreweaveFrontmatter } from "@/content/coreweave.mdx";
import { frontmatter as coinbaseFrontmatter } from "@/content/corebase.mdx";

const blogPosts = [
  figmaFrontmatter,
  nvidiaFrontmatter,
  coreweaveFrontmatter,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <BlogHeader />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-8">

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              onClick={() => handlePostClick(post.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;