"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ChevronDown from "./ui/chevron-down";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const linkClasses =
    "text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors relative group flex items-center h-28 tracking-wide";

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getUnderlineClass = (path: string) => {
    return cn(
      "absolute left-0 bottom-0 w-full h-[6px] bg-orange-600 transition-transform duration-300 origin-center",
      isActive(path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    );
  };

  return (
    <header className="bg-white shadow-sm px-4 sticky top-0 z-50 font-sans">
      <div className="h-full flex items-center justify-between">
        <Link href="/" className="relative w-90 h-28">
          <Image
            sizes="(max-width: 381px) 100vw, 381px"
            fill
            src="/logo.webp"
            alt="Consulting with a Cause"
            className="object-contain"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 h-full uppercase">
          {/* Divider Item */}
          <div className="flex items-center h-full relative">
            <Link
              href="/"
              className={cn(linkClasses, isActive("/") && "text-orange-600")}
            >
              HOME
              <span className={getUnderlineClass("/")} />
            </Link>
            <span className="ml-5 text-gray-800 text-xl font-semibold">|</span>
          </div>

          <div className="flex items-center h-full relative">
            <Link
              href="/about"
              className={cn(
                linkClasses,
                isActive("/about") && "text-orange-600"
              )}
            >
              ABOUT US
              <span className={getUnderlineClass("/about")} />
            </Link>
            <span className="ml-5 text-gray-800 text-xl font-semibold">|</span>{" "}
          </div>

          {/* Services Dropdown */}
          <div className="relative h-full flex items-center group">
            <div className="flex items-center h-full relative">
              <Link
                href="/services"
                className={cn(
                  linkClasses,
                  "group/link",
                  isActive("/services") && "text-orange-600"
                )}
              >
                <span className={cn("flex items-center gap-2")}>
                  SERVICES
                  <ChevronDown
                    className={cn(
                      "mb-0.5",
                      isActive("/services") && "text-orange-600"
                    )}
                  />
                </span>
                <span className={getUnderlineClass("/services")} />
              </Link>
              <span className="ml-5 text-gray-800 text-xl font-semibold">|</span>{" "}
            </div>

            <div className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-b-md overflow-hidden hidden group-hover:block transition-all duration-200 ease-in-out transform origin-top z-50">
              <div className="flex flex-col py-2 normal-case">
                <Link
                  href="/services/it-assessment-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-600 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Assessment Services
                </Link>
                <Link
                  href="/services/it-procurement-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-600 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Procurement Services
                </Link>
                <Link
                  href="/services/it-strategic-planning"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-600 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Strategic Planning
                </Link>
                <Link
                  href="/services/it-helpdesk-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-600 border-b border-gray-100 last:border-0 transition-colors"
                >
                  IT Helpdesk Services
                </Link>
                <Link
                  href="/services/managed-it-services"
                  className="px-5 py-3 text-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-600 transition-colors"
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
                isActive("/blog") && "text-orange-600"
              )}
            >
              BLOG
              <span className={getUnderlineClass("/blog")} />
            </Link>
            <span className="ml-5 text-gray-800 text-xl font-semibold">|</span>{" "}
          </div>

          <Link
            href="/contact"
            className={cn(
              linkClasses,
              isActive("/contact") && "text-orange-600"
            )}
          >
            CONTACT US
            <span className={getUnderlineClass("/contact")} />
          </Link>
        </nav>
        <Link href="/contact">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-6 rounded-full text-sm tracking-wider shadow-lg hover:shadow-xl transition-all">
            GET STARTED
          </Button>
        </Link>
      </div>
    </header>
  );
}
