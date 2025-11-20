import Link from "next/link";

import { Card, CardContent } from "@/components/ui";
import { blogPosts } from "@/lib/blog";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <section
        style={{
          backgroundImage: "url('/blog-hero.webp')",
          backgroundPosition: "center center",
        }}
        className="relative h-[450px] flex items-center bg-gray-900 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-black/50 z-10 opacity-90"
          style={{
            backgroundImage: `linear-gradient(250deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 0%)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl font-bold mb-4 border-l-4 border-orange-600 pl-6">
            Blog
          </h1>
          <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>&raquo;</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <Card
                  key={post.id}
                  className="border-0 shadow-lg overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide">
                      {post.category}
                    </div>
                    {/* Overlay icon matching design (magnifying glass / link) */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {/* Icons could go here if we want exact hover effect, keeping simple for now */}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-orange-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-orange-600 font-bold text-sm uppercase tracking-wide hover:text-orange-700 flex items-center gap-1"
                      >
                        Read More &raquo;
                      </Link>
                    </div>
                    <div className="mt-4 text-xs text-gray-400 font-medium flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.comments}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
