import Link from "next/link";
import Image from "next/image";
import { Users, Trophy, Clock } from "lucide-react";

import { Button, Card, CardContent } from "@/components/ui";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <section
        className="relative min-h-[450px] flex items-center bg-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/about-us.webp')`,
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
          <h1 className="text-4xl font-bold mb-4 border-l-4  pl-6 border-orange-600">
            About Us
          </h1>
          <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
            <Link href="/" className="hover:text-orange-600 transition-colors">
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
              <div className="border-l-4 border-orange-600 pl-6 mb-6">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Why We're the Most Trusted IT Consulting
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                With an unwavering passion to help your people succeed, years of
                technical experience backed by our custom solutions, process and
                unparalleled customer service, we deliver every time.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="shrink-0">
                  <Image
                    src="/about-icon1.webp"
                    alt="About Icon 1"
                    width={80}
                    height={80}
                    className="w-20 h-20 text-orange-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    01. Planning & Strategy
                  </h3>
                  <p className="text-gray-600">
                    A Strategic Planning Consultant helps organizations
                    streamline their priorities by directing them toward the
                    company mission, goals, and objectives through stakeholder
                    participation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="shrink-0">
                  <Image
                    src="/about-icon2.webp"
                    alt="About Icon 2"
                    width={80}
                    height={80}
                    className="w-20 h-20 text-orange-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    02. Client's Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    A client's satisfaction can change over time depending on
                    the success of your consulting - and because their
                    satisfaction is what determines whether they'll continue to
                    use your business in the future.
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
                src="/Meet-Our-Brand-New.webp"
                width={500}
                height={500}
                alt="Brand New Solution"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <div className="border-l-4 border-orange-600 pl-6 mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Meet Our Brand New Solution
                </h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Products and Solutions are Driven by a core team of Boost
                advisors that help clients anticipate and adapt to today's
                business issues in innovative ways that mesh intellectual
                property with our consulting services.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Work Together Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 bg-zinc-100 p-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Some Reasons to Work Together
                </h2>
              </div>

              <div>
                <Card className="bg-transparent">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <Image
                      src="/Quality.webp"
                      alt="Best Quality"
                      width={80}
                      height={80}
                      className="w-18 h-18 text-orange-600"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Believe in Best Quality
                      </h3>
                      <p className="text-gray-600">
                        They are natural collaborators who understand that
                        linking arms with their clients and making their success
                        depend upon the client's satisfaction is the only way to
                        build a sustainable book of business.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <Image
                      src="/Relation.webp"
                      alt="Good Relation"
                      width={40}
                      height={40}
                      className="w-16 h-12"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Believe in Good Relation
                      </h3>
                      <p className="text-gray-600">
                        Why do some external consulting relationships seem to
                        thrive, while others can become very challenging? But
                        there is a simple process for creating a win/win
                        situation for consulting engagements.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <Image
                      src="/Abilities.webp"
                      alt="Abilities"
                      width={80}
                      height={80}
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Believe in Abilities
                      </h3>
                      <p className="text-gray-600">
                        A consultant is a person who's an expert in a particular
                        field who gives professional advice to individuals and
                        businesses in their area of expertise, usually on a
                        temporary or contract basis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src="/Consultant-profesional.webp"
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
                src="/Consultant.webp"
                width={500}
                height={500}
                alt="IT Consulting Help"
                className="shadow-xl w-full"
              />
            </div>
            <div>
              <div className="border-l-4 border-orange-600 pl-6 mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Do You Need Help with IT Consulting
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get help implementing or managing technology from a team based
                right here in business. Whether your team is working from home
                or working remotely, consulting with a cause can help you
                streamline your operations.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Us ?
              </h3>
              <p className="text-gray-600 mb-8">
                With So Many Choices Available Our Dedication And Focus On Your
                Business Is What Sets Us Apart.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded">
                READ MORE
              </Button>
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
                  <div className="text-orange-600 font-semibold uppercase tracking-wide text-sm">
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
                  <div className="text-orange-600 font-semibold uppercase tracking-wide text-sm">
                    Clients
                  </div>
                  <div className="text-gray-600">Satisfied Customer</div>
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
                  <div className="text-orange-600 font-semibold uppercase tracking-wide text-sm">
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
              <div className="border-l-4 border-orange-600 pl-6 mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  We Provide Solution on Your Business
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                On the other hand we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment so blinded by desire that they cannot
                foresee.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What We Do ?
              </h3>
              <p className="text-gray-600 mb-8">
                Consultants' expert research, solutions, and experience to
                improve business performance. They are problem-solvers who go
                into a business to offer objective insights and help put
                suggested strategies into place.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded">
                READ MORE
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src="/about-image.webp"
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
