export async function getWeather(latitude: number, longitude: number) {
  const queryParams = new URLSearchParams({
    key: `${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
    q: `${latitude},${longitude}`,
    days: "5",
  });

  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return await response.json();
}
