import { Typography } from "@material-tailwind/react";
import carpetCleaning from "../../assets/images/carpetCleaning.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../components/constants/routes";

const CarpetCleaning = () => {
  return (
    <div className="service-content">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
      >
        Carpet Cleaning
      </Typography>
      <section className="mt-14 flex flex-col gap-8">
        <img
          src={carpetCleaning}
          alt="clean carpet"
          className="w-full md:h-auto h-30"
        />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          Book your carpet cleaning today for a fresher, healthier space!
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Deep Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Eliminates embedded dirt and tough stains.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Eco-Friendly Products:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Safe for kids, pets, and the environment.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Allergen & Bacteria Removal:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Improves air quality and hygiene.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Fast-Drying Technology:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Walk on your carpets sooner with minimal drying time.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Residential & Commercial:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Homes, offices, hotels, and more.
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your carpet cleaning today for a fresher, healthier space!
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

export default CarpetCleaning;
