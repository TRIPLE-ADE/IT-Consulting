import Image from "next/image";
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
        className="relative min-h-[120vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('/hero.webp')`,
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
              Streamline and secure your business operations in just 90 Days.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 text-lg">
              ASK FOR CONSULTATION{" "}
              <ChevronsRight className="w-10 h-10" strokeWidth={4} />
            </Button>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-md inset-shadow-black divide-x divide-gray-200">
            <Card className="group relative">
              <div className="absolute mx-4 inset-0 h-1 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-12">
                <Users className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  People
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  You deserve the best. We have the best. Simply put, we care
                  every single one of us, from the account managers to the
                  technicians.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative">
              <div className="absolute mx-4 inset-0 h-1 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-12">
                <Eye className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Purpose
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  Your security and peace of mind drive us to be better
                  everyday. Simplifying the complex, saving you money and
                  staying ahead of rapidly changing technology.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative">
              <div className="absolute mx-4 inset-0 h-1 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-12">
                <Settings className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Process
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  It's not just what we do, but how we do it. Our time tested
                  delivery methods, communication process and premium software
                  and hardware tools.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative">
              <div className="absolute mx-4 inset-0 h-1 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-12">
                <CreditCard className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Strategy
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  We'll help you navigate the tech challenges of your industry,
                  keep your data secure hackers, and eliminate IT issues that
                  stunt growth.
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
                src="/trusted.webp"
                alt="Consulting Team"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
                Why We're the Most Trusted
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                With an unwavering passion to help your people succeed, years of
                technical experience backed by our custom solutions, process and
                unparalleled customer service, we deliver every time.
              </p>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-10">
                READ MORE <ArrowRight className="w-10 h-10" strokeWidth={4} />
              </Button>
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
                  <div className="text-orange-600 font-semibold">
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
                  <div className="text-orange-600 font-semibold">Clients</div>
                  <div className="text-gray-600">Satisfied Customer</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6">
                <Clock className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-800">5+</div>
                  <div className="text-orange-600 font-semibold">Years</div>
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
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/building.webp')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-row md:flex-col gap-12 md:max-w-1/2">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
                Work with an IT Consulting Firm that Knows Your Industry.
              </h2>
              <p className="text-gray-600 mb-6">
                The IT consulting industry is full of general technology
                solutions aimed across any sized business. To get the best
                outcomes, you need to work with IT consulting firm that know
                your space.
              </p>
              <p className="text-gray-600">
                Our IT consulting services leverage specialists with a year of
                experience in your industry. We'll deploy best practices,
                technology, and processes that align to the unique challenges of
                your industry – keeping your data secure, your network running,
                and budget in check.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <Server className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">
                  Health Care
                  <br />
                  Information
                  <br />
                  Technology
                </h3>
              </div>
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="text-center">
                <Newspaper className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">
                  Creative Media
                </h3>
              </div>
              <div className="text-center">
                <Handshake className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Non-Profit</h3>
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
            consultants, or fully outsourced managed IT services – think of us
            as your technology partner, anywhere in USA.
          </p>

          <div className="grid md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/IT-Strategic-Planning.webp"
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
                    Consulting With a Cause brings many years of strategic IT
                    planning experience to help you design, implement, and
                    maintain a world-class IT system at an efficient cost.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/IT-Procurement-Services.webp"
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
                    Consulting With a Cause IT procurement services provide
                    product recommendations, accurate specifications, logistics,
                    ordering, installation, and returns.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/IT-Assessment-Services.webp"
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
                    of improvement to support your business growth.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <Image
                  src="/IT-Services.webp"
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
                    Get help implementing or managing technology from a team
                    based right here. Whether your team is
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
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
                src="/IT-Consulting-Firm.webp"
                alt="Client Meeting"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
                What Clients Say About Our IT Consulting Firm !
              </h2>
              <p className="text-gray-600 mb-8">
                We helped various companies optimize their operations with a 5
                year IT strategy that saw return in their first 6 months with
                Consulting With a Cause. moves, IT strategy, and managing
                downtime.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
