import Component from "../core/Components.js";
import { $ } from "../utils.js";
import Heading from "./common/Heading.js";

export default class WeatherInfo extends Component {
  template() {
    return `<article>
    <h1></h1>
    ${this.state !== null && `<p class=time></p>`}
    <section>
      <div>
        <img/>
        <p class=weather_state></p>
      </div>
      <div>
        <div>
        <p class=temp_title></p>
        <p class=current_temp></p>
        </div>
        <div>
          <p class=temp_title></p>
          <p class=temp_min_max></p>
        </div>
      </div>
    </section>
    </article>`;
  }

  mounted() {
    const $title = $("h1");
    const $time = $(".time");
    const $icon = $("img");
    const $state = $(".weather_state");
    const $temp_title = $(".temp_title");
    if (this.state !== null) {
      new Heading($title, { level: 2, content: this.state.name });
    }
  }
}
