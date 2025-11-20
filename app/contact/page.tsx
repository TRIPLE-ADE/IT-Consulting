import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Button, Input, Textarea, Card, CardContent } from "@/components/ui";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <section
        className="relative h-[450px] flex items-center bg-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/contact-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-black/50 z-10 opacity-20"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%)`,
          }}
        />
        {/* Background overlay icons effect - recreated simplistically */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden gap-8">
          <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center">
            <Mail className="w-16 h-16" />
          </div>
          <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center mt-24">
            <Phone className="w-16 h-16" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl font-bold mb-4 border-l-4 border-orange-600 pl-6">
            Contact Us
          </h1>
          <div className="flex items-center text-sm font-medium text-gray-300 space-x-2">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>&raquo;</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  We Love to Hear From You
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                </p>
              </div>

              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="First Name:"
                        className="bg-gray-50 border-gray-200 h-12 text-base"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your mail:"
                        className="bg-gray-50 border-gray-200 h-12 text-base"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject:"
                        className="bg-gray-50 border-gray-200 h-12 text-base"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Message:"
                        className="bg-gray-50 border-gray-200 min-h-[150px] text-base resize-none"
                      />
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold uppercase rounded w-full md:w-auto">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Details & Map */}
            <div className="space-y-12">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
                    CONTACT DETAILS
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                      <p className="text-gray-600 text-lg">
                        20333 Tx-249 Suite 226 Houston Tx 77070
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-orange-600 shrink-0" />
                      <p className="text-gray-600 text-lg">(979) 661-6734</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-orange-600 shrink-0" />
                      <p className="text-gray-600 text-lg">
                        info@consultingwithacause.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                    MAP
                  </h3>
                  <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md relative">
                    {/* Google Map Embed */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.662887863778!2d-95.5656236243993!3d29.96040367496615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cd5c4166859d%3A0x5392f97098086852!2s20333%20TX-249%20Suite%20226%2C%20Houston%2C%20TX%2077070!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-orange-600 py-10 relative">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-semibold">
            Need help? Call our award-winning support team 24/7 at (979)
            661-6734
          </h3>
          <div className="w-4 h-4 bg-orange-600 rotate-45 mx-auto -mb-12 mt-8 translate-y-1/2 border-r border-b border-orange-500 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
}
