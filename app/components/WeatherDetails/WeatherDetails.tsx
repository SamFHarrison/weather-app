import { Weather } from "@/app/types/weather";
import React from "react";
import Badge from "../Badge/Badge";

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
            value={weather?.forecast.forecastday[0].day.maxtemp_c}
          />

          <Badge
            title="L"
            value={weather?.forecast.forecastday[0].day.mintemp_c}
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
        <dt className="more-info-dt">WIND SPEED</dt>
        <dd className="more-info-dd">{weather.current.wind_mph}mph</dd>
        <dt className="more-info-dt">WIND DIRECTION</dt>
        <dd className="more-info-dd">{weather.current.wind_dir}</dd>
        <dt className="more-info-dt">HUMIDITY</dt>
        <dd className="more-info-dd">{weather.current.humidity}%</dd>
        <dt className="more-info-dt">FEELS LIKE</dt>
        <dd className="more-info-dd">
          {tempScale === "celsius"
            ? Math.round(weather?.current.feelslike_c)
            : Math.round(weather?.current.feelslike_f)}
          &deg;
        </dd>
        <dt className="more-info-dt">VISIBILITY</dt>
        <dd className="more-info-dd">{weather.current.vis_miles} miles</dd>
      </dl>
    </section>
  );
}

export default WeatherDetails;
