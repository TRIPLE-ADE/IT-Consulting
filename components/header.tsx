"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ChevronDown from "./ui/chevron-down";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const linkClasses =
    "font-semibold text-sm uppercase text-gray-900 hover:text-blue-900 transition-colors relative group flex items-center h-20 tracking-wide";

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getUnderlineClass = (path: string) => {
    return cn(
      "absolute left-0 bottom-0 w-full h-[6px] bg-blue-900 transition-transform duration-300 origin-center",
      isActive(path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    );
  };

  return (
    <header className="bg-white shadow-sm px-4 sticky top-0 z-50 font-sans">
      <div className="h-full flex items-center justify-between container mx-auto">
        <Link href="/" className="relative w-50 h-20">
          <Image
            sizes="(max-width: 180px) 100vw, 180px"
            fill
            src="/logo.webp"
            alt="Consulting with a Cause"
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-800 hover:text-blue-900 transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className="hidden lg:flex items-center gap-5 h-full uppercase">
          {/* Divider Item */}
          <div className="flex items-center h-full relative">
            <Link
              href="/"
              className={cn(linkClasses, isActive("/") && "text-blue-900")}
            >
              HOME
              <span className={getUnderlineClass("/")} />
            </Link>
          </div>

          <div className="flex items-center h-full relative">
            <Link
              href="/about"
              className={cn(
                linkClasses,
                isActive("/about") && "text-blue-900"
              )}
            >
              ABOUT US
              <span className={getUnderlineClass("/about")} />
            </Link>
          </div>

          {/* Services Dropdown */}
          <div className="relative h-full flex items-center group">
            <div className="flex items-center h-full relative">
              <Link
                href="/services"
                className={cn(
                  linkClasses,
                  "group/link",
                  isActive("/services") && "text-blue-900"
                )}
              >
                <span className={cn("flex items-center gap-2")}>
                  SERVICES
                  <ChevronDown
                    className={cn(
                      "mb-0.5",
                      isActive("/services") && "text-blue-900"
                    )}
                  />
                </span>
                <span className={getUnderlineClass("/services")} />
              </Link>
            </div>

            <div className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-b-md overflow-hidden hidden group-hover:block transition-all duration-200 ease-in-out transform origin-top z-50">
              <div className="flex flex-col py-2 normal-case">
                <Link
                  href="/services/it-assessment-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-900 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Assessment Services
                </Link>
                <Link
                  href="/services/it-procurement-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-900 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Procurement Services
                </Link>
                <Link
                  href="/services/it-strategic-planning"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-900 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Strategic Planning
                </Link>
                <Link
                  href="/services/it-helpdesk-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-900 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Helpdesk Services
                </Link>
                <Link
                  href="/services/managed-it-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-900 transition-colors"
                >
                  Managed IT Services
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center h-full relative">
            <Link
              href="/blog"
              className={cn(
                linkClasses,
                isActive("/blog") && "text-blue-900"
              )}
            >
              BLOG
              <span className={getUnderlineClass("/blog")} />
            </Link>
          </div>

          <Link
            href="/contact"
            className={cn(
              linkClasses,
              isActive("/contact") && "text-blue-900"
            )}
          >
            CONTACT US
            <span className={getUnderlineClass("/contact")} />
          </Link>
        </nav>
        <Link href="/contact" className="hidden lg:block">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-6 rounded-full text-sm tracking-wider shadow-lg hover:shadow-xl transition-all">
            GET STARTED
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out lg:hidden border-t border-gray-100",
          isMenuOpen ? "max-h-screen translate-y-0" : "max-h-0 -translate-y-2"
        )}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            className={cn("text-lg font-bold tracking-wide hover:text-blue-900 transition-colors", isActive("/") ? "text-blue-900" : "text-gray-800")}
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={cn("text-lg font-bold tracking-wide hover:text-blue-900 transition-colors", isActive("/about") ? "text-blue-900" : "text-gray-800")}
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>

          {/* Mobile Services Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "flex items-center justify-between w-full text-lg font-bold tracking-wide hover:text-blue-900 transition-colors",
                isActive("/services") ? "text-blue-900" : "text-gray-800"
              )}
            >
              SERVICES
              <ChevronDown
                className={cn(
                  "transition-transform duration-300",
                  isServicesOpen ? "rotate-180" : ""
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isServicesOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              )}
            >
              <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100 ml-1">
                <Link
                  href="/services/it-assessment-services"
                  className="text-gray-600 hover:text-blue-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  IT Assessment Services
                </Link>
                <Link
                  href="/services/it-procurement-services"
                  className="text-gray-600 hover:text-blue-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  IT Procurement Services
                </Link>
                <Link
                  href="/services/it-strategic-planning"
                  className="text-gray-600 hover:text-blue-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  IT Strategic Planning
                </Link>
                <Link
                  href="/services/it-helpdesk-services"
                  className="text-gray-600 hover:text-blue-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  IT Helpdesk Services
                </Link>
                <Link
                  href="/services/managed-it-services"
                  className="text-gray-600 hover:text-blue-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Managed IT Services
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/blog"
            className={cn("text-lg font-bold tracking-wide hover:text-blue-900 transition-colors", isActive("/blog") ? "text-blue-900" : "text-gray-800")}
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </Link>

          <Link
            href="/contact"
            className={cn("text-lg font-bold tracking-wide hover:text-blue-900 transition-colors", isActive("/contact") ? "text-blue-900" : "text-gray-800")}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>

          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-6 rounded-xl text-sm tracking-wider shadow-lg hover:shadow-xl transition-all">
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
