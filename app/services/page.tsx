import { 
  Target, 
  ShoppingCart, 
  Map, 
  Headphones, 
  Server, 
  LifeBuoy 
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui";
import { services } from "@/lib/services";

const iconMap: any = {
  Target: Target,
  ShoppingCart: ShoppingCart,
  Map: Map,
  Headphones: Headphones,
  Server: Server,
  LifeBuoy: LifeBuoy
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <section className="relative h-[400px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://ext.same-assets.com/2052011883/4073649826.png')" }} 
        />
        <div className="absolute inset-0 z-10 flex items-center justify-start opacity-10 pointer-events-none overflow-hidden pl-10">
             <span className="text-[200px] font-bold text-white leading-none whitespace-nowrap select-none">SERVICES</span>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="border-l-4 border-orange-600 pl-6">
            <h1 className="text-5xl font-bold mb-4">SERVICES</h1>
            <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
              <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
              <span>&raquo;</span>
              <span className="text-white">SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.slug} className="border-0 bg-gray-50 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-md">
                        {Icon && <Icon className="w-6 h-6 text-orange-600" />}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                        <Link href={`/services/${service.slug}`}>
                            {service.title}
                        </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

