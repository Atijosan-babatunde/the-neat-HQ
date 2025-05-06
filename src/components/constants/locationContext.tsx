import React, { createContext, useState, ReactNode } from "react";

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

interface LocationContextType {
  selectedLocation: CountryOption | null;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<CountryOption | null>
  >;
}

export const LocationContext = createContext<LocationContextType>({
  selectedLocation: null,
  setSelectedLocation: () => {},
});

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [selectedLocation, setSelectedLocation] =
    useState<CountryOption | null>(null);

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
