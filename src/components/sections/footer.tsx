import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="max-w-[1200px] mx-auto py-12 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-primary-foreground font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:410-440-3072"
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground transition-colors hover:text-sky-blue"
              >
                <Phone size={16} />
                (410) 440-3072
              </a>
              <a
                href="mailto:newlifechildcare@yahoo.com"
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground transition-colors hover:text-sky-blue break-all"
              >
                <Mail size={16} />
                newlifechildcare@yahoo.com
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1331+Ashton+Road+Suite+D+Hanover+MD+21076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-center md:justify-start gap-2 text-sm text-primary-foreground transition-colors hover:text-sky-blue"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>1331 Ashton Road Suite D<br />Hanover, MD 21076</span>
              </a>
            </div>
          </div>

          {/* License Information */}
          <div className="text-center">
            <h3 className="text-primary-foreground font-semibold text-lg mb-4">Licensing</h3>
            <div className="bg-primary-yellow text-charcoal-black px-4 py-3 rounded inline-block">
              <p className="text-xs font-medium mb-1">MSDE Licensed</p>
              <p className="text-lg font-bold">License #253492</p>
            </div>
            <p className="text-xs text-[#b3b3b3] mt-4">
              Fully licensed by the Maryland State<br />Department of Education
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-primary-foreground font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/#our-story" className="block text-sm text-primary-foreground hover:text-sky-blue transition-colors">
                About Us
              </a>
              <a href="/#our-programs" className="block text-sm text-primary-foreground hover:text-sky-blue transition-colors">
                Programs
              </a>
              <a href="/#our-mission" className="block text-sm text-primary-foreground hover:text-sky-blue transition-colors">
                Our Mission
              </a>
              <a href="/#contact" className="block text-sm text-primary-foreground hover:text-sky-blue transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-center text-[#b3b3b3]">
            ©{currentYear} by New Life Child Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;