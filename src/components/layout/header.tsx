import { useState, useContext } from "react";
import { Typography } from "@material-tailwind/react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsAppIcon,
} from "../../assets/svg";
import { ChevronDown } from "lucide-react";
import LocationModal from "../constants/locationModal";
import { LocationContext } from "../constants/locationContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { selectedLocation } = useContext(LocationContext);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="bg-[#7A8F8C] shadow-sm">
        <div className="container max-w-full px-4 md:px-0 md:max-w-[90%] lg:max-w-[80%] mx-auto">
          <div className="hidden sm:flex justify-between items-center h-20">
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@theneathq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/theneathq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.tiktok.com/@theneathq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiktokIcon />
              </a>
              <div className="flex items-center gap-3">
                <WhatsAppIcon />
                <Typography className="text-white text-base font-medium">
                  {selectedLocation?.phone || "+44 777 750 6569"}
                </Typography>
              </div>
            </div>

            <button className="flex items-center gap-8">
              <a
                href="https://theneathq.launch27.com/quotes/new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8"
              >
                <Typography className="underline font-medium text-white text-base">
                  Get A Quote
                </Typography>
              </a>
              <div className="flex items-center gap-2" onClick={handleOpen}>
                {selectedLocation && (
                  <img
                    src={selectedLocation.icon}
                    alt={selectedLocation.label}
                    className="w-5 h-5"
                  />
                )}
                <Typography className="text-white font-normal">
                  {selectedLocation?.label || "UK"}
                </Typography>
                <ChevronDown className="text-white w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="sm:hidden py-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-3">
                <InstagramIcon />
                <FacebookIcon />
                <TiktokIcon />
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon />
                <Typography className="text-white text-sm font-medium">
                  {selectedLocation?.phone || "+44 777 750 6569"}
                </Typography>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button className="flex items-center">
                <a
                  href="https://theneathq.launch27.com/quotes/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-8"
                >
                  <Typography className="underline font-medium text-white text-base">
                    Get A Quote
                  </Typography>
                </a>
              </button>

              <button onClick={handleOpen} className="flex items-center gap-2">
                {selectedLocation && (
                  <img
                    src={selectedLocation.icon}
                    alt={selectedLocation.label}
                    className="w-4 h-4"
                  />
                )}
                <Typography className="text-white text-sm font-normal">
                  {selectedLocation?.label || "UK"}
                </Typography>
                <ChevronDown className="text-white w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <LocationModal open={open} handleOpen={handleOpen} />
    </>
  );
};

export default Header;
