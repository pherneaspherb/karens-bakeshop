import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero/Hero";
import Products from "@/components/sections/Products/Products";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Gallery from "@/components/sections/Gallery/Gallery";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FindUs from "@/components/sections/FindUs/FindUs";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FindUs />

      <Footer />
    </>
  );
}