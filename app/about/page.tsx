import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Trophy,
  Clock,
  ClipboardList,
  ThumbsUp,
  Award,
  Handshake,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import { Button, Card, CardContent } from "@/components/ui";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <section
        className="relative min-h-[450px] flex items-center bg-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/assets/section-hero.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 z-10 opacity-90"
          style={{
            backgroundImage: `linear-gradient(250deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 71%)`,
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl font-bold mb-4 border-l-4  pl-6 border-blue-800">
            About Us
          </h1>
          <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
            <Link href="/" className="hover:text-blue-900 transition-colors">
              Home
            </Link>
            <span>&raquo;</span>
            <span className="text-white">About Our Company</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="border-l-4 border-blue-900 pl-6 mb-6">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Why We're the Most Trusted IT Consulting
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our combination of technical expertise, custom solutions, and
                unparalleled customer service ensures we deliver results every
                time. We are passionate about helping your people succeed.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="shrink-0">
                  <ClipboardList
                    className="w-20 h-20 text-blue-900"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    01. Planning & Strategy
                  </h3>
                  <p className="text-gray-600">
                    We help organizations prioritize their goals and align their
                    technology with their mission and objectives through
                    strategic planning and stakeholder participation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="shrink-0">
                  <ThumbsUp
                    className="w-20 h-20 text-blue-900"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    02. Client's Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    Your satisfaction is our priority. We build long-term
                    relationships based on trust and consistent success, ensuring
                    our services evolve with your needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/assets/about/about-1.webp"
                width={500}
                height={500}
                alt="Brand New Solution"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <div className="border-l-4 border-blue-900 pl-6 mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Meet Our Brand New Solution
                </h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our core team of advisors helps clients anticipate and adapt to
                today's business challenges with innovative solutions. We
                combine intellectual property with expert consulting to drive
                growth.
              </p>
              <Link href="/services">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg font-semibold rounded flex items-center gap-2">
                  READ MORE <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Work Together Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 bg-zinc-100 p-6">
              <div className="border-l-4 border-blue-900 pl-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Reasons to Partner with Us
                </h2>
              </div>

              <div>
                <Card className="bg-transparent">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <Award
                      className="text-blue-900 shrink-0 w-18 h-18"
                      strokeWidth={1.5}
                      size={72}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Believe in Best Quality
                      </h3>
                      <p className="text-gray-600">
                        We collaborate closely with our clients, making their
                        success our own. Our commitment to quality ensures that
                        we build sustainable, long-term partnerships.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <Handshake
                      className="text-blue-900 shrink-0 w-16 h-12"
                      strokeWidth={1.5}
                      size={64}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Believe in Good Relations
                      </h3>
                      <p className="text-gray-600">
                        We follow a proven process to create win-win consulting
                        engagements that thrive. Communication and transparency
                        are key to our successful relationships.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <Lightbulb
                      className="text-blue-900 shrink-0 w-16 h-16"
                      strokeWidth={1.5}
                      size={64}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Believe in Abilities
                      </h3>
                      <p className="text-gray-600">
                        Our consultants are experts in their fields, providing
                        professional advice and hands-on support to businesses,
                        ensuring you have the right skills for every project.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src="/assets/about/about-2.webp"
                width={500}
                height={500}
                alt="Reasons to work together"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help with IT Consulting Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/assets/about/about-3.webp"
                width={500}
                height={500}
                alt="IT Consulting Help"
                className="shadow-xl w-full"
              />
            </div>
            <div>
              <div className="border-l-4 border-blue-900 pl-6 mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Do You Need Help with IT Consulting?
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get local, expert help implementing and managing your
                technology. Whether your team is working from home or remotely,
                we can help you streamline your operations and improve
                efficiency.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-600 mb-8">
                With so many choices available, our dedication and focus on your
                specific business needs is what sets us apart.
              </p>
              <Link href="/services">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg font-semibold rounded flex items-center gap-2">
                  READ MORE <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6 rounded-lg hover:shadow-md transition-shadow">
                <Trophy className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-900 mb-1">
                    450+
                  </div>
                  <div className="text-blue-900 font-semibold uppercase tracking-wide text-sm">
                    Successfully
                  </div>
                  <div className="text-gray-600">Completed Projects</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6 rounded-lg hover:shadow-md transition-shadow">
                <Users className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-900 mb-1">
                    100+
                  </div>
                  <div className="text-blue-900 font-semibold uppercase tracking-wide text-sm">
                    Clients
                  </div>
                  <div className="text-gray-600">Satisfied Customers</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 flex items-center gap-6 rounded-lg hover:shadow-md transition-shadow">
                <Clock className="w-20 h-20 text-gray-700" />
                <div>
                  <div className="text-5xl font-bold text-gray-900 mb-1">
                    5+
                  </div>
                  <div className="text-blue-900 font-semibold uppercase tracking-wide text-sm">
                    Years
                  </div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="border-l-4 border-blue-900 pl-6 mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  We Provide Solutions for Your Business
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We focus on delivering practical, scalable solutions that address
                your specific business pain points. Our goal is to empower your
                organization with technology that drives efficiency and
                innovation.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What We Do?
              </h3>
              <p className="text-gray-600 mb-8">
                Our consultants bring expert research and proven strategies to
                improve your business performance. We are problem-solvers who
                offer objective insights and implement effective solutions to
                help you succeed.
              </p>
              <Link href="/services">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg font-semibold rounded flex items-center gap-2">
                  READ MORE <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src="/assets/about/about-4.webp"
                width={500}
                height={500}
                alt="Business Solutions"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
