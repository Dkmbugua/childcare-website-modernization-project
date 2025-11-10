"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/#our-story" },
  { name: "Programs", href: "/#our-programs" },
  { name: "Enrichment", href: "/#enrichment-programs" },
  { name: "Mission", href: "/#our-mission" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section based on scroll position
      const sections = navLinks.map(link => {
        const id = link.href.replace('/#', '');
        if (id === '/') return { name: link.name, element: null, offset: 0 };
        const element = document.getElementById(id);
        return { 
          name: link.name, 
          element,
          offset: element ? element.offsetTop - 100 : 0
        };
      });

      const scrollPosition = window.scrollY;
      
      // Find which section we're currently in
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element && scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].name);
          return;
        }
      }
      
      // Default to Home if at top
      if (scrollPosition < 100) {
        setActiveSection("Home");
      }
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Initial check
    handleScroll();
    
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <a href="#PAGES_CONTAINER" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[120] px-4 py-2 bg-primary-yellow text-charcoal-black rounded font-semibold">
        Skip to Main Content
      </a>
      
      {/* Enhanced top info bar with better visibility */}
      <div className="bg-gradient-to-r from-primary-yellow via-primary-yellow to-[#FFFF40] text-charcoal-black border-b-2 border-charcoal-black/10">
        <div className="container mx-auto py-3 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
              <div className="flex items-center gap-2 bg-charcoal-black/5 px-3 py-1.5 rounded">
                <span className="text-xs font-bold tracking-wider">🏛️ MSDE LICENSED</span>
                <span className="text-xs font-mono font-bold">#253492</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-charcoal-black/20"></div>
              <a 
                href="tel:410-440-3072" 
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 font-semibold text-sm group"
              >
                <Phone size={16} className="group-hover:animate-pulse" />
                <span className="group-hover:underline">(410) 440-3072</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1331+Ashton+Road+Suite+D+Hanover+MD+United+States+21076"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-xs hover:underline opacity-90 hover:opacity-100"
              >
                <MapPin size={14} />
                <span>Hanover, MD 21076</span>
              </a>
            </div>
            <a 
              href="/#contact" 
              className="flex items-center gap-2 bg-charcoal-black text-pure-white px-5 py-2 text-xs font-bold tracking-wider hover:bg-charcoal-black/90 transition-all duration-200 hover:scale-105 shadow-md"
            >
              <Calendar size={14} />
              SCHEDULE A TOUR
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced main navigation with improved visibility */}
      <header className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        scrolled 
          ? "bg-charcoal-black/95 backdrop-blur-md shadow-2xl" 
          : "bg-charcoal-black shadow-lg"
      }`}>
        <div className="container mx-auto flex h-[90px] items-center justify-between">
          
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <Link href="/" aria-label="New Life Child Care Home">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/icons/1-1.png"
                alt="New Life Child Care Logo"
                width={56}
                height={46}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation with enhanced visibility */}
          <div className="hidden lg:flex items-center gap-8">
            <nav aria-label="Site">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 font-navigation text-[15px] font-semibold tracking-[0.5px] transition-all duration-300 rounded group ${
                        activeSection === link.name 
                          ? "text-primary-yellow bg-white/5" 
                          : "text-white hover:text-primary-yellow hover:bg-white/10"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary-yellow transition-all duration-300 rounded-full ${
                        activeSection === link.name 
                          ? "w-8" 
                          : "w-0 group-hover:w-8"
                      }`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="h-8 w-px bg-white/20"></div>

            {/* CTA Button */}
            <a
              href="/#contact"
              className="flex items-center gap-2 bg-sky-blue text-white px-5 py-2.5 text-sm font-bold tracking-wider hover:bg-sky-blue/90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar size={16} />
              ENROLL NOW
            </a>

            {/* Social media */}
            <a
              href="https://www.facebook.com/NewLifeChildCare1331/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="transition-all duration-200 hover:scale-110 hover:opacity-80 p-2 hover:bg-white/10 rounded-full"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/icons/0fdef751204647a3bbd7eaa2827ed4f9-2.png"
                alt="Facebook icon"
                width={22}
                height={22}
              />
            </a>
          </div>
          
          {/* Mobile menu button with enhanced visibility */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="text-white bg-white/10 p-2.5 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Enhanced mobile menu */}
        <div 
          className={`fixed inset-0 z-[110] bg-gradient-to-br from-charcoal-black via-charcoal-black to-charcoal-black/95 transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto flex h-full flex-col">
            {/* Mobile menu header */}
            <div className="flex h-[90px] items-center justify-between border-b border-white/10">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/icons/1-1.png"
                  alt="New Life Child Care Logo"
                  width={56}
                  height={46}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="text-white bg-white/10 p-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile menu content */}
            <nav className="flex-1 flex flex-col justify-center py-8">
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-navigation text-3xl font-semibold tracking-wide transition-all duration-200 block ${
                        activeSection === link.name 
                          ? "text-primary-yellow scale-110" 
                          : "text-white/90 hover:text-primary-yellow hover:scale-110"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile contact info */}
              <div className="mt-12 space-y-6 px-8">
                <a 
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-sky-blue text-white px-6 py-4 text-base font-bold tracking-wider hover:bg-sky-blue/90 transition-colors w-full"
                >
                  <Calendar size={20} />
                  SCHEDULE A TOUR
                </a>

                <div className="bg-primary-yellow/10 border border-primary-yellow/30 rounded-lg p-5 text-center space-y-3">
                  <p className="text-primary-yellow text-sm font-bold tracking-wide">MSDE LICENSED CENTER</p>
                  <p className="text-white/70 text-xs font-mono">#253492</p>
                  <div className="pt-2 border-t border-white/10">
                    <a 
                      href="tel:410-440-3072" 
                      className="text-white text-xl font-semibold hover:text-primary-yellow transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone size={20} />
                      (410) 440-3072
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile menu footer */}
            <div className="pb-8 pt-6 text-center border-t border-white/10">
              <a
                href="https://www.facebook.com/NewLifeChildCare1331/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="inline-flex items-center gap-2 text-white/80 hover:text-primary-yellow transition-all hover:scale-110"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/beb3d5c9-c2e5-448f-a7ab-ae0e11311c93-nlchildcare-com/assets/icons/0fdef751204647a3bbd7eaa2827ed4f9-2.png"
                  alt="Facebook icon"
                  width={28}
                  height={28}
                />
                <span className="text-sm font-medium">Follow Us on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;