import React, { useState, useEffect, useContext } from "react";
import { DialogHeader, Typography } from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";

import uk from "../../assets/images/united-kingdom.svg";
// import dubai from "../../assets/images/dubai.svg";
import { LocationContext } from "./locationContext";

interface LocationModalProps {
  open: boolean;
  handleOpen: () => void;
}

interface CountryOption {
  icon: string;
  label: string;
  value: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    weekdays: string;
    weekends: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

const LocationModal: React.FC<LocationModalProps> = ({ open, handleOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { selectedLocation, setSelectedLocation } = useContext(LocationContext);

  const countries: CountryOption[] = [
    {
      icon: uk,
      label: "United Kingdom",
      value: "uk",
      address: "Address, Nottingham, UK",
      phone: "+44 777 750 6569",
      email: "theneathqnott@gmail.com",
      openingHours: {
        weekdays: "Monday - Friday: 8 am - 6 pm",
        weekends: "Saturday - Sunday: 9 am - 4 pm",
      },
      mapCoordinates: {
        lat: 52.9548,
        lng: -1.1581,
      },
    },
    // {
    //   icon: dubai,
    //   label: "Dubai",
    //   value: "dubai",
    //   address: "Dubai Marina, Dubai, UAE",
    //   phone: "+971 4 123 4567",
    //   email: "theneathqdubai@gmail.com",
    //   openingHours: {
    //     weekdays: "Sunday - Thursday: 9 am - 7 pm",
    //     weekends: "Friday - Saturday: 10 am - 5 pm",
    //   },
    //   mapCoordinates: {
    //     lat: 25.0657,
    //     lng: 55.2244,
    //   },
    // },
  ];

  useEffect(() => {
    // Set default location if none is selected
    if (!selectedLocation) {
      setSelectedLocation(countries[0]);
    }
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCountry = (country: CountryOption) => {
    setSelectedLocation(country);
    setIsDropdownOpen(false);
  };

  const handleContinue = () => {
    handleOpen();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={handleOpen}
        />
      )}
      <div
        className={`w-full h-screen absolute z-15 mx-auto flex items-center justify-center pointer-events-none ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#FFFFFF] rounded-2xl shadow-xl w-[90%] max-w-md py-3 px-3 sm:px-5 mx-auto pointer-events-auto">
          <DialogHeader className="flex flex-col justify-center items-center">
            <Typography className="text-center text-[#5C6C72] text-xl sm:text-2xl font-semibold">
              Choose location
            </Typography>
            <div>
              <Typography className="text-[#7A8F8C] font-normal mt-2 sm:mt-4 text-base sm:text-lg text-center">
                Choose your location to get more information about our services
              </Typography>
            </div>
          </DialogHeader>

          <div className="px-2 sm:px-6 py-2 sm:py-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-[#2E3538] mb-1">
                Country
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="relative w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-left cursor-pointer outline-none"
                  onClick={toggleDropdown}
                >
                  {selectedLocation ? (
                    <div className="flex items-center">
                      <img
                        src={selectedLocation.icon}
                        alt={selectedLocation.label}
                        className="h-5 w-5 sm:h-7 sm:w-7 mr-2"
                      />
                      <Typography className="text-[#7A8F8C] text-base sm:text-lg font-normal truncate">
                        {selectedLocation.label}
                      </Typography>
                    </div>
                  ) : (
                    <span className="text-gray-400">Select</span>
                  )}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute mt-1 w-full rounded-md bg-[#F9F8F6] border border-none shadow-lg z-10">
                    <ul className="max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none">
                      {countries.map((country, index) => (
                        <React.Fragment key={country.value}>
                          <li
                            className="cursor-pointer select-none text-[#7A8F8C] relative py-2 pl-3 pr-9 hover:bg-gray-100"
                            onClick={() => selectCountry(country)}
                          >
                            <div className="flex items-center">
                              <img
                                src={country.icon}
                                alt={country.label}
                                className="h-5 w-5 sm:h-7 sm:w-7 mr-2"
                              />
                              <span
                                className={`block truncate text-sm sm:text-base ${
                                  selectedLocation?.value === country.value
                                    ? "font-medium"
                                    : "font-normal"
                                }`}
                              >
                                {country.label}
                              </span>
                            </div>
                          </li>
                          {index < countries.length - 1 && (
                            <div className="border-b border-[#FFFFFF] mx-2"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-4 sm:mt-6">
              <button
                disabled={!selectedLocation}
                onClick={handleContinue}
                className={`${
                  selectedLocation
                    ? "bg-[#7A8F8C] cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                } w-full sm:w-fit flex justify-center items-center rounded-md py-2 px-4 sm:py-3 sm:px-6 outline-none`}
              >
                <Typography className="text-[#FFFFFF] font-medium text-sm sm:text-base">
                  Continue
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationModal;
