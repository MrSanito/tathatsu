import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Appointment />
      <Testimonials />
      <Gallery />
      <Location />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <MobileStickyBar />
      
      <Footer />
    </main>
  );
}
