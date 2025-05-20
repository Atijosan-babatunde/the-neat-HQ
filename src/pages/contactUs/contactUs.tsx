import { Button, Typography } from "@material-tailwind/react";
import { Location, WhatsAppIcon } from "../../assets/svg";
import { useContext, useEffect } from "react";
import { LocationContext } from "../../components/constants/locationContext";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { selectedLocation } = useContext(LocationContext);
  const address = selectedLocation?.label || "Address Here, UK";
  const phone = selectedLocation?.phone || "+44 777 750 6569";

  return (
    <main className="bg-[#7A8F8C] py-10 md:py-20">
      <div className="container md:max-w-[80%] mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-10">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/2">
          <Typography className="font-playfair text-white text-3xl md:text-5xl font-semibold">
            Contact Us
          </Typography>
          <Typography className="text-white max-w-sm mt-4 md:mt-8 text-base md:text-lg">
            Get in Touch! Fill out contact form or call us to schedule your
            cleaning.
          </Typography>
          <Typography className="text-white text-base md:text-lg">
            We can't wait to make your space shine!
          </Typography>
          <section className="mt-6 md:mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2.5 items-start">
                <Location />
                <Typography className="text-white text-base md:text-lg">
                  {address}
                </Typography>
              </div>
              <div className="flex gap-2.5 items-start">
                <WhatsAppIcon />
                <Typography className="text-white text-base md:text-lg">
                  {phone}
                </Typography>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-[#F1EFE3] border-2 border-[#C1BBA4] px-6 sm:px-10 md:px-8 py-8 rounded-lg shadow-md">
          <Typography className="text-center text-black text-2xl md:text-3xl font-bold mb-6">
            Send Us A Message
          </Typography>

          <form className="space-y-4">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "phone", label: "Phone Number", type: "tel" },
              { id: "subject", label: "Subject", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-base md:text-lg font-medium text-gray-700 mb-1"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  className="w-full p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-base md:text-lg font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 bg-[#E8E6D9] border border-[#D7D3C4] rounded-md resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-[#7A8F8C] text-white rounded-md"
            >
              <Typography className="text-lg md:text-xl font-semibold">
                Send Message
              </Typography>
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
