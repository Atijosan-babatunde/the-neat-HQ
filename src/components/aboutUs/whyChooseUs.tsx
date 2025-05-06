import { Typography } from "@material-tailwind/react";
import WhyCard from "../general/whyCard";
import { WhyChooseUsData } from "../utils/mockData";
import frame from "../../assets/images/Frame.png";

const WhyChooseUs = () => {
  return (
    <>
      <section className="container mx-auto max-w-[90%] md:max-w-[80%] -mb-14 md:-mb-40 w-full">
        <img src={frame} alt="frame" className="w-full md:h-auto h-30" />
      </section>
      <main className="bg-[#7A8F8C]">
        <div className="container pb-16 md:pb-23 pt-8 md:pt-40 px-4 md:px-0 md:max-w-[80%] mx-auto">
          <div className="flex text-center pt-10 md:pt-20 items-center flex-col gap-4 md:gap-6">
            <Typography className="text-white font-medium">
              Welcome to The Neat HQ.
            </Typography>
            <Typography className="font-playfair text-[#D7D3C4] text-4xl md:text-5xl font-semibold">
              Why Choose Us
            </Typography>
            <Typography className="leading-relaxed md:leading-loose text-base md:text-lg text-white max-w-2xl">
              Tired of the mess? We've got you covered! neat! HQ provides fast
              reliable, and affordable cleaning services for homes and Offices.
              Our professional cleaners ensure every corner shines. so you can
              relax and enjoy your space.
            </Typography>
          </div>
          <section className="mt-8 md:mt-10">
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
        </div>
      </main>
    </>
  );
};

export default WhyChooseUs;
