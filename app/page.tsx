import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Eye,
  Settings,
  CreditCard,
  Trophy,
  Clock,
  BookOpen,
  Newspaper,
  Handshake,
  Server,
  ChevronsRight,
  ArrowRight,
} from "lucide-react";

import { Button, Card, CardContent } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <section
        id="home"
        className="relative min-h-svh bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('/assets/hero.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 z-10 opacity-70"
          style={{
            backgroundImage: `linear-gradient(240deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 1) 68%)`,
          }}
        />
        <div className="px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Consulting & Managed
              <br />
              IT Services
            </h1>
            <p className="text-xl text-white mb-8">
              Streamline and secure your business operations with our expert guidance.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-6 text-lg">
                ASK FOR CONSULTATION{" "}
                <ChevronsRight className="w-10 h-10" strokeWidth={4} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16">
        <div className="px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group relative bg-gray-50 rounded-lg">
              <div className="absolute mx-4 inset-0 h-1 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <Users className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  People
                </h3>
                <p className="text-gray-600 font-medium">
                  Our team consists of dedicated account managers and certified
                  technicians who are committed to your success and care about
                  your business.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gray-50 rounded-lg">
              <div className="absolute mx-4 inset-0 h-1 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <Eye className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Purpose
                </h3>
                <p className="text-gray-600 font-medium">
                  We simplify complex technology to save you money and keep you
                  ahead of the curve, ensuring your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gray-50 rounded-lg">
              <div className="absolute mx-4 inset-0 h-1 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <Settings className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Process
                </h3>
                <p className="text-gray-600 font-medium">
                  Our time-tested delivery methods, clear communication processes,
                  and premium tools ensure consistent, high-quality results.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gray-50 rounded-lg">
              <div className="absolute mx-4 inset-0 h-1 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <CreditCard className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Our Strategy
                </h3>
                <p className="text-gray-600 font-medium">
                  We help you navigate industry challenges, secure your data from
                  threats, and eliminate IT barriers that stunt your growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Trusted Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/about/about-1.webp"
                alt="Consulting Team"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-blue-900 pl-4">
                Why We're the Most Trusted
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our combination of technical expertise, custom solutions, and
                unparalleled customer service ensures we deliver results every
                time. We are passionate about helping your people succeed.
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-semibold text-lg px-10"
                >
                  READ MORE <ArrowRight className="w-10 h-10" strokeWidth={4} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6">
                <Trophy className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-800">450+</div>
                  <div className="text-blue-900 font-semibold">
                    Successfully
                  </div>
                  <div className="text-gray-600">Completed Projects</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6">
                <Users className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-800">100+</div>
                  <div className="text-blue-900 font-semibold">Clients</div>
                  <div className="text-gray-600">Satisfied Customers</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6">
                <Clock className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-800">5+</div>
                  <div className="text-blue-900 font-semibold">Years</div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section
        className="py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url('/assets/industry.webp')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 md:max-w-1/2">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-blue-900 pl-4">
                Partner with IT Specialists Who Understand Your Industry
              </h2>
              <p className="text-white mb-6">
                The IT consulting industry is full of general technology
                solutions. To get the best outcomes, you need a partner who
                knows your space.
              </p>
              <p className="text-white">
                Our services leverage specialists with years of experience in
                your industry. We deploy best practices, technology, and
                processes that align with your unique challenges, keeping your
                data secure, your network running, and your budget in check.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <Server className="w-16 h-16 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">
                  Health Care
                  <br />
                  Information
                  <br />
                  Technology
                </h3>
              </div>
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="text-center">
                <Newspaper className="w-16 h-16 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">
                  Creative Media
                </h3>
              </div>
              <div className="text-center">
                <Handshake className="w-16 h-16 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">Non-Profit</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you need advisory services from our IT management
            consultants or fully outsourced managed IT services, think of us as
            your technology partner anywhere in the USA.
          </p>

          <div className="grid md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/assets/services/strategic-1.webp"
                  alt="IT Strategic Planning"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    IT Strategic Planning
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We bring years of strategic IT planning experience to help
                    you design, implement, and maintain a world-class IT system
                    at an efficient cost.
                  </p>
                  <Link href="/services/it-strategic-planning">
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold flex items-center gap-2">
                      READ MORE <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/assets/services/procurement-1.webp"
                  alt="IT Procurement Services"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    IT Procurement Services
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our IT procurement services provide product recommendations,
                    accurate specifications, logistics, ordering, installation,
                    and returns.
                  </p>
                  <Link href="/services/it-procurement-services">
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold flex items-center gap-2">
                      READ MORE <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/assets/services/assessment-1.webp"
                  width={500}
                  height={500}
                  alt="IT Assessment Services"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    IT Assessment Services
                  </h3>
                  <p className="text-gray-600 mb-6">
                    With in-depth technology assessments, you can identify areas
                    of improvement to support your business growth and
                    security.
                  </p>
                  <Link href="/services/it-assessment-services">
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold flex items-center gap-2">
                      READ MORE <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/assets/services/manages-1.webp"
                  width={500}
                  height={500}
                  alt="Managed IT Services"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Managed IT Services
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get help implementing or managing technology from a local
                    team. We support your operations whether you are remote or
                    on-site.
                  </p>
                  <Link href="/services/managed-it-services">
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold flex items-center gap-2">
                      READ MORE <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/testimonial.webp"
                alt="Client Meeting"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-blue-900 pl-4">
                What Clients Say About Our IT Consulting Firm
              </h2>
              <p className="text-gray-600 mb-8">
                We helped various companies optimize their operations with a
                5-year IT strategy that saw a return in their first 6 months
                with Consulting With a Cause. They handled our office moves, IT
                strategy, and minimized downtime.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
