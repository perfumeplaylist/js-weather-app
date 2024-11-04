import Component from "../core/Components";
import weatherApi from "../service/WeatherApi";
import { $ } from "../utils";
import Header from "./Header";
import WeatherCard from "./weather/WeatherCard";

export default class WeatherList extends Component {
  template() {
    const { state } = this;
    return `
    <div class='wrapper'>
      <header></header>
      <main id=outlet>
      </main>
    </div>
    `;
  }

  async mounted() {
    const $header = $("header");
    const $list = $("main");
    new Header($header);
    const weatherCard = new WeatherCard($list);
    try {
      const cityWeather = await weatherApi.getSeoulWeather({
        q: window.location.pathname.split("/")[2],
      });
      const filterWeather = Object.entries(cityWeather).map((value) => ({
        date: value[0],
        weatherInfo: [...value[1]],
      }));
      weatherCard.setState(filterWeather);
    } catch (error) {
      alert(error.message);
    }
  }
}
