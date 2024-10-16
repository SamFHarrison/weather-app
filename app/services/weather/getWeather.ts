export async function getWeather() {
  const queryParams = new URLSearchParams({
    key: "e3036f8bf34f4b55b48125709241510",
    q: "IV30",
    days: "5",
  });

  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?${queryParams.toString()}`
  );
  let weather = await response.json();

  return weather;
}
