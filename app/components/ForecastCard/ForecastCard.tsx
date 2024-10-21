import { Forecastday } from "@/app/types/weather";
import Badge from "../Badge/Badge";
import dayjs from "dayjs";
import "./ForecastCard.css";

interface ForecastCardProps {
  weather: Forecastday;
  tempScale: string;
}

const ForecastCard = ({ weather, tempScale }: ForecastCardProps) => {
  return (
    <div className="forecast-card" key={weather.date_epoch}>
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
          isSmall
          value={
            tempScale === "celsius"
              ? Math.round(weather.day.maxtemp_c)
              : Math.round(weather.day.maxtemp_f)
          }
          title="H"
        />
        <Badge
          isSmall
          value={
            tempScale === "celsius"
              ? Math.round(weather.day.mintemp_c)
              : Math.round(weather.day.mintemp_f)
          }
          title="L"
        />
      </div>
    </div>
  );
};

export default ForecastCard;
