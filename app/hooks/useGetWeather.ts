import { useState, useEffect } from "react";
import { Weather } from "../types/weather";
import { Location } from "../types/location";
import { getWeather } from "../services/weather/getWeather";
import useUserLocation from "./useUserLocation";

interface UseWeatherReturn {
  weather: Weather | null;
  isLoading: boolean;
  error: string | null;
  locationError: string | null;
}

const useGetWeather = (searchedLocation: Location | null): UseWeatherReturn => {
  const [weather, setWeatherData] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    userLocation,
    error: locationError,
    setError: setLocationError,
  } = useUserLocation();

  const latitude = searchedLocation
    ? searchedLocation.lat
    : userLocation?.latitude;
  const longitude = searchedLocation
    ? searchedLocation.lon
    : userLocation?.longitude;

  useEffect(() => {
    if (latitude && longitude) {
      setLocationError(null);
      setIsLoading(true);
      getWeather(latitude, longitude)
        .then((data) => {
          setWeatherData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [latitude, longitude]);

  return { weather, isLoading, error, locationError };
};

export default useGetWeather;
