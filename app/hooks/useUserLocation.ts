import { useEffect, useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

interface UseUserLocationReturn {
  userLocation: Location | null;
  locationError: string | null;
}

const useUserLocation = (): UseUserLocationReturn => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

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
              setLocationError(
                "Location access has been denied. Please search for a location manually."
              );
              break;
            case error.POSITION_UNAVAILABLE:
              setLocationError(
                "Location information is unavailable. Please search for a location manually"
              );
              break;
            case error.TIMEOUT:
              setLocationError(
                "We couldn't get your location. Please search for a location manually"
              );
              break;
            default:
              setLocationError(
                "An unknown error occurred. Please search for a location manually"
              );
          }
        }
      );
    } else {
      setLocationError(
        "Geolocation is not supported by this browser. Please search for a location manually"
      );
    }
  }, []);

  return { userLocation, locationError };
};

export default useUserLocation;
