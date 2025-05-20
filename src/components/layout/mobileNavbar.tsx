// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/images/Logo.png";

// const MobileNavbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="lg:hidden fixed top-0 left-0 w-full z-[9999] bg-white shadow-md px-4 py-3 flex justify-between items-center">
//       <NavLink to="/" onClick={closeMenu}>
//         <img src={logo} alt="Logo" className="h-8" />
//       </NavLink>

//       <button
//         onClick={toggleMenu}
//         className="text-[#7A8F8C] text-2xl focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4">
//           <ul className="flex flex-col gap-4 px-6 text-[#7A8F8C] font-medium">
//             <li>
//               <NavLink to="/" onClick={closeMenu}>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/areas" onClick={closeMenu}>Area Covered</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/services/home-cleaning" onClick={closeMenu}>
//                 Home Cleaning
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/services/office-cleaning" onClick={closeMenu}>
//                 Office Cleaning
//               </NavLink>
//             </li>
//             <li>
//               <a
//                 href="https://theneathq.launch27.com/login"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={closeMenu}
//               >
//                 Login
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default MobileNavbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const serviceLinks = [
  { href: "/services/home-holiday-cleaning", label: "Holiday Home Cleaning" },
  { href: "/services/post-construction-cleaning", label: "Post Construction Cleaning" },
  { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/services/laundry-services", label: "Laundry Services" },
  { href: "/services/home-organisation", label: "Home Organisation" },
  { href: "/services/carpet-cleaning", label: "Carpet Cleaning" },
];

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="md:hidden bg-white px-4 py-3 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          CompanyName
        </Link>
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen mt-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 text-lg hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Services dropdown */}
          <li>
            <button
              onClick={toggleServices}
              className="w-full flex items-center justify-between text-gray-700 text-lg hover:text-black"
            >
              Services
              {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isServicesOpen && (
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className="text-gray-600 text-base hover:text-black"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;