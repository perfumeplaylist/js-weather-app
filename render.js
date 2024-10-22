import App from "./src/App.js";
import WeatherInfo from "./src/components/WeatherInfo.js";
import { Router } from "./src/router.js";

new Router([
  { path: "/weather", component: App },
  { path: "/weather/:city", component: WeatherInfo },
]);
