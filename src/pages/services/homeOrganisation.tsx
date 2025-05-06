import { Typography } from "@material-tailwind/react";
import homeOrganization from "../../assets/images/homeOrganzation.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";

const CommercialCleaning = () => {
  return (
    <div className="service-content">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
      >
        Home Organization
      </Typography>
      <section className="mt-14 flex flex-col gap-8">
        <img
          src={homeOrganization}
          alt="organized home"
          className="w-full md:h-auto h-30"
        />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          A clean home is a happy home! Let The Neat HQ take care of the mess so
          you can relax and enjoy your space. Our professional house cleaning
          services ensure every corner is spotless.
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Decluttering & Sorting:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Organizing items and removing unnecessary clutter.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Room-by-Room Organization:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Bedrooms, kitchens, closets, and more.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Storage Solutions:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Custom organizing systems for a tidy, efficient space.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Deep Cleaning & Arranging:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                A fresh start for your home.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Minimalist & Sustainable Approach:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Helping you keep what truly matters.
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your house cleaning today and come home to freshness!
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

export default CommercialCleaning;
