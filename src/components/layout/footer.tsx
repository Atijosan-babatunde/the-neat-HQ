import logo from "../../assets/images/Logo.png";
import { ContactUs, QuickLinks } from "../utils/mockData";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 50);
  };

  return (
    <main>
      <div className="pt-16 container px-4 md:px-0 md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Description */}
        <div className="w-full md:w-auto">
          <Link to="/" onClick={handleScroll}>
            <img src={logo} alt="logo" className="max-w-[200px]" />
          </Link>
          <p className="max-w-sm font-normal mt-6 text-[#5C6C72]">
            The Neat HQ is a professional cleaning service committed to keeping
            homes and offices spotless with reliable, efficient, and
            eco-friendly solutions. Whether you need a one-time deep clean or
            regular maintenance, our expert team ensures your space stays fresh
            and tidy — every time. A clean home is a happy life!
          </p>
        </div>

        {/* Newsletter & Links */}
        <div className="w-full md:w-auto">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <h2 className="text-[#2E3538] leading-relaxed max-w-xs text-3xl md:text-4xl font-medium">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg max-w-xs text-[#5C6C72]">
              Get weekly update and join our community
            </p>
          </div>

          <div className="mt-6 bg-[#EEECE2] w-full flex items-center">
            <input
              placeholder="Enter your email"
              className="bg-[#EEECE2] py-4 md:py-5 pl-6 pr-32 w-full rounded-lg"
            />
            <button className="ml-[auto] bg-[#5C6C72] text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium text-sm md:text-base">
              Subscribe
            </button>
          </div>

          {/* Links Section */}
          <section className="flex flex-col md:flex-row text-[#5C6C72] mt-6 gap-8 md:justify-between">
            
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-[#7A8F8C] text-xl">Services</h3>
              <Link to="/services/home-holiday-cleaning" onClick={handleScroll} className="font-normal text-lg hover:text-[#2E3538]">Holiday Home Cleaning</Link>
              <Link to="/services/post-construction-cleaning" onClick={handleScroll} className="font-normal text-lg hover:text-[#2E3538]">Post Construction Cleaning</Link>
              <Link to="/services/commercial-cleaning" onClick={handleScroll} className="font-normal text-lg hover:text-[#2E3538]">Commercial Cleaning</Link>
              <Link to="/services/laundry-services" onClick={handleScroll} className="font-normal text-lg hover:text-[#2E3538]">Laundry Services</Link>
              <Link to="/services/home-organisation" onClick={handleScroll} className="font-normal text-lg hover:text-[#2E3538]">Home Organisation</Link>
              <Link to="/services/carpet-cleaning" onClick={handleScroll} className="font-normal text-lg hover:text-[#2E3538]">Carpet Cleaning</Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-[#7A8F8C] text-xl">Quick Links</h3>
              {QuickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  onClick={handleScroll}
                  className="font-normal text-lg hover:text-[#2E3538]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-[#7A8F8C] text-xl">Contact Us</h3>
              {ContactUs.map((contact, index) => (
                <p key={index} className="font-normal text-lg">
                  {contact.label}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>

      <hr className="text-[#D7D3C4] mt-3" />

      {/* Bottom Section */}
      <div className="py-8 font-medium text-[#5C6C72] flex flex-col md:flex-row justify-center md:justify-between container max-w-[80%] mx-auto gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} TheNeatHQ
        </p>
        <div className="flex gap-4 md:gap-9 justify-center md:justify-start">
          <Link to="/terms" onClick={handleScroll} className="hover:text-[#2E3538]">
            Terms & Conditions
          </Link>
          <Link to="/privacy" onClick={handleScroll} className="hover:text-[#2E3538]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Footer;

