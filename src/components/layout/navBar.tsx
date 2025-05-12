import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { ROUTES } from "../constants/routes";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const serviceSubLinks = [
  {
    href: `${ROUTES.SERVICES}/home-holiday-cleaning`,
    label: "Holiday Home Cleaning",
  },
  {
    href: `${ROUTES.SERVICES}/post-construction-cleaning`,
    label: "Post Construction Cleaning",
  },
  {
    href: `${ROUTES.SERVICES}/commercial-cleaning`,
    label: "Commercial Cleaning",
  },
  { href: `${ROUTES.SERVICES}/laundry-services`, label: "Laundry Services" },
  { href: `${ROUTES.SERVICES}/home-organisation`, label: "Home Organisation" },
  // {
  //   href: `${ROUTES.SERVICES}/appartment-cleaning`,
  //   label: "Appartment Cleaning",
  // },
  { href: `${ROUTES.SERVICES}/carpet-cleaning`, label: "Carpet Cleaning" },
];

const navLinks = [
  { href: ROUTES.ABOUT_US, label: "About Us" },
  { href: ROUTES.CONTACT_US, label: "Contact Us" },
  { href: ROUTES.AREAS, label: "Area Covered" },
];

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const getLinkClassName = (href: string) => {
    const isActive =
      location.pathname === href ||
      (href === ROUTES.SERVICES && location.pathname.includes(ROUTES.SERVICES));
    return `transition-colors tracking-wider hover:text-black ${
      isActive ? "text-black" : "text-[#5C6C72]"
    }`;
  };

  return (
    <div className="bg-[#D7D3C4]">
      <div className="container max-w-full px-4 md:px-0 lg:max-w-[80%] mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex gap-4 md:gap-10 items-center">
            <NavLink to={ROUTES.HOME}>
              <img src={logo} alt="logo" className="h-10 md:h-12" />
            </NavLink>

            <div className="hidden lg:block">
              <ul className="flex gap-6 xl:gap-10">
                <li>
                  <NavLink
                    to={ROUTES.ABOUT_US}
                    className={getLinkClassName(ROUTES.ABOUT_US)}
                  >
                    <Typography className="font-semibold text-lg">
                      About Us
                    </Typography>
                  </NavLink>
                </li>

                <li>
                  <Menu
                    open={isOpen}
                    handler={setIsOpen}
                    placement="bottom"
                    offset={5}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 10 },
                    }}
                  >
                    <MenuHandler>
                      <button
                        className={`flex cursor-pointer items-center gap-1 ${getLinkClassName(
                          ROUTES.SERVICES
                        )}`}
                      >
                        <Typography className="font-semibold text-lg">
                          Services
                        </Typography>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </MenuHandler>
                    <MenuList className="bg-[#D7D3C4] border-none shadow-xl rounded-md mt-2 p-2">
                      {serviceSubLinks.map(({ href, label }) => (
                        <MenuItem
                          key={href}
                          className="p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                        >
                          <NavLink
                            to={href}
                            className="w-full block py-2 px-4 text-[#5C6C72] hover:text-black hover:bg-[#C8C4B5] rounded"
                          >
                            <Typography className="font-medium">
                              {label}
                            </Typography>
                          </NavLink>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </li>

                {navLinks.slice(1).map(({ href, label }) => (
                  <li key={href}>
                    <NavLink to={href} className={getLinkClassName(href)}>
                      <Typography className="font-semibold text-lg">
                        {label}
                      </Typography>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://theneathq.launch27.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography className="hidden lg:block text-[#7A8F8C] text-lg font-medium cursor-pointer hover:text-[#5C6C72]">
                Login
              </Typography>
            </a>
            <Link to="contact-us">
              <button className="bg-[#7A8F8C] items-center rounded-md py-2 md:py-3 px-4 md:px-6 hover:bg-[#5C6C72] transition-colors">
                <Typography className="text-white text-sm md:text-base font-medium whitespace-nowrap">
                  Book A Call Back
                </Typography>
              </button>
            </Link>

            <button
              className="lg:hidden text-[#5C6C72]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#D7D3C4] pb-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    className={`${getLinkClassName(href)} block py-2`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Typography className="font-semibold">{label}</Typography>
                  </NavLink>
                </li>
              ))}

              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-2"
                >
                  <Typography className="font-semibold text-[#5C6C72]">
                    Services
                  </Typography>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <Collapse open={mobileServicesOpen}>
                  <div className="mt-2 pl-4 flex flex-col gap-2">
                    {serviceSubLinks.map(({ href, label }) => (
                      <NavLink
                        key={href}
                        to={href}
                        className="text-[#5C6C72] hover:text-black py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Typography className="font-medium text-sm">
                          {label}
                        </Typography>
                      </NavLink>
                    ))}
                  </div>
                </Collapse>
              </li>

              <li className="py-2">
                <Typography className="text-[#7A8F8C] font-medium cursor-pointer hover:text-[#5C6C72]">
                  Login
                </Typography>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
