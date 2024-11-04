import App from "./src/App.js";
import WeatherList from "./src/components/WeatherList.js";
import Router from "./src/core/router.js";

new Router([
  {
    path: "/weather",
    component: App,
    children: [{ path: "/:city", component: WeatherList }],
  },
]);
