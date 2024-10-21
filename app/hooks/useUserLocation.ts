import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

interface UseUserLocation {
  userLocation: Location | null;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

const useUserLocation = (): UseUserLocation => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error: GeolocationPositionError) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError(
                "Location services are disabled. Please search for a location manually."
              );
              break;
            case error.POSITION_UNAVAILABLE:
              setError(
                "Location information is unavailable. Please search for a location manually"
              );
              break;
            case error.TIMEOUT:
              setError(
                "We couldn't get your location. Please search for a location manually"
              );
              break;
            default:
              setError(
                "An unknown error occurred. Please search for a location manually"
              );
          }
        }
      );
    } else {
      setError(
        "Geolocation is not supported by this browser. Please search for a location manually"
      );
    }
  }, []);

  return { userLocation, error, setError };
};

export default useUserLocation;
