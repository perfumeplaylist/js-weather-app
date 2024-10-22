import FetchApi from "../core/api.js";

const WEATHER_API = new FetchApi(import.meta.env.VITE_END_POINT);

const weatherApi = {
  getCurrentWeather: async (params) => {
    try {
      const {
        main: { temp, temp_max, temp_min },
        weather,
        name,
      } = await WEATHER_API.get(params);
      return { temp, temp_max, temp_min, weather, name };
    } catch (error) {
      throw error.message;
    }
  },
};

export default weatherApi;
