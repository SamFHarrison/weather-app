"use client";

import { useEffect, useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

interface UseUserLocationReturn {
  userLocation: Location | null;
}

const useUserLocation = (): UseUserLocationReturn => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);

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
              throw new Error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              throw new Error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              throw new Error("The request to get user location timed out.");
              break;
            default:
              throw new Error("An unknown error occurred.");
          }
        }
      );
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }
  }, []);

  return { userLocation };
};

export default useUserLocation;
