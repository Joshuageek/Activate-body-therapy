import { Link } from "react-router-dom";
import { Facebook, Instagram, X, Mail, Phone, MapPin } from "lucide-react";
import logo from "/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand For Activate*/}
          <div className="space-y-4">
  <div className="flex items-center gap-3">
      <img 
        src={logo} 
        alt="Activate Body Logo" 
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Activate Body Therapy offers expert, personalized treatments for pain relief, 
              rehabilitation, and wellness, helping you move better and live healthier every day
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-primary"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-primary"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-primary"
                aria-label="Twitter"
              >
                <X size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-usawa-green">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Blog", "Products", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-usawa-green transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-usawa-green">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Physiotherapy",
                "Pain Eimination",
                "Rehabilitation",
                "Sports Therapy",
                "Weight Management",
                "Nutrition",
                "IV Therapy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-usawa-green">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Plot 12 Kyadondo Road
                  <br />
                  Nakasero Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +256 708-661-166

                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Plot 5 Naguru Hill East Rd,The Summit Residences
                  <br />
                  Kampala Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +256 708 421 449

                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <a
                  href="mailto:activatebodytherapy@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  activatebodytherapy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Activate Body Therapy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
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
