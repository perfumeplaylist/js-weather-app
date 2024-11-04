import apiClient from "../core/apiClient.js";
import type { CurrentResponse, ForecastResponse } from "./type";
type Params = Record<string, string>;

const WEATHER_API = new apiClient({
  url: import.meta.env.VITE_END_POINT,
  params: {
    units: "metric",
  },
});

const weatherApi = {
  getCurrentWeather: async (params: Params) => {
    const {
      main: { temp, temp_max, temp_min },
      weather,
      name,
    } = await WEATHER_API.get<CurrentResponse>("weather", params);

    return {
      temp: Math.floor(temp),
      temp_max: Math.floor(temp_max),
      temp_min: Math.floor(temp_min),
      weather,
      name,
    };
  },
  getSeoulWeather: async (params: Params) => {
    const { list } = await WEATHER_API.get<ForecastResponse>(
      "forecast",
      params
    );

    const filterList = list.map(
      ({ dt_txt, weather, main: { temp, temp_max, temp_min } }) => ({
        date: dt_txt.split(" ")[0],
        time: dt_txt.split(" ")[1],
        weather,
        temp: Math.floor(temp),
        temp_max: Math.floor(temp_max),
        temp_min: Math.floor(temp_min),
      })
    );

    const reduceList = filterList.reduce<{
      [data: string]: typeof filterList;
    }>((cur, prev) => {
      const { date } = prev;

      if (!cur[date]) {
        cur[date] = [];
      }

      cur[date].push(prev);

      return cur;
    }, {});

    return reduceList;
  },
};

export default weatherApi;
