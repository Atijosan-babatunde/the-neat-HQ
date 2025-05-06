import { Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <main className="bg-[#7A8F8C] py-14 md:py-20">
      <div className="container max-w-[80%] mx-auto">
        <div className="flex text-center items-center flex-col gap-6">
          <Typography className="text-white flex gap-2 font-medium ">
            Home <span>/</span>{" "}
            <span className="text-[#D7D3C4]">Our Services</span>
          </Typography>
          <Typography className="font-playfair text-white text-3xl md:text-5xl font-semibold">
            Our Services
          </Typography>
        </div>
      </div>
    </main>
  );
};

export default Hero;
