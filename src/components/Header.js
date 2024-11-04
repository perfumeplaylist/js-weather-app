import Component from "../core/Components.js";
import Input from "./common/Input.js";
import Heading from "./common/Heading.js";
import Button from "./common/Button.js";
import { $, routerPush } from "../utils.js";

export default class Header extends Component {
  init() {
    this.state = { value: "" };
  }

  template() {
    return `
        <div class="header_title"></div>
        <div class="header_input"></div>
        <div class="header_button"></div>
    `;
  }

  mounted() {
    const $header = $(".header_title");
    const $input = $(".header_input");
    const $button = $(".header_button");
    new Heading($header, { level: 2, content: "Weather" });

    new Input($input, {
      placeholder: "도시 검색",
      type: "text",
      inputEvent: (value) => {
        this.setState({ value }, false);
      },
      enterEvent: () => {
        routerPush(`/weather/${this.state.value}`);
      },
    });

    new Button($button, {
      type: "button",
      content: "검색",
      buttonEvent: () => {
        routerPush(`/weather/${this.state.value}`);
      },
    });
  }
}
