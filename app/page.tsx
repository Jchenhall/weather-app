import Image from "next/image";
import Weather from "./components/weather";
import { getWeatherLocationData, getWeatherData } from "./api/WeatherApi";
import { getWeekday } from "@/utils/GetWeekDay";

export default async function Home() {
  const weatherLocation = await getWeatherLocationData();
  const weatherData = await getWeatherData();
  const currentWeather = weatherData[0];

  return (
    <main className="w-full h-full flex flex-col">
      <div className="card w-full bg-neutral text-neutral-content  p-8 col-span-4 sm:col-span-2 md:col-span-1">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            IP location: {weatherLocation.location.name}
          </h2>
          <h2 className="card-normal">{weatherLocation.location.country}</h2>
          <h3 className="card-normal">Look at the weather somewhere else:</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <div
        className="card w-full bg-neutral text-neutral-content  p-8 col-span-4 sm:col-span-2 md:col-span-1"
        key={currentWeather.id}
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title">{getWeekday(currentWeather.date)}</h2>
          <p>{currentWeather.day.avgtemp_c} °C</p>
          <p>{currentWeather.day.condition.text}</p>

          <Image
            src={`https:${currentWeather.day.condition.icon}`}
            alt={"icon"}
            width={65}
            height={65}
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
      <Weather />
    </main>
  );
}
