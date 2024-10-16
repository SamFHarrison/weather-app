"use client";

import styles from "./page.module.css";
import useGetWeather from "./hooks/useGetWeather";
import ComboBox from "./components/ComboBox/ComboBox";
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
    isLoading: searchLoading,
    error: searchError,
    searchLocations,
  } = useSearchLocation();

  console.log(weatherData);
  console.log(searchResults);

  const handleSelectLocation = (location: Location) => {
    setSearchedLocation(location);
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
    <div className={styles.page}>
      <ComboBox
        onChange={searchLocations}
        onSelect={handleSelectLocation}
        options={searchResults}
      />
      {/* <h1>Response</h1>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre> */}
    </div>
  );
}
