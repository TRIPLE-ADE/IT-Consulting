import Link from "next/link";

import { Card, CardContent } from "@/components/ui";
import { services } from "@/lib/services";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <section
        style={{
          backgroundImage: "url('/services-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[450px] flex items-center bg-gray-900 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-black/50 z-10 opacity-90"
          style={{
            backgroundImage: `linear-gradient(250deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 71%)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl font-bold mb-4 border-l-4 border-orange-600 pl-6">
            SERVICES
          </h1>
          <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>&raquo;</span>
            <span className="text-white">SERVICES</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const linkHref =
                service.slug === "support"
                  ? "/contact"
                  : `/services/${service.slug}`;

              return (
                <Link
                  href={linkHref}
                  key={service.slug}
                  className="block group"
                >
                  <Card className="bg-gray-50 overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                        width={500}
                        height={500}
                      />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
