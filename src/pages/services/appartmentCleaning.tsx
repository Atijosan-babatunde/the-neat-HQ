import { Typography } from "@material-tailwind/react";
import appartmentCleaning from "../../assets/images/appartmentCleaning.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../components/constants/routes";

const AppartmentCleaning = () => {
  return (
    <div className="service-content">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
      >
        Appartment Cleaning
      </Typography>
      <section className="mt-14 flex flex-col gap-8">
        <img
          src={appartmentCleaning}
          alt="clean apartment"
          className="w-full md:h-auto h-30"
        />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          Live in a fresh, clean space without the hassle! The Neat HQ offers
          professional apartment cleaning services to keep your home tidy and
          stress-free.
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                General Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Dusting, sweeping, vacuuming, and mopping every room.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Bedroom & Living Areas:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Beds made, furniture cleaned, and floors spotless.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Kitchen Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Counters, sinks, appliances, and storeroom scrubbed.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Bathroom Sanitization:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Toilets, sinks, tubs, and mirrors cleaned and disinfected.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Trash Removal:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Say goodbye to clutter and odors!
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your apartment cleaning today and enjoy a spotless home!
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

export default AppartmentCleaning;
