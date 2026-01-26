"use client";
import { getImgPath } from "@/utils/imagePath";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Footer: FC = () => {
  const pathname = usePathname();

  return (
    <footer className={`relative w-full h-full ${
      pathname === "/" ? "pt-20 sm:pt-32" : "pt-12 sm:pt-16"
    }`}>
      {/* Main Footer */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black dark:from-slate-950 dark:via-slate-900 dark:to-black border-t-2 border-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-16 lg:py-20">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src={getImgPath("/images/logo/logo.png")}
                  alt="DevNest Logo"
                  width={140}
                  height={45}
                  style={{ width: "auto", height: "auto" }}
                  quality={100}
                  className="brightness-0 invert w-32 sm:w-40"
                />
              </Link>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Specializing in WordPress, PHP, Laravel & Shopify development. Crafting powerful digital solutions for businesses worldwide.
              </p>
              <div className="flex gap-3 pt-2">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700 hover:bg-cyan-500 text-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700 hover:bg-cyan-500 text-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.746 0-9.637h3.554v1.365c.42-.649 1.175-1.574 2.847-1.574 2.078 0 3.63 1.357 3.63 4.27v5.576zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.768-1.71 1.959-1.71 1.188 0 1.914.754 1.939 1.71 0 .951-.751 1.71-1.983 1.71zm1.581 11.597H3.754V9.815h3.164v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700 hover:bg-cyan-500 text-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.915 9.957 9.957 0 01-2.828.856 4.958 4.958 0 00-8.594 4.518 14.046 14.046 0 01-10.182-5.126 4.92 4.92 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b border-cyan-500">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> WordPress Development
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> PHP Development
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> Laravel APIs
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> Shopify Stores
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b border-cyan-500">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> About Me
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-cyan-500 flex-shrink-0">→</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b border-cyan-500">Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-slate-800 rounded-lg p-3 sm:p-4 hover:bg-slate-700 transition-colors duration-300">
                  <p className="text-cyan-400 text-xs sm:text-sm font-semibold">Email</p>
                  <Link href="mailto:contact@devnest.io" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm break-all">
                    contact@devnest.io
                  </Link>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 sm:p-4 hover:bg-slate-700 transition-colors duration-300">
                  <p className="text-cyan-400 text-xs sm:text-sm font-semibold">Response Time</p>
                  <p className="text-slate-300 text-xs sm:text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700"></div>

          {/* Footer Bottom */}
          <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              <p>&copy; 2024 DevNest. All rights reserved.</p>
              <p className="text-xs mt-1 text-slate-500">Crafted with passion for beautiful web experiences.</p>
            </div>
            <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
