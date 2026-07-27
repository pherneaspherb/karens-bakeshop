import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/home/Stats";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import FindUs from "@/components/home/FindUs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FindUs />
      <Footer />
    </>
  );
}