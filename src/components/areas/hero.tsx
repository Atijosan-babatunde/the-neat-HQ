import { Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <main className="bg-[#7A8F8C] py-10 md:py-20">
      <div className="container max-w-[80%] mx-auto">
        <div className="flex text-center items-center flex-col gap-6">
          <Typography className="font-playfair text-white text-3xl md:text-5xl font-semibold">
            Areas Covered
          </Typography>
          <Typography className="text-white max-w-lg">
            Neat HQ provides professional cleaning services across multiple
            locations in the UK. We're committed to delivering top-quality
            cleaning wherever you need us!.
          </Typography>
        </div>
      </div>
    </main>
  );
};

export default Hero;
