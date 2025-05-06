import { useEffect } from "react";
import Hero from "../../components/aboutUs/hero";
import WhoAreWe from "../../components/aboutUs/whoAreWe";
import WhyChooseUs from "../../components/aboutUs/whyChooseUs";
import Register from "../../components/home/register";
import Testimonials from "../../components/home/testimonials";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <WhoAreWe />
      <WhyChooseUs />
      <Testimonials />
      <Register />
    </main>
  );
};

export default AboutUs;
