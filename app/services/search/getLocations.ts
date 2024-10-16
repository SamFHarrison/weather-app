export async function getLocations(query: string) {
  const queryParams = new URLSearchParams({
    key: `${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
    q: `${query}`,
  });

  let response = await fetch(
    `${
      process.env.NEXT_PUBLIC_WEATHER_BASE_API_URL
    }/search.json?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location search results");
  }

  return response.json();
}
