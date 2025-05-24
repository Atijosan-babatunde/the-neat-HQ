import { Typography } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { ROUTES } from "../constants/routes";
import { useContext, useState, useEffect } from "react";
import { LocationContext } from "../constants/locationContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LocationItem {
  name: string;
  path: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface RegionData {
  name: string;
  locations: LocationItem[];
}

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

const Location = () => {
  const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
  const [regions, setRegions] = useState<RegionData[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    52.9548, -1.1581,
  ]); // Default to Nottingham
  const zoom = 7; // Default zoom level for country view

  // Load region data based on selected country
  useEffect(() => {
    if (selectedLocation?.value === "uk") {
      const ukRegions = [
        {
          name: "East Midlands",
          locations: [
            {
              name: "East London",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 52.9548, lng: -1.1581 },
            },
            {
              name: "Kent",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 52.6369, lng: -1.1398 },
            },
            {
              name: "Essex",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 53.0394, lng: -1.2017 },
            },
            // {
            //   name: "Brackley",
            //   path: ROUTES.LOCATION_DETAILS,
            //   coordinates: { lat: 52.0317, lng: -1.1483 },
            // },
          ],
        },
        // {
        //   name: "East of England",
        //   locations: [
        //     {
        //       name: "Cambridge",
        //       path: ROUTES.LOCATION_DETAILS,
        //       coordinates: { lat: 52.2053, lng: 0.1218 },
        //     },
        //     {
        //       name: "Norwich",
        //       path: ROUTES.LOCATION_DETAILS,
        //       coordinates: { lat: 52.6309, lng: 1.2974 },
        //     },
        //     {
        //       name: "Ipswich",
        //       path: ROUTES.LOCATION_DETAILS,
        //       coordinates: { lat: 52.0567, lng: 1.1482 },
        //     },
        //     {
        //       name: "Peterborough",
        //       path: ROUTES.LOCATION_DETAILS,
        //       coordinates: { lat: 52.5695, lng: -0.2405 },
        //     },
        //   ],
        // },
      ];
      setRegions(ukRegions);
      setMapCenter([53.0, -1.5]); // Center of UK
    } else if (selectedLocation?.value === "dubai") {
      const dubaiRegions = [
        {
          name: "Dubai City",
          locations: [
            {
              name: "Dubai Marina",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.0657, lng: 55.2244 },
            },
            {
              name: "Downtown Dubai",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.1972, lng: 55.2744 },
            },
            {
              name: "Jumeirah",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.2048, lng: 55.2708 },
            },
            {
              name: "Dubai Hills",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.1304, lng: 55.2569 },
            },
          ],
        },
        {
          name: "Northern Emirates",
          locations: [
            {
              name: "Sharjah",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.3463, lng: 55.4209 },
            },
            {
              name: "Ajman",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.4111, lng: 55.4354 },
            },
            {
              name: "Ras Al Khaimah",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.7867, lng: 55.9429 },
            },
            {
              name: "Fujairah",
              path: ROUTES.LOCATION_DETAILS,
              coordinates: { lat: 25.1288, lng: 56.3265 },
            },
          ],
        },
      ];
      setRegions(dubaiRegions);
      setMapCenter([25.2, 55.3]); // Center of Dubai/UAE area
    }
  }, [selectedLocation]);

  const handleLocationSelect = (region: string, location: LocationItem) => {
    if (selectedLocation) {
      setSelectedLocation({
        ...selectedLocation,
        label: location.name,
        address: `${location.name}, ${region}, ${selectedLocation.label}`,
        mapCoordinates: location.coordinates,
      });
    }
  };

  return (
    <main className="md:max-w-[80%] md:px-0 px-4 container mx-auto py-10 md:py-20">
      <header className="text-center pb-10 md:pb-16">
        <Typography className="font-bold text-2xl">
          Discover your location from the options below
        </Typography>
        {/* <Typography className="font-bold text-2xl">
          {selectedLocation?.label || "Select a country"}
        </Typography> */}
      </header>
      <section>
        {regions.map((region, index) => (
          <div
            key={index}
            className="flex bg-[#EEECE2] md:flex-row flex-col border-[2px] border-[#C1BBA4] py-12 md:px-16 px-4 rounded-xl justify-between gap-10 mt-10 first:mt-0"
          >
            <div className="flex flex-col gap-3">
              {/* <Typography className="text-2xl font-semibold">
                {region.name}
              </Typography> */}
              <div className="flex mt-3.5">
                <ul className="flex flex-col gap-7 w-full">
                  {region.locations.map((location, locIndex) => (
                    <Link
                      key={locIndex}
                      to={location.path}
                      onClick={() =>
                        handleLocationSelect(region.name, location)
                      }
                    >
                      <li className="flex justify-between items-center">
                        <Typography className="text-xl text-[#5C6C72] font-normal">
                          {location.name}
                        </Typography>
                        <ChevronRight color="#5C6C72" />
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div
                className="rounded-lg overflow-hidden"
                style={{ width: "100%", height: "100%" }}
              >
                <MapContainer
                  center={mapCenter}
                  zoom={zoom}
                  scrollWheelZoom={false}
                  style={{ height: "400px", width: "700px" }}
                  key={`${mapCenter[0]}-${mapCenter[1]}`}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {region.locations.map((location, idx) => (
                    <Marker
                      key={idx}
                      position={[
                        location.coordinates.lat,
                        location.coordinates.lng,
                      ]}
                    >
                      <Popup>
                        <div className="text-center">
                          <strong>{location.name}</strong>
                          <br />
                          <Link
                            to={location.path}
                            onClick={() =>
                              handleLocationSelect(region.name, location)
                            }
                            className="text-blue-500 hover:underline mt-2 inline-block"
                          >
                            View Details
                          </Link>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Location;
