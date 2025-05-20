import { Typography } from "@material-tailwind/react";
import homeCleaning from "../../assets/images/homeCleaning.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../components/constants/routes";

const HomeCleaning = () => {
  return (
    <div className="service-content">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
      >
        Holiday Home Cleaning
      </Typography>
      <section className="mt-6 md:mt-10 lg:mt-14 flex flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="w-full">
          <img
            src={homeCleaning}
            alt="Holiday home cleaning service"
            className="w-full md:h-auto h-30"
          />
        </div>
        <Typography className="font-normal leading-relaxed md:leading-normal max-w-2xl text-base md:text-lg text-[#5C6C72]">
          Moving out? Leave your old place spotless with The Neat HQ's End of
          Tenancy Cleaning! We ensure every corner is deeply cleaned, helping your
          secure your deposit and leave on high note.
        </Typography>

        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 mt-2">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Confirm />
            </div>
            <div>
              <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                Thorough Deep Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-1 md:mt-2 text-sm md:text-base">
                Floors, carpets, windows and appliances cleaned to perfection.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Confirm />
            </div>
            <div>
              <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                Landlord & Agent Approved:
              </Typography>
              <Typography className="text-[#5C6C72] mt-1 md:mt-2 text-sm md:text-base">
                We meet the highest cleaning standards for a hassle-free
                handover.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Confirm />
            </div>
            <div>
              <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                Eco-Friendly Products:
              </Typography>
              <Typography className="text-[#5C6C72] mt-1 md:mt-2 text-sm md:text-base">
                Safe for you, your pets, and the environment.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Confirm />
            </div>
            <div>
              <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                100% Satisfaction Guarantee:
              </Typography>
              <Typography className="text-[#5C6C72] mt-1 md:mt-2 text-sm md:text-base">
                If you're not completely satisfied, we'll re-clean at no extra
                cost.
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Typography className="text-[#5C6C72] text-sm md:text-base">
            Book your end of tenancy clean today and move out with peace of
            mind!
          </Typography>
          <Link to={ROUTES.CONTACT}>
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

export default HomeCleaning;
