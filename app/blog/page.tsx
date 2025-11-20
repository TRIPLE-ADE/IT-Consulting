import Link from "next/link";
import { Card, CardContent } from "@/components/ui";

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: "https://ext.same-assets.com/2052011883/1831906749.png", 
      category: "IT CONSULTANT",
      title: "5 Tips on How IT Consulting Services Can Help You be More Efficient",
      excerpt: "Considering the time and energy it takes to start and maintain an IT infrastructure, many business owners don't have the resources to handle everything themselves,",
      date: "November 17, 2022",
      comments: "No Comments"
    },
    {
      id: 2,
      image: "https://ext.same-assets.com/2052011883/712492790.png", 
      category: "IT CONSULTANT",
      title: "What Are Some Must-Haves in An IT Consultant's Toolkit",
      excerpt: "If you're an IT consultant, then you know that the more knowledge and experience you have under your belt, the better prepared you are to",
      date: "October 31, 2022",
      comments: "No Comments"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <section className="relative h-[400px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://ext.same-assets.com/2052011883/4073649826.png')" }} 
        />
        {/* Background Text Overlay Effect - partially recreated based on design */}
        <div className="absolute inset-0 z-10 flex items-center justify-end opacity-10 pointer-events-none overflow-hidden">
             <span className="text-[200px] font-bold text-white leading-none whitespace-nowrap select-none">CONSULTING</span>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="border-l-4 border-orange-600 pl-6">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
              <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
              <span>&raquo;</span>
              <span className="text-white">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg overflow-hidden group">
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
                        href={`/blog/${post.id}`} 
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

