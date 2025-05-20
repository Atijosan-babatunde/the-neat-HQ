import { Typography } from "@material-tailwind/react";
import postConstruction from "../../assets/images/postConstructionCleaning.png";
import { Confirm } from "../../assets/svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../components/constants/routes";

const PostConstructionCleaning = () => {
  return (
    <div className="service-content">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
      >
        Post Construction Cleaning
      </Typography>
      <section className="mt-14 flex flex-col gap-8">
        <img
          src={postConstruction}
          alt="man chair"
          className="w-full md:h-auto h-30"
        />
        <Typography className="font-normal leading-normal max-w-2xl text-lg text-[#5C6C72]">
          Just finished a renovation or construction project? Let The Neat HQ
          handle the mess! Our Post-Construction Cleaning service removes dust,
          debris, and residue, leaving your space spotless and move-in ready
        </Typography>

        <div className="grid grid-cols-1 space-y-8">
          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Dust & Debris Removal:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                We clean every surface, from floors to ceilings.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Deep Cleaning:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Windows, walls, carpets, and hard-to-reach areas. handover.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Safe & Eco-Friendly Products:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Non-toxic cleaning for a fresh, healthy space.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                Flexible Scheduling:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                Book at your convenience. 100% Satisfaction
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Confirm />
            <div>
              <Typography className="text-[#2E3538] text-xl font-semibold">
                100% Satisfaction Guaranteed:
              </Typography>
              <Typography className="text-[#5C6C72] mt-2">
                We leave no dust behind!
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Typography className="text-[#5C6C72] mt-2">
            Book your construction cleaning today and enjoy a fresh a fresh,
            clean space!
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

export default PostConstructionCleaning;
