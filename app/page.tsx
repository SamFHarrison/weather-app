"use client";

import useGetWeather from "./hooks/useGetWeather";
import Combobox from "./components/Combobox/Combobox";
import useSearchLocation from "./hooks/useLocationSearch";
import { Location } from "./types/location";
import { useState } from "react";

export default function Home() {
  const [searchedLocation, setSearchedLocation] = useState<Location | null>(
    null
  );

  const {
    weatherData,
    isLoading: isWeatherLoading,
    error: weatherError,
  } = useGetWeather(searchedLocation);

  const {
    searchResults,
    // isLoading: searchLoading,
    // error: searchError,
    searchLocations,
  } = useSearchLocation();

  console.log(weatherData);
  console.log(searchResults);

  const handleSelectLocation = (location: Location) => {
    setSearchedLocation(location);
    searchLocations();
  };

  if (isWeatherLoading) {
    // TODO: create loading spinner
    return <p>isWeatherLoading</p>;
  }

  if (weatherError) {
    // TODO: Create component to display errors
    return <p>weatherError: {weatherError}</p>;
  }

  return (
    <div className="page">
      <Combobox
        onChange={searchLocations}
        onSelect={handleSelectLocation}
        options={searchResults}
      />
    </div>
  );
}
