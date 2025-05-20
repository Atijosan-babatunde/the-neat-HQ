import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import Register from "../../components/home/register";
import Hero from "../../components/services/hero";
import ConstructionCleaning from "./postConstructionCleaning";
import CommercialCleaning from "./commercialCleaning";
import AppartmentCleaning from "./appartmentCleaning";
import CarpetCleaning from "./carpetCleaning";
import HomeCleaning from "./homeCleaning";
import LaundryServices from "./laundryServices";
import HomeOrganisation from "./homeOrganisation";

const serviceLinks = [
  {
    id: "home-holiday-cleaning",
    label: "Holiday Home Cleaning",
  },
  {
    id: "post-construction-cleaning",
    label: "Post Construction Cleaning",
  },
  {
    id: "commercial-cleaning",
    label: "Commercial Cleaning",
  },
  {
    id: "laundry-services",
    label: "Laundry Services",
  },
  {
    id: "home-organisation",
    label: "Home Organisation",
  },
  // {
  //   id: "appartment-cleaning",
  //   label: "Appartment Cleaning",
  // },
  {
    id: "carpet-cleaning",
    label: "Carpet Cleaning",
  },
];

const Services = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(
    serviceType || "home-holiday-cleaning"
  );

  useEffect(() => {
    if (serviceType) {
      setSelectedService(serviceType);
    } else {
      navigate(`/services/${serviceLinks[0].id}`, { replace: true });
    }
  }, [serviceType, navigate]);

  const renderServiceContent = () => {
    switch (selectedService) {
      case "home-holiday-cleaning":
        return <HomeCleaning />;
      case "post-construction-cleaning":
        return <ConstructionCleaning />;
      case "commercial-cleaning":
        return <CommercialCleaning />;
      case "laundry-services":
        return <LaundryServices />;
      case "home-organisation":
        return <HomeOrganisation />;
      case "appartment-cleaning":
        return <AppartmentCleaning />;
      case "carpet-cleaning":
        return <CarpetCleaning />;
      default:
        return <HomeCleaning />;
    }
  };

  return (
    <main>
      <Hero />
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:max-w-[90%] lg:max-w-[80%]">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-[#EEECE2] border-[2px] border-[#C1BBA4] p-4 md:p-8 lg:p-12 rounded-xl">
            <div className="w-full md:w-1/3 md:border-r border-[#D7D3C4] md:pr-4 hidden lg:block">
              <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-6 lg:space-y-8 px-2 md:px-5 pb-4 md:pb-0">
                {serviceLinks.map((service) => (
                  <li key={service.id} className="flex-shrink-0 md:flex-shrink">
                    <NavLink
                      to={`/services/${service.id}`}
                      className={({ isActive }) =>
                        `block px-3 py-2 md:px-4 md:py-3 w-[80%] transition-colors whitespace-nowrap md:whitespace-normal ${
                          isActive
                            ? "bg-[#F4F3F0] text-base md:text-lg rounded-xl text-[#5C6C72]"
                            : "text-[#5C6C72] hover:text-black hover:rounded-xl hover:bg-[#F4F3F0]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <Typography
                          className={`text-sm md:text-base ${
                            isActive ? "font-medium" : "font-normal"
                          }`}
                        >
                          {service.label}
                        </Typography>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-2/3 bg-inherit rounded-md">
              {renderServiceContent()}
            </div>
          </div>
        </div>
      </section>
      <Register />
    </main>
  );
};

export default Services;
