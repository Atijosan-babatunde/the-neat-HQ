import { Typography } from "@material-tailwind/react";
import commercialCleaning from "../../assets/images/comercialCleaning.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";

const CommercialCleaning = () => {
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
          src={commercialCleaning}
          alt="man chair"
          className="w-full md:h-auto h-30"
        />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          Keep your workplace spotless with The Neat HQ’s Commercial Cleaning
          Service! A clean office means a healthier, more productive environment
          for your team and clients.
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Office Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Desks, floors, restrooms, and common areas kept pristine.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Retail Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Present a spotless shopping experience for your customers.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Hotel & Hospitality Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Ensure a welcoming and hygienic space.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Restaurant Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Maintain high cleanliness standards in your kitchen and dining
                areas.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Industrial & Warehouse Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Remove dust, dirt, and debris efficiently.
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your commercial cleaning today for a spotless, professional
            space!
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
