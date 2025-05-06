import { Typography } from "@material-tailwind/react";
import hero from "../../assets/images/hero.png";
import Card from "../general/card";
import { Results } from "../utils/mockData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="container md:px-0 px-4 mt-8 max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
      <div className="flex justify-center items-center flex-grow">
        <img src={hero} alt="hero" className="max-w-full h-auto" />
      </div>

      <section className="flex flex-col md:flex-row py-10 justify-between gap-6 md:gap-0">
        <Typography className="font-playfair max-w-lg font-semibold text-3xl sm:text-4xl lg:text-5xl text-center md:text-left">
          Effortless Cleaning, Exceptional Results
        </Typography>

        <div className="flex flex-row space-x-4 md:space-x-6 lg:space-x-10 items-center justify-center md:justify-end">
          <button className="bg-[#7A8F8C] rounded-md py-2 px-4 md:py-3 md:px-6 w-fit">
            <a
              href="https://theneathq.launch27.com/quotes/new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-8"
            >
              <Typography className="text-white font-medium">
                Get A Quote
              </Typography>
            </a>
          </button>
          <Link to="contact-us">
            <button className="bg-[#EEECE2] rounded-md py-2 px-4 md:py-3 md:px-6 w-fit">
              <Typography className="text-[#7A8F8C] font-medium">
                Book A Call Back
              </Typography>
            </button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3.5 mb-10">
        {Results.map((result, index) => (
          <Card key={index} title={result.label} description={result.detail} />
        ))}
      </section>
    </main>
  );
};

export default Hero;
