import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FindUs from "@/components/sections/FindUs/FindUs";

import Footer from "@/components/sections/Footer/Footer";
import StatsBar from "@/components/sections/StatsBar/StatsBar";
import WhyUs from "@/components/sections/WhyUs/WhyUs";
import PeekInside from "@/components/sections/PeekInside/PeekInside";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <StatsBar />
      <FeaturedProducts />
      <WhyUs />
      <PeekInside />
      <Testimonials />
      <FindUs />
      <Footer />
    </>
  );
}