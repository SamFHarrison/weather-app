import { Weather } from "@/app/types/weather";
import React from "react";
import "./Location.css";

interface LocationProps {
  weatherData: Weather;
}

function Location({ weatherData }: LocationProps) {
  return (
    <div className="location-wrapper">
      <svg width="25" height="25" viewBox="0 0 25 25">
        <path
          d="M24.8566 2.64934C25.1511 1.93421 24.9828 1.11091 24.4359 0.564042C23.889 0.0171759 23.0656 -0.151091 22.3505 0.143376L1.1954 8.79708C0.341981 9.14563 -0.138816 10.0471 0.0354731 10.9485C0.209762 11.8499 1.00308 12.4989 1.9226 12.4989H12.5001V23.0757C12.5001 23.9951 13.1492 24.7824 14.0507 24.9627C14.9522 25.143 15.8537 24.6562 16.2023 23.8028L24.8566 2.64934Z"
          fill="white"
        />
      </svg>

      <p className="location">{`${weatherData.location.name}, ${weatherData.location.country}`}</p>
    </div>
  );
}

export default Location;
