import { useState, useEffect } from "react";
import { Weather } from "../types/weather";
import { getWeather } from "../services/weather/getWeather";

interface UseWeatherReturn {
  weatherData: Weather | null;
  isLoading: boolean;
  error: string | null;
}

const useGetWeather = (
  latitude: number | null,
  longitude: number | null
): UseWeatherReturn => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (latitude && longitude) {
      setIsLoading(true);
      getWeather(latitude, longitude)
        .then((data) => {
          setWeatherData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [latitude, longitude]);

  return { weatherData, isLoading, error };
};

export default useGetWeather;
