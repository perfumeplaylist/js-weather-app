import { $, routerPush } from "./utils.js";
import weatherApi from "./service/WeatherApi.ts";
import Component from "./core/Components.js";
import WeatherInfo from "./components/WeatherInfo.js";
import Header from "./components/Header.js";

export default class App extends Component {
  init() {
    this.state = {
      isPending: false,
      isError: false,
    };
  }

  template() {
    return `
    <div class='wrapper'>
      <header></header>
      <main>
        <section id=outlet class=weather></section>
      </main>
    </div>`;
  }

  async mounted() {
    const $header = $("header");
    const $weather = $(".weather");
    new Header($header);
    const weatherInfo = new WeatherInfo($weather, {
      clickEvent: () => routerPush("/weather/seoul"),
    });
    try {
      const res = await weatherApi.getCurrentWeather({
        q: "seoul",
      });
      weatherInfo.setState({
        currentTime: Math.floor(Date.now() / 1000),
        weather: [
          {
            tempInfo: {
              average: res.temp,
              max: res.temp_max,
              min: res.temp_min,
            },
            weatherInfo: {
              icon: res.weather[0].icon,
              name: res.weather[0].main,
            },
            name: res.name,
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }
}
