
import { Header, Footer } from "@/components/index";
import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <section className="relative h-[400px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://ext.same-assets.com/2052011883/4073649826.png')" }} 
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 z-10 flex items-center justify-start opacity-10 pointer-events-none overflow-hidden pl-10">
             <span className="text-[150px] font-bold text-white leading-none whitespace-nowrap select-none">CONSULTING</span>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="border-l-4 border-orange-600 pl-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
              <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
              <span>&raquo;</span>
              <span className="text-white">{service.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link 
                        href={`/services/${s.slug}`}
                        className={`block px-4 py-3 text-sm font-semibold transition-colors border-l-2 ${
                          s.slug === slug 
                            ? "bg-white text-orange-600 border-orange-600 shadow-sm" 
                            : "text-gray-600 border-transparent hover:bg-white hover:text-orange-600 hover:border-orange-300"
                        }`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brochure/Contact Widget */}
               <div className="relative rounded-lg overflow-hidden h-[300px]">
                   <img 
                    src="https://ext.same-assets.com/2052011883/1831906749.png" 
                    alt="Consulting" 
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-orange-600/80 flex flex-col justify-center items-center text-white p-6 text-center">
                       <FileText className="w-12 h-12 mb-4" />
                       <h3 className="text-2xl font-bold mb-2">CONSULTING</h3>
                       <p className="text-sm mb-4 opacity-90">With A Cause</p>
                   </div>
               </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
               <div className="mb-8 rounded-lg overflow-hidden h-[400px] shadow-lg">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                   />
               </div>
               
               <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                 {service.content.headline}
               </h2>
               
               <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                 {service.content.intro}
               </p>

               <h3 className="text-xl font-bold text-gray-900 mb-6">
                 {service.content.whyTitle}
               </h3>

               <ul className="space-y-4">
                 {service.content.points.map((point, index) => (
                   <li key={index} className="flex gap-4 items-start text-gray-600 leading-relaxed">
                     <div className="shrink-0 mt-1">
                       <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" /> 
                       {/* Or use double arrow as per design: » */}
                       {/* <span className="text-orange-600 font-bold text-xl">»</span> */}
                     </div>
                     <span>{point}</span>
                   </li>
                 ))}
               </ul>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

