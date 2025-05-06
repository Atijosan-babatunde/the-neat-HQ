import { useContext, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import home from "../../assets/images/house.svg";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/mail.svg";
import time from "../../assets/images/time.svg";
import { LocationContext } from "../../components/constants/locationContext";
import { Link } from "react-router-dom";

// Using CDN version for marker icons
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const LocationDetails = () => {
  const { selectedLocation } = useContext(LocationContext);

  // Use a default location if none is selected
  // const defaultPosition = [52.9548, -1.1581]; // Nottingham

  useEffect(() => {
    // Force map to update when selectedLocation changes
    if (document.querySelector(".leaflet-container")) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 300);
    }
  }, [selectedLocation]);

  if (!selectedLocation) {
    return (
      <div className="container mx-auto py-10">Loading location details...</div>
    );
  }

  const position: L.LatLngTuple = [
    selectedLocation.mapCoordinates.lat,
    selectedLocation.mapCoordinates.lng,
  ];

  return (
    <main className="bg-inherit px-4 md:px-0 py-10 md:py-20">
      <div className="container md:max-w-[80%] mx-auto">
        <header className="flex text-center items-center flex-col gap-4 md:gap-6">
          <Typography className="text-[#5C6C72] flex gap-2 font-medium">
            Home <span>/</span>{" "}
            <span className="text-[#2E3538]">{selectedLocation.label}</span>
          </Typography>
          <Typography className="font-playfair text-[#2E3538] text-3xl md:text-5xl font-semibold">
            Areas Covered
          </Typography>
          <Typography className="text-[#5C6C72] md:max-w-lg">
            Neat HQ provides professional cleaning services across multiple
            locations. We're committed to delivering top-quality cleaning
            wherever you need us!
          </Typography>
        </header>
        <section className="md:mt-20 mt-8">
          <div className="flex bg-[#EEECE2] md:flex-row flex-col border-[2px] border-[#C1BBA4] py-7 md:py-12 md:px-16 px-4 rounded-xl justify-between gap-10">
            <div className="flex flex-col gap-3">
              <Typography className="text-2xl font-semibold">
                {selectedLocation.label} Contact Center
              </Typography>
              <div className="flex mt-4 flex-col gap-4 md:gap-7">
                <div className="flex items-start gap-4">
                  <img src={home} alt="home" />
                  <div className="flex flex-col gap-0 md:gap-3">
                    <Typography className="text-[#2E3538] text-lg font-semibold">
                      Address:
                    </Typography>
                    <Typography className="text-[#5C6C72] font-normal">
                      {selectedLocation.address}
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={phone} alt="phone" />
                  <div className="flex flex-col gap-0 md:gap-3">
                    <Typography className="text-[#2E3538] text-lg font-semibold">
                      Phone:
                    </Typography>
                    <Typography className="text-[#5C6C72] font-normal">
                      {selectedLocation.phone}
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={email} alt="email" />
                  <div className="flex flex-col gap-0 md:gap-3">
                    <Typography className="text-[#2E3538] text-lg font-semibold">
                      Email:
                    </Typography>
                    <Typography className="text-[#5C6C72] font-normal">
                      {selectedLocation.email}
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={time} alt="time" className="w-8 h-8" />
                  <div className="flex flex-col gap-0 md:gap-3">
                    <Typography className="text-[#2E3538] text-lg font-semibold">
                      Opening Hours:
                    </Typography>
                    <div className="flex flex-col">
                      <Typography className="text-[#5C6C72] font-normal">
                        {selectedLocation.openingHours.weekdays}
                      </Typography>
                      <Typography className="text-[#5C6C72] font-normal">
                        {selectedLocation.openingHours.weekends}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="mt-8">
                <Typography className="font-semibold text-[#2E3538] text-lg">
                  Get In Touch
                </Typography>
                <Typography className="text-[#5C6C72] mt-4 max-w-sm">
                  Our {selectedLocation.label} team is ready to assist you with
                  all your cleaning needs. Whether you need a one-time deep
                  clean or regular service, we're here to help.
                </Typography>
                <Typography className="text-[#5C6C72]">
                  Call or email us today to book your cleaning!
                </Typography>
                <div className="mt-8">
                  <Link to="contact-us">
                    <button className="bg-[#7A8F8C] cursor-pointer flex self-center justify-center w-fit items-center rounded-md py-2 px-4 md:py-3 md:px-6">
                      <Typography className="text-[#FFFFFF] font-medium text-base md:text-lg">
                        Book A Call Back
                      </Typography>
                    </button>
                  </Link>
                </div>
              </footer>
            </div>
            <div className="h-full min-h-[300px] flex justify-end">
              <div className="h-[400px] w-[600px] rounded-lg overflow-hidden shadow-lg border-2 border-[#C1BBA4]">
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                  key={`${position[0]}-${position[1]}`}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <div className="text-center">
                        <strong>{selectedLocation.label}</strong>
                        <br />
                        {selectedLocation.address}
                        <br />
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                          Get Directions
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LocationDetails;
