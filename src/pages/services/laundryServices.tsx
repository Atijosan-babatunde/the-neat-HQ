import { Typography } from "@material-tailwind/react";
import laundryCleaning from "../../assets/images/laundryCleaning.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";

const LaundryCleaning = () => {
  return (
    <div className="service-content">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
      >
        Commercial Cleaning
      </Typography>
      <section className="mt-14 flex flex-col gap-8">
        <img
          src={laundryCleaning}
          alt="laundry service"
          className="w-full md:h-auto h-30"
        />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          Keep your clothes fresh, clean, and perfectly cared for with The Neat
          HQ's professional laundry services. We handle everything from everyday
          wear to delicate fabrics, so you can enjoy clean clothes without the
          hassle.
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Wash, Dry & Fold:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Convenient and hassle-free service for everyday laundry.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Dry Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Expert care for delicate and special fabrics.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Ironing & Pressing:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Wrinkle-free, crisp, and neatly folded clothes.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Eco-Friendly Detergents:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Safe for you and the environment.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Quick Turnaround:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Same day and next-day options available.
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your laundry service today and enjoy fresh, clean clothes
            effortlessly!
          </Typography>
          <Link to="contact-us">
            <button className="bg-[#7A8F8C] flex self-center justify-center mt-4 w-fit items-center rounded-md py-3 px-6">
              <Typography className="text-[#FFFFFF] font-semibold text-lg">
                Book A Call Back
              </Typography>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LaundryCleaning;
