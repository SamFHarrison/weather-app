export async function getWeather(latitude: number, longitude: number) {
  const queryParams = new URLSearchParams({
    key: `${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
    q: `${latitude},${longitude}`,
    days: "6",
  });

  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_WEATHER_BASE_API_URL
    }/forecast.json?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return await response.json();
}
