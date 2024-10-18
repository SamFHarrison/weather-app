"use client";

import Combobox from "./components/Combobox/Combobox";
import Toggle from "./components/Toggle/Toggle";
import useGetWeather from "./hooks/useGetWeather";
import useSearchLocation from "./hooks/useLocationSearch";
import { Location } from "./types/location";
import { useState } from "react";
import "./page.css";
import Badge from "./components/Badge/Badge";

export default function Home() {
  const [searchedLocation, setSearchedLocation] = useState<Location | null>(
    null
  );
  const [isCelcius, setIsCelcius] = useState(true);

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
      <div className="header">
        <Combobox
          onChange={searchLocations}
          onSelect={handleSelectLocation}
          options={searchResults}
        />
        <Toggle
          onToggle={() => {
            setIsCelcius(!isCelcius);
          }}
        />
      </div>

      {weatherData && (
        <div className="hero">
          <div className="location-wrapper">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8566 2.64934C25.1511 1.93421 24.9828 1.11091 24.4359 0.564042C23.889 0.0171759 23.0656 -0.151091 22.3505 0.143376L1.1954 8.79708C0.341981 9.14563 -0.138816 10.0471 0.0354731 10.9485C0.209762 11.8499 1.00308 12.4989 1.9226 12.4989H12.5001V23.0757C12.5001 23.9951 13.1492 24.7824 14.0507 24.9627C14.9522 25.143 15.8537 24.6562 16.2023 23.8028L24.8566 2.64934Z"
                fill="white"
              />
            </svg>

            <p className="location">{`${weatherData?.location.name}, ${weatherData?.location.country}`}</p>
          </div>

          <section className="weather-info">
            <div className="temperature-info">
              <div className="badge-wrapper">
                <Badge
                  title="H"
                  value={weatherData?.forecast.forecastday[0].day.maxtemp_c}
                />

                <Badge
                  title="L"
                  value={weatherData?.forecast.forecastday[0].day.mintemp_c}
                />
              </div>

              <p className="temperature">
                {`${
                  isCelcius
                    ? Math.round(weatherData?.current.temp_c)
                    : Math.round(weatherData?.current.temp_f)
                }`}
                &deg;
              </p>
            </div>

            <dl className="more-info">
              <dt>WIND SPEED</dt>
              <dd>{weatherData.current.wind_mph}mph</dd>
              <dt>WIND DIRECTION</dt>
              <dd>{weatherData.current.wind_dir}</dd>
              <dt>HUMIDITY</dt>
              <dd>{weatherData.current.humidity}%</dd>
              <dt>FEELS LIKE</dt>
              <dd>{weatherData.current.feelslike_c}&deg;</dd>
              <dt>VISIBILITY</dt>
              <dd>{weatherData.current.vis_miles} miles</dd>
            </dl>
          </section>
        </div>
      )}
    </div>
  );
}
