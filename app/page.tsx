import styles from "./page.module.css";
import { getWeather } from "./services/weather/getWeather";

export default async function Home() {
  const weatherData = await getWeather();

  console.log(weatherData);

  return <div className={styles.page}></div>;
}
