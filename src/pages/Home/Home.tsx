import Hero from "../../components/home/hero";
import OurServices from "../../components/home/ourServices";
import Register from "../../components/home/register";
import Testimonials from "../../components/home/testimonials";
import Who from "../../components/home/who";
import WhyChooseUs from "../../components/home/whyChooseUs";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 md:ap-20">
      <Hero />
      <WhyChooseUs />
      <Who />
      <OurServices />
      <Testimonials />
      <Register />
    </main>
  );
};

export default Home;
