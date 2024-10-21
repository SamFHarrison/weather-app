import { Forecastday } from "@/app/types/weather";
import Badge from "../Badge/Badge";
import dayjs from "dayjs";
import "./ForecastCard.css";

interface ForecastCardProps {
  weather: Forecastday;
  tempScale: string;
}

const ForecastCard = ({ weather }: ForecastCardProps) => {
  return (
    <div className="forecast-card">
      <div className="card-header">
        <p className="day">{dayjs(weather.date).format("ddd")}</p>
        <img
          className="icon"
          src={weather.day.condition.icon}
          alt={weather.day.condition.text}
        />
      </div>

      <div className="forecast-temperature">
        {Math.round(weather.day.avgtemp_c)}&deg;
      </div>

      <div className="temperature-range">
        <Badge isSmall value={Math.round(weather.day.maxtemp_c)} title="H" />
        <Badge isSmall value={Math.round(weather.day.mintemp_c)} title="L" />
      </div>
    </div>
  );
};

export default ForecastCard;
