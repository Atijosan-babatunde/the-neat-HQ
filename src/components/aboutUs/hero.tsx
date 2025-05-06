import { Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <main className="bg-[#7A8F8C] py-10 md:py-20">
      <div className="container max-w-[80%] mx-auto">
        <div className="flex text-center items-center flex-col gap-4 md:gap-6">
          <Typography className="text-white flex gap-2 font-medium ">
            Home <span>/</span> <span className="text-[#D7D3C4]">About US</span>
          </Typography>
          <Typography className="font-playfair text-white text-3xl md:text-5xl font-semibold">
            About Us
          </Typography>
        </div>
      </div>
    </main>
  );
};

export default Hero;
