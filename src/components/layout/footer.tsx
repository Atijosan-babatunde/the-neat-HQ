import { Typography } from "@material-tailwind/react";
import logo from "../../assets/images/Logo.png";
import { ContactUs, QuickLinks, Services } from "../utils/mockData";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 50);
  };

  return (
    <main>
      <div className="pt-16 container px-4 md:px-0 md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-[200px]" />
          </Link>
          <Typography className="max-w-sm font-normal mt-6 text-[#5C6C72]">
            {`   The Neat HQ is a professional cleaning service committed to keeping
            homes and offices spotless with reliable, efficient, and
            eco-friendly solutions. Whether you need a one-time deep clean or
            regular maintenance, our expert team ensures your space stays fresh
            and tidy — every time. A clean home is a happy life!`}
          </Typography>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <Typography className="text-[#2E3538] leading-relaxed max-w-xs text-3xl md:text-4xl font-medium">
              Subscribe to Our Newsletter
            </Typography>
            <Typography className="text-lg max-w-xs text-[#5C6C72]">
              Get weekly update and join our community
            </Typography>
          </div>
          <div className="relative mt-6">
            <input className="bg-[#EEECE2] py-4 md:py-5 pl-6 pr-32 w-full rounded-lg" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5C6C72] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium text-sm md:text-base">
              Subscribe
            </button>
          </div>

          <section className="flex flex-col md:flex-row text-[#5C6C72] mt-6 gap-8 md:justify-between">
            <div className="flex flex-col gap-3">
              <Typography className="font-medium text-[#7A8F8C] text-xl">
                Services
              </Typography>
              {Services.map((service, index) => (
                <div key={index}>
                  <Link to={service.to} onClick={handleScroll}>
                    <Typography className="font-normal text-lg">
                      {service.label}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Typography className="font-medium text-[#7A8F8C] text-xl">
                Quick Links
              </Typography>
              {QuickLinks.map((links, index) => (
                <div key={index}>
                  <Link to={links.to} onClick={handleScroll}>
                    <Typography className="font-normal text-lg">
                      {links.label}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Typography className="font-medium text-[#7A8F8C] text-xl">
                Contact Us
              </Typography>
              {ContactUs.map((contact, index) => (
                <div key={index}>
                  <Typography className="font-normal text-lg">
                    {contact.label}
                  </Typography>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <hr className="text-[#D7D3C4] mt-3" />
      <div className="py-8 font-medium text-[#5C6C72] flex flex-col md:flex-row justify-center md:justify-between container max-w-[80%] mx-auto gap-4">
        <Typography className="text-center md:text-left">
          {" "}
          © {new Date().getFullYear()} TheNeatHQ
        </Typography>
        <div className="flex gap-4 md:gap-9 justify-center md:justify-start">
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </div>
      </div>
    </main>
  );
};

export default Footer;
