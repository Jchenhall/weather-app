import Image from "next/image";
import { getWeatherData, getWeatherLocationData } from "../api/WeatherApi";
import { getWeekday } from "@/utils/GetWeekDay";

export default async function Weather() {
  const forecastDays = await getWeatherData();

  //the slice cuts off the current day. inspiration from https://www.weatherapi.com/weather/
  return (
    <div className="m-24 rounded-md grid grid-cols-6 gap-5  w-100">
      {forecastDays.slice(1).map((day) => (
        <div
          className="card w-full bg-neutral text-neutral-content  p-8 col-span-4 sm:col-span-2 md:col-span-1"
          key={day.id}
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{getWeekday(day.date)}</h2>
            <p>{day.day.avgtemp_c} °C</p>
            <p>{day.day.condition.text}</p>

            <Image
              src={`https:${day.day.condition.icon}`}
              alt={"icon"}
              width={65}
              height={65}
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // const getForecastData = async () => {
  //   await fetch(
  //     `https://api-bdc.net/data/ip-geolocation?key=${process.env.NEXT_PUBLIC_BDC_API_KEY}`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then(async (data) => {
  //       console.log(data.ip);
  //       return data.ip;
  //     })
  //     .then(async (ip) => {
  //       await fetch(
  //         `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=7&key=cc0c30ef4f414185ada224930230907`
  //       )
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then(async (data) => {
  //           console.log(data);
  //           setWeatherForecast(data.forecast.forecastday);
  //         });
  //     });
  // };

  // const getWeekday = (s: any) => {
  //   const [yyyy, mm, dd] = s.split("-"),
  //     date = new Date(yyyy, mm - 1, dd);
  //   return date.toLocaleDateString("en-Uk", { weekday: "short" });
  // };

  // useEffect(() => {
  //   getForecastData();
  // }, []);

  // const getDays = (): JSX.Element[] => {
  //   return [
  //     {
  //       id: 1,
  //       name:
  //         weatherForecast[0]?.date != undefined ? (
  //           getWeekday(weatherForecast[0]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[0]?.day?.avgtemp_c,
  //       weather: weatherForecast[0]?.day?.condition?.text,
  //       icon: weatherForecast[0]?.day?.condition?.icon,
  //     },
  //     {
  //       id: 2,
  //       name:
  //         weatherForecast[1]?.date != undefined ? (
  //           getWeekday(weatherForecast[1]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[1]?.day?.avgtemp_c,
  //       weather: weatherForecast[1]?.day?.condition?.text,
  //       icon: weatherForecast[1]?.day?.condition?.icon,
  //     },
  //     {
  //       id: 3,
  //       name:
  //         weatherForecast[2]?.date != undefined ? (
  //           getWeekday(weatherForecast[2]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[2]?.day?.avgtemp_c,
  //       weather: weatherForecast[2]?.day?.condition?.text,
  //       icon: weatherForecast[2]?.day?.condition?.icon,
  //     },
  //     {
  //       id: 4,
  //       name:
  //         weatherForecast[3]?.date != undefined ? (
  //           getWeekday(weatherForecast[3]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[3]?.day?.avgtemp_c,
  //       weather: weatherForecast[3]?.day?.condition?.text,
  //       icon: weatherForecast[3]?.day?.condition?.icon,
  //     },
  //     {
  //       id: 5,
  //       name:
  //         weatherForecast[4]?.date != undefined ? (
  //           getWeekday(weatherForecast[4]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[4]?.day?.avgtemp_c,
  //       weather: weatherForecast[4]?.day?.condition?.text,
  //       icon: weatherForecast[4]?.day?.condition?.icon,
  //     },
  //     {
  //       id: 6,
  //       name:
  //         weatherForecast[5]?.date != undefined ? (
  //           getWeekday(weatherForecast[5]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[5]?.day?.avgtemp_c,
  //       weather: weatherForecast[5]?.day?.condition?.text,
  //       icon: weatherForecast[5]?.day?.condition?.icon,
  //     },
  //     {
  //       id: 7,
  //       name:
  //         weatherForecast[6]?.date != undefined ? (
  //           getWeekday(weatherForecast[6]?.date)
  //         ) : (
  //           <span className="loading loading-spinner loading-lg"></span>
  //         ),
  //       temperature: weatherForecast[6]?.day?.avgtemp_c,
  //       weather: weatherForecast[6]?.day?.condition?.text,
  //       icon: weatherForecast[6]?.day?.condition?.icon,
  //     },
  //   ].map((day: any) => {
  //     return (
  //       // <div key={day.id}>
  //       //   <p>{day.name} </p>
  //       //   <p>{day.temperature} °C</p>
  //       //   <p>{day.weather}</p>
  //       // </div>

  //       <div
  //         className="card w-96 bg-neutral text-neutral-content gap-20"
  //         key={day.id}
  //       >
  //         <div className="card-body items-center text-center">
  //           <h2 className="card-title">{day.name}</h2>
  //           <p>{day.temperature} °C</p>
  //           <p>{day.weather}</p>
  //           <div className="card-actions justify-end">
  //             <button className="btn btn-primary">See more</button>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
}
