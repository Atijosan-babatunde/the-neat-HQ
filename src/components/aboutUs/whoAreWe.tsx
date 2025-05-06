import { Typography } from "@material-tailwind/react";
import { Confirm } from "../../assets/svg";

const WhoAreWe = () => {
  return (
    <main className="py-10 md:py-20 bg-[#e0ddd1]">
      <section className="container mx-auto px-4">
        <div className="flex justify-center text-center flex-col gap-3 mb-12">
          <Typography className="font-playfair font-semibold text-3xl md:text-5xl text-[#2E3538]">
            Who We Are?
          </Typography>
          <Typography className="leading-relaxed md:leading-loose text-base md:text-lg text-[#5C6C72] max-w-3xl mx-auto">
            At The Neat HQ, we’re more than just a cleaning service. We are your
            partners in creating a fresh, healthy and stress-free space. Our
            team of dedicated, trained professionals takes pride in delivering
            top-quality cleaning with a personal touch.
          </Typography>
        </div>

        <div className="w-full max-w-4xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 gap-y-8 md:gap-y-12 mt-6 md:mt-8">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 mt-1">
                <Confirm />
              </div>
              <div>
                <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                  Committed to Excellence -
                </Typography>
                <Typography className="text-[#5C6C72] text-sm md:text-base mt-1">
                  We go above and beyond to ensure spotless results.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 mt-1">
                <Confirm />
              </div>
              <div>
                <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                  Home & Office Experts -
                </Typography>
                <Typography className="text-[#5C6C72] text-sm md:text-base mt-1">
                  Whether it's your home or workplace, we make every space
                  shine.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 mt-1">
                <Confirm />
              </div>
              <div>
                <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                  Customer-Focused -
                </Typography>
                <Typography className="text-[#5C6C72] text-sm md:text-base mt-1">
                  Your satisfaction is our top priority.
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0 mt-1">
                <Confirm />
              </div>
              <div>
                <Typography className="text-[#2E3538] text-lg md:text-xl font-semibold">
                  Environmentally Friendly -
                </Typography>
                <Typography className="text-[#5C6C72] text-sm md:text-base mt-1">
                  We use safe, non-toxic products for a cleaner planet.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhoAreWe;
