"use client";

import { useState } from "react";
import { tempScaleOptions } from "./constants/constants";
import { Location as LocationType } from "./types/location";
import useSearchLocation from "./hooks/useLocationSearch";
import useGetWeather from "./hooks/useGetWeather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import ForecastCard from "./components/ForecastCard/ForecastCard";
import Combobox from "./components/Combobox/Combobox";
import Location from "./components/Location/Location";
import Toggle from "./components/Toggle/Toggle";
import "./page.css";

export default function Home() {
  const [searchedLocation, setSearchedLocation] = useState<LocationType | null>(
    null
  );
  const [tempScale, setTempScale] = useState(tempScaleOptions[0].value);

  const {
    weather,
    isLoading: isWeatherLoading,
    error: weatherError,
    locationError,
  } = useGetWeather(searchedLocation);

  const {
    searchResults,
    isLoading: isSearchLoading,
    error: searchError,
    searchLocations,
  } = useSearchLocation();

  const handleSelectLocation = (selectedLoaction: LocationType) => {
    setSearchedLocation(selectedLoaction);
    searchLocations();
  };

  const forecasts = weather ? weather.forecast.forecastday.slice(1) : [];

  return (
    <>
      <header className="header">
        <div className="search-bar-wrapper">
          <Combobox
            onChange={searchLocations}
            onSelect={handleSelectLocation}
            options={searchResults}
            isLoading={isSearchLoading}
          />

          {isWeatherLoading && <span className="spinner" />}
        </div>

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

      {weather && (
        <main className="hero">
          <Location weather={weather} />

          <WeatherDetails tempScale={tempScale} weather={weather} />

          {forecasts.length > 0 && (
            <div className="forecast">
              {forecasts.map((day, index) => (
                <ForecastCard weather={day} tempScale={tempScale} key={index} />
              ))}
            </div>
          )}
        </main>
      )}
    </>
  );
}
