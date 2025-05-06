import { Typography } from "@material-tailwind/react";
import WhyCard from "../general/whyCard";
import { WhyChooseUsData } from "../utils/mockData";

const WhyChooseUs = () => {
  return (
    <>
      <main className="bg-[#7A8F8C]">
        <div className="container md:max-w-[80%] mx-auto">
          <div className="flex text-center pt-20 pb-55 md:pb-65 items-center flex-col gap-6">
            <Typography className="text-white font-medium ">
              Welcome to The Neat HQ.
            </Typography>
            <Typography className="font-playfair text-[#D7D3C4] md:text-5xl text-4xl font-semibold">
              Why Choose Us
            </Typography>
            <Typography className="leading-loose text-lg px-4 text-white md:max-w-2xl md:px-0">
              Tired of the mess? We've got you covered! The Neat HQ provides
              fast, reliable, and affordable cleaning services for homes and
              Offices. Our professional cleaners ensure every corner shines. so
              you can relax and enjoy your space.
            </Typography>
          </div>
        </div>
      </main>
      <section className="container px-4 md:px-0 mx-auto md:max-w-[80%] -mt-47 md:-mt-50 w-full">
        <div className="flex flex-col md:flex-row justify-center md:gap-6 w-full">
          {WhyChooseUsData.map((result, index) => (
            <WhyCard
              key={index}
              title={result.label}
              titleB={result.labelB}
              description={result.detail}
              logo={result.logo}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
