import { $ } from "./utils.js";
import weatherApi from "./service/WeatherApi.js";
import Component from "./core/Components.js";
import WeatherInfo from "./components/WeatherInfo.js";

export default class App extends Component {
  template() {
    return `<main></main>`;
  }

  async mounted() {
    const $main = $("main");
    const weatherInfo = new WeatherInfo($main);
    try {
      const res = await weatherApi.getCurrentWeather({ q: "seoul" });
      weatherInfo.setState({ ...res });
    } catch (error) {
      // new ErrorBoundary(error);
    }
  }
}
