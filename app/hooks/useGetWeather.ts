import { useState, useEffect } from "react";
import { Weather } from "../types/weather";
import { Location } from "../types/location";
import { getWeather } from "../services/weather/getWeather";
import useUserLocation from "./useUserLocation";

interface UseWeatherReturn {
  weatherData: Weather | null;
  isLoading: boolean;
  weatherError: string | null;
  locationError: string | null;
}

const useGetWeather = (searchedLocation: Location | null): UseWeatherReturn => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const { userLocation, locationError } = useUserLocation();

  const latitude = searchedLocation
    ? searchedLocation.lat
    : userLocation?.latitude;
  const longitude = searchedLocation
    ? searchedLocation.lon
    : userLocation?.longitude;

  useEffect(() => {
    if (latitude && longitude) {
      setIsLoading(true);
      getWeather(latitude, longitude)
        .then((data) => {
          setWeatherData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setWeatherError(error.message);
          setIsLoading(false);
        });
    }
  }, [latitude, longitude]);

  return { weatherData, isLoading, weatherError, locationError };
};

export default useGetWeather;
