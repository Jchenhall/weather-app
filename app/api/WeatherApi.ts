type WeatherDataType = {
  id: number;
  date: string;
  day: {
    condition: { text: string; icon: string };
    avgtemp_c: number;
  };
};

type WeatherLocationDataType = {
  location: { name: string; country: string };
};

const getIp = async () => {
  const res = await fetch(
    `https://api-bdc.net/data/ip-geolocation?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("failed to fetch IP");
  }
  const data = await res.json();
  return data.ip;
};

export const getWeatherData = async (): Promise<WeatherDataType[]> => {
  const ip = await getIp();
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=7&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await res.json();

  return data.forecast.forecastday;
};

export const getWeatherLocationData =
  async (): Promise<WeatherLocationDataType> => {
    const ip = await getIp();
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=7&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    return data;
  };
