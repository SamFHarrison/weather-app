"use client";

import { useState } from "react";
import { tempScaleOptions } from "./constants/constants";
import { Location } from "./types/location";
import useSearchLocation from "./hooks/useLocationSearch";
import useGetWeather from "./hooks/useGetWeather";
import ForecastCard from "./components/ForecastCard/ForecastCard";
import Combobox from "./components/Combobox/Combobox";
import Toggle from "./components/Toggle/Toggle";
import "./page.css";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

export default function Home() {
  const [searchedLocation, setSearchedLocation] = useState<Location | null>(
    null
  );
  const [tempScale, setTempScale] = useState(tempScaleOptions[0].value);

  const {
    weatherData,
    isLoading: isWeatherLoading,
    weatherError,
    locationError,
  } = useGetWeather(searchedLocation);

  const {
    searchResults,
    isLoading: isSearchLoading,
    error: searchError,
    searchLocations,
  } = useSearchLocation();

  const handleSelectLocation = (location: Location) => {
    setSearchedLocation(location);
    searchLocations();
  };

  const fiveDayForecast = weatherData
    ? weatherData?.forecast.forecastday.slice(1)
    : [];

  return (
    <>
      <header className="header">
        <Combobox
          onChange={searchLocations}
          onSelect={handleSelectLocation}
          options={searchResults}
          isLoading={isSearchLoading}
        />
        <Toggle
          options={tempScaleOptions}
          onClick={(selectedOption) => {
            setTempScale(selectedOption);
          }}
        />
      </header>

      {(locationError || weatherError || searchError) && (
        <div role="alert" className="error">
          <p>{locationError}</p>
          <p>{weatherError}</p>
          <p>{searchError}</p>
        </div>
      )}

      {weatherData && (
        <main className="hero">
          <div className="location-wrapper">
            <svg width="25" height="25" viewBox="0 0 25 25">
              <path
                d="M24.8566 2.64934C25.1511 1.93421 24.9828 1.11091 24.4359 0.564042C23.889 0.0171759 23.0656 -0.151091 22.3505 0.143376L1.1954 8.79708C0.341981 9.14563 -0.138816 10.0471 0.0354731 10.9485C0.209762 11.8499 1.00308 12.4989 1.9226 12.4989H12.5001V23.0757C12.5001 23.9951 13.1492 24.7824 14.0507 24.9627C14.9522 25.143 15.8537 24.6562 16.2023 23.8028L24.8566 2.64934Z"
                fill="white"
              />
            </svg>

            <p className="location">{`${weatherData?.location.name}, ${weatherData?.location.country}`}</p>
          </div>

          <WeatherDetails tempScale={tempScale} weather={weatherData} />

          {fiveDayForecast.length > 0 && (
            <div className="forecast">
              {fiveDayForecast.map((day, index) => (
                <ForecastCard weather={day} tempScale={tempScale} key={index} />
              ))}
            </div>
          )}
        </main>
      )}
    </>
  );
}
