import { Forecastday } from "@/app/types/weather";
import Badge from "../Badge/Badge";
import dayjs from "dayjs";
import "./ForecastCard.css";

export interface ForecastCardProps {
  weather: Forecastday;
  tempScale: string;
  key?: number;
}

const ForecastCard = ({ weather, tempScale, key }: ForecastCardProps) => {
  return (
    <div className="forecast-card glass" key={key}>
      <div className="card-header">
        <p className="day">{dayjs(weather.date).format("ddd")}</p>
        <img
          className="icon"
          src={weather.day.condition.icon}
          alt={weather.day.condition.text}
        />
      </div>

      <div className="forecast-temperature">
        {`${
          tempScale === "celsius"
            ? Math.round(weather.day.avgtemp_c)
            : Math.round(weather.day.avgtemp_f)
        }`}
        &deg;
      </div>

      <div className="temperature-range">
        <Badge
          title="H"
          ariaLabel="High"
          isSmall
          value={
            tempScale === "celsius"
              ? Math.round(weather.day.maxtemp_c)
              : Math.round(weather.day.maxtemp_f)
          }
        />
        <Badge
          title="L"
          ariaLabel="Low"
          isSmall
          value={
            tempScale === "celsius"
              ? Math.round(weather.day.mintemp_c)
              : Math.round(weather.day.mintemp_f)
          }
        />
      </div>
    </div>
  );
};

export default ForecastCard;
