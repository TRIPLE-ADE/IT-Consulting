import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronsRight } from "lucide-react";

import { services } from "@/lib/services";

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
              {service.title}
            </h1>
            <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
              <Link
                href="/"
                className="hover:text-orange-600 transition-colors"
              >
                Home
              </Link>
              <span>&raquo;</span>
              <span className="text-white">{service.title}</span>
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
              <div className="relative">
                <Image
                  src={service.brochure || ""}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {service.content?.headline}
              </h2>

              <p className="text-gray-600 text-lg mb-10 leading-relaxed whitespace-pre-line">
                {service.content?.intro}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {service.content?.whyTitle}
              </h3>

              <ul className="space-y-4">
                {service.content?.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-4 items-center text-gray-600 leading-relaxed"
                  >
                   <ChevronsRight className="w-6 h-6 font-bold shrink-0" strokeWidth={2.5} />
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
