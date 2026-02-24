import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-16 px-6 relative z-50">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            Tathastu<span className="text-primary">.</span>
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Advanced Dental Care with Precision & Compassion in Gotri, Vadodara.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary text-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Dental Implants</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Root Canal Treatment</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Braces & Orthodontics</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cosmetic Dentistry</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Prosthodontics</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About Clinic</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
            <li><a href="#appointment" className="hover:text-primary transition-colors text-accent flex items-center gap-1 font-medium">Book Appointment →</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
           <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
           <div className="space-y-4 text-sm">
             <p className="flex items-start gap-3">
               <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
               <span className="text-gray-400">E 201, Kalpvrukhsh Complex, near Gotri GEB Substation, Vadodara</span>
             </p>
             <p className="flex items-center gap-3">
               <Phone size={18} className="text-primary shrink-0" />
               <span className="text-gray-400">+91 00000 00000</span>
             </p>
             <p className="flex items-center gap-3">
               <Mail size={18} className="text-primary shrink-0" />
               <span className="text-gray-400">info@tathastudental.in</span>
             </p>
           </div>
        </div>

      </div>

      <div className="container mx-auto text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tathastu Dental Clinic & Implant Center. All rights reserved.</p>
        <p className="mt-2 text-xs">Developed passionately for local care.</p>
      </div>
    </footer>
  );
}
