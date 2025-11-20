import { notFound } from "next/navigation";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

import { Input, Button } from "@/components/ui";
import { blogPosts } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <section className="relative bg-gray-50 py-16 border-b border-gray-200" style={{ backgroundImage: `url("/single-blog-hero.webp")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <div className="absolute inset-0 bg-black/50 z-10 opacity-85" style={{ backgroundImage: `linear-gradient(250deg, rgba(255, 255, 255, 1) 100%, rgba(0, 0, 0, 1) 71%)` }} />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 max-w-4xl mx-auto leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-wide font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>»</span>
            <Link href="/blog" className="hover:text-orange-600 transition-colors">Blog</Link>
            <span>»</span>
            <span className="text-gray-400 line-clamp-1 md:line-clamp-none">{post.title}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">
              {post.date}
            </p>
            
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full rounded-lg shadow-lg mb-8"
            />

            <div 
              className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-800 prose-a:text-orange-600 prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* Share Widget */}
            <div className="bg-white p-6 border-b border-gray-100">
              <h3 className="text-lg font-serif text-gray-500 mb-4">Share:</h3>
              <div className="flex gap-4">
                <a href="#" className="text-orange-500 hover:text-orange-600"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-orange-500 hover:text-orange-600"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-orange-500 hover:text-orange-600"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            {/* More Posts */}
            <div>
              <h3 className="text-lg font-serif text-gray-500 mb-6">More Posts</h3>
              <div className="space-y-6">
                {blogPosts.filter(p => p.id !== post.id).map(p => (
                  <div key={p.id} className="flex gap-4 group">
                    <div className="shrink-0 w-24 h-16 overflow-hidden rounded">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <Link href={`/blog/${p.slug}`}>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-2 mb-1">
                          {p.title}
                        </h4>
                      </Link>
                      <Link href={`/blog/${p.slug}`} className="text-xs text-orange-500 font-semibold uppercase">
                        Read More »
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Widget */}
            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-lg">
              <h3 className="text-2xl font-serif text-gray-800 mb-6 text-center border-b border-gray-100 pb-4">
                Send Us A Message
              </h3>
              <form className="space-y-4">
                <Input placeholder="Full Name" className="bg-white border-gray-200" />
                <Input placeholder="Phone" className="bg-white border-gray-200" />
                <Input placeholder="Email" type="email" className="bg-white border-gray-200" />
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                  Send →
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

