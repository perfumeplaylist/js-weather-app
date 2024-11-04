import Component from "../core/Components.js";
import { $, convertTimestampToTime } from "../utils.js";

export default class WeatherInfo extends Component {
  init() {
    this.state = {
      currentTime: Math.floor(Date.now() / 1000),
      weather: [
        {
          tempInfo: { average: null, max: null, min: null },
          weatherInfo: {
            icon: null,
            name: null,
          },
          name: null,
        },
      ],
    };
  }

  template() {
    const { state } = this;
    return `
      <ul>
      ${state.weather.map(
        ({ tempInfo, weatherInfo, name }) =>
          `<li>
            <section class="weather_header">
             <h1 class=weather_title>${name}</h1>
              <p class=weather_time>${convertTimestampToTime(state.currentTime)}</p>
            </section>
            <section class=weather_container>
              <div class="weather_container_img">
                 <img src=https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png alt=weather_icon/>
                  <p>${weatherInfo.name}</p>
              </div>
              <div>
                <div class="weather_container_temp_top">
                  <p class=weather_container_temp_title>현재</p>
                  <p class=weather_container_temp_info>${tempInfo.average}°C</p>
                </div>
                <div class="weather_container_temp_bottom">
                  <p class=weather_container_temp_title>최저/최고</p>
                  <p class=weather_container_temp_info>${tempInfo.min}°C/${tempInfo.max}°C</p>
                </div>
              </div>
            </section>
          </li>`
      )}
      </ul>
    `;
  }

  addEvent() {
    const { props } = this;
    this.$target.addEventListener("click", () => {
      props.clickEvent && props.clickEvent();
    });
  }
}
