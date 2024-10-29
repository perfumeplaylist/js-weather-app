import apiClient from "../core/apiClient.js";

const WEATHER_API = new apiClient({
  url: import.meta.env.VITE_END_POINT,
  params: {
    units: "metric",
  },
});

const weatherApi = {
  getCurrentWeather: async (params) => {
    const {
      main: { temp, temp_max, temp_min },
      weather,
      name,
    } = await WEATHER_API.get("weather", params);
    return {
      temp: Math.floor(temp),
      temp_max: Math.floor(temp_max),
      temp_min: Math.floor(temp_min),
      weather,
      name,
    };
  },
  getSeoulWeather: async (params) => {
    const { list } = await WEATHER_API.get("forecast", params);
    const filterList = list
      .map(({ dt_txt, weather, main: { temp, temp_max, temp_min } }) => ({
        date: dt_txt.split(" ")[0],
        time: dt_txt.split(" ")[1],
        weather,
        temp: Math.floor(temp),
        temp_max: Math.floor(temp_max),
        temp_min: Math.floor(temp_min),
      }))
      .reduce((cur, prev) => {
        const { date } = prev;

        if (!cur[date]) {
          cur[date] = [];
        }

        cur[date].push(prev);

        return cur;
      }, {});

    return filterList;
  },
};

export default weatherApi;
