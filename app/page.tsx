"use client";

import useUserLocation from "./hooks/useUserLocation";
import styles from "./page.module.css";
import useGetWeather from "./hooks/useGetWeather";

export default function Home() {
  const { location, error: userLocationError } = useUserLocation();

  const {
    weatherData,
    isLoading: isWeatherLoading,
    error: weatherError,
  } = useGetWeather(location?.latitude || null, location?.longitude || null);

  if (isWeatherLoading) {
    return <p>isWeatherLoading</p>;
  }

  if (weatherError) {
    return <p>weatherError: {weatherError}</p>;
  }

  return (
    <div className={styles.page}>
      <h1>Response</h1>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
}
