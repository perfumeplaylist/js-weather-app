import Component from "../../core/Components";

export default class WeatherCard extends Component {
  init() {
    this.state = [];
  }

  template() {
    const { state } = this;
    return `
      <section class="weather">
        <ul>
          ${state
            .map(
              ({ date, weatherInfo }, index) =>
                `
                <li>
                  <h1 class="weather_title">${date}</h1>
                  ${weatherInfo
                    .map(
                      ({ time, temp, temp_max, temp_min, weather }) =>
                        `
                        <section class="weather_container">
                          <h2>${new String(time).split(":").slice(0, 2).join(":")}</h2>
                          <div class="weather_container_img">
                            <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="weather_icon"/>
                            <p>${weather[0].main}</p>
                          </div>
                          <div>
                            <div class="weather_container_temp_top">
                              <p class="weather_container_temp_title">현재</p>
                              <p class="weather_container_temp_info">${temp}°C</p>
                            </div>
                            <div class="weather_container_temp_bottom">
                              <p class="weather_container_temp_title">최저/최고</p>
                              <p class="weather_container_temp_info">${temp_min}°C/${temp_max}°C</p>
                            </div>
                          </div>
                        </section>
                        `
                    )
                    .join("")}
                </li>
                ${index < state.length - 1 ? '<div class="divider"></div>' : ""}
                `
            )
            .join("")}
        </ul>
      </section>
    `;
  }
}
