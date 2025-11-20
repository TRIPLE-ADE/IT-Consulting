import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Eye, Settings, CreditCard, Trophy, Clock, Server, BookOpen, Newspaper, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://ext.same-assets.com/2052011883/4073649826.png')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Consulting & Managed<br />IT Services
            </h1>
            <p className="text-xl text-white mb-8">
              Streamline and secure your business operations in just 90 Days.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 text-lg">
              ASK FOR CONSULTATION →
            </Button>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">People</h3>
                <p className="text-gray-600">
                  You deserve the best. We have the best. Simply put, we care – every single one of us, from the account managers to the technicians.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Eye className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Purpose</h3>
                <p className="text-gray-600">
                  Your security and peace of mind drive us to be better everyday. Simplifying the complex, saving you money and staying ahead of rapidly changing technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Settings className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Process</h3>
                <p className="text-gray-600">
                  It's not just what we do, but how we do it. Our time tested delivery methods, communication process and premium software and hardware tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <CreditCard className="w-16 h-16 text-gray-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Strategy</h3>
                <p className="text-gray-600">
                  We'll help you navigate the tech challenges of your industry, keep your data secure hackers, and eliminate IT issues that stunt growth.
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
              <img
                src="https://ext.same-assets.com/2052011883/712492790.png"
                alt="Consulting Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
                Why We're the Most Trusted
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                With an unwavering passion to help your people succeed, years of technical experience backed by our custom solutions, process and unparalleled customer service, we deliver every time.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8">
                READ MORE →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center gap-6">
              <Trophy className="w-20 h-20 text-gray-700" />
              <div>
                <div className="text-5xl font-bold text-gray-800">450+</div>
                <div className="text-orange-600 font-semibold">Successfully</div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Users className="w-20 h-20 text-gray-700" />
              <div>
                <div className="text-5xl font-bold text-gray-800">100+</div>
                <div className="text-orange-600 font-semibold">Clients</div>
                <div className="text-gray-600">Satisfied Customer</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Clock className="w-20 h-20 text-gray-700" />
              <div>
                <div className="text-5xl font-bold text-gray-800">5+</div>
                <div className="text-orange-600 font-semibold">Years</div>
                <div className="text-gray-600">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
                Work with an IT Consulting Firm that Knows Your Industry.
              </h2>
              <p className="text-gray-600 mb-6">
                The IT consulting industry is full of general technology solutions aimed across any sized business. To get the best outcomes, you need to work with IT consulting firm that know your space.
              </p>
              <p className="text-gray-600">
                Our IT consulting services leverage specialists with a year of experience in your industry. We'll deploy best practices, technology, and processes that align to the unique challenges of your industry – keeping your data secure, your network running, and budget in check.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <Server className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Health Care<br />Information<br />Technology</h3>
              </div>
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="text-center">
                <Newspaper className="w-16 h-16 text-gray-700 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Creative Media</h3>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you need advisory services from our IT management consultants, or fully outsourced managed IT services – think of us as your technology partner, anywhere in USA.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src="https://ext.same-assets.com/2052011883/1831906749.png"
                  alt="IT Strategic Planning"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">IT Strategic Planning</h3>
                  <p className="text-gray-600 mb-6">
                    Consulting With a Cause brings many years of strategic IT planning experience to help you design, implement, and maintain a world-class IT system at an efficient cost.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src="https://ext.same-assets.com/2052011883/1128398994.png"
                  alt="IT Procurement Services"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">IT Procurement Services</h3>
                  <p className="text-gray-600 mb-6">
                    Consulting With a Cause IT procurement services provide product recommendations, accurate specifications, logistics, ordering, installation, and returns.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src="https://ext.same-assets.com/2052011883/3503639748.png"
                  alt="IT Assessment Services"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">IT Assessment Services</h3>
                  <p className="text-gray-600 mb-6">
                    With in-depth technology assessments, you can identify areas of improvement to support your business growth.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    READ MORE
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src="https://ext.same-assets.com/2052011883/708922370.png"
                  alt="Managed IT Services"
                  className="w-full h-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Managed IT Services</h3>
                  <p className="text-gray-600 mb-6">
                    Get help implementing or managing technology from a team based right here. Whether your team is
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
              <img
                src="https://ext.same-assets.com/2052011883/518649123.png"
                alt="Client Meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-4">
                What Clients Say About Our IT Consulting Firm !
              </h2>
              <p className="text-gray-600 mb-8">
                We helped various companies optimize their operations with a 5 year IT strategy that saw return in their first 6 months with Consulting With a Cause. moves, IT strategy, and managing downtime.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-xl font-medium">
            Need help? Call our award-winning support team 24/7 at (979) 661-6734
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
