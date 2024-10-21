"use client";

import { Weather } from "@/app/types/weather";
import React from "react";
import Badge from "../Badge/Badge";
import "./WeatherDetails.css";

interface WeatherDetailsProps {
  weather: Weather;
  tempScale: string;
}

function WeatherDetails({ weather, tempScale }: WeatherDetailsProps) {
  return (
    <section className="current-weather">
      <div className="temperature-info">
        <div className="badge-wrapper">
          <Badge
            title="H"
            ariaLabel="High"
            value={
              tempScale === "celsius"
                ? Math.round(weather?.forecast.forecastday[0].day.maxtemp_c)
                : Math.round(weather?.forecast.forecastday[0].day.maxtemp_f)
            }
          />

          <Badge
            title="L"
            ariaLabel="Low"
            value={
              tempScale === "celsius"
                ? Math.round(weather?.forecast.forecastday[0].day.mintemp_c)
                : Math.round(weather?.forecast.forecastday[0].day.mintemp_f)
            }
          />
        </div>

        <p className="temperature">
          {`${
            tempScale === "celsius"
              ? Math.round(weather?.current.temp_c)
              : Math.round(weather?.current.temp_f)
          }`}
          &deg;
        </p>
      </div>

      <dl className="more-info">
        <dt className="more-info-dt">Wind speed</dt>
        <dd className="more-info-dd">{weather.current.wind_mph}mph</dd>
        <dt className="more-info-dt">Wind direction</dt>
        <dd className="more-info-dd">{weather.current.wind_dir}</dd>
        <dt className="more-info-dt">Humidity</dt>
        <dd className="more-info-dd">{weather.current.humidity}%</dd>
        <dt className="more-info-dt">Feels like</dt>
        <dd className="more-info-dd">
          {tempScale === "celsius"
            ? Math.round(weather?.current.feelslike_c)
            : Math.round(weather?.current.feelslike_f)}
          &deg;
        </dd>
        <dt className="more-info-dt">Visibility</dt>
        <dd className="more-info-dd">{weather.current.vis_miles} miles</dd>
      </dl>
    </section>
  );
}

export default WeatherDetails;
