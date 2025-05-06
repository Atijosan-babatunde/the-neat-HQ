import { Typography } from "@material-tailwind/react";
import agent from "../../assets/images/agents.png";
import { Confirm } from "../../assets/svg";
import { useNavigate } from "react-router";

const Who = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("./about-us");
  };

  return (
    <main className="border border-t-[#D7D3C4] border-b-0">
      <section className="container md:px-0 px-4 max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto py-8 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 justify-between">
          <div className="flex justify-center lg:justify-start lg:max-w-[45%] order-2 lg:order-1">
            <img
              src={agent}
              alt="agent"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col w-full lg:max-w-[50%] gap-4 md:gap-6 items-start text-start order-1 lg:order-2">
            <Typography className="font-semibold text-[#5C6C72] text-lg sm:text-xl">
              About Us
            </Typography>

            <Typography className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#2E3538]">
              Who We Are?
            </Typography>

            <div className="flex flex-col gap-6">
              <Typography className="text-[#5C6C72] max-w-xl text-base sm:text-lg">
                At The Neat HQ, we’re more than just a cleaning service. We are
                your partners in creating a fresh, healthy and stress-free
                space. Our team of dedicated, trained professionals takes pride
                in delivering top-quality cleaning with a personal touch.
              </Typography>

              <div className="flex flex-col gap-6 mt-2">
                <div className="flex gap-3 sm:gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Confirm />
                  </div>
                  <div className="flex flex-col">
                    <Typography className="text-[#2E3538] text-lg sm:text-xl font-semibold">
                      Committed to Excellence-
                    </Typography>
                    <Typography className="text-[#5C6C72] text-base">
                      We go above and beyond to ensure spotless results.
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Confirm />
                  </div>
                  <div className="flex flex-col">
                    <Typography className="text-[#2E3538] text-lg sm:text-xl font-semibold">
                      Home & Office Experts
                    </Typography>
                    <Typography className="text-[#5C6C72] text-base">
                      Whether it's your home or workplace, we make every space
                      shine.
                    </Typography>
                  </div>
                </div>

                <button
                  onClick={handleReadMore}
                  className="bg-[#7A8F8C] items-center mt-4 md:mt-6 w-fit rounded-md py-2 sm:py-3 px-4 sm:px-6 cursor-pointer"
                >
                  <Typography className="text-white font-semibold text-base sm:text-lg">
                    Read More
                  </Typography>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Who;
