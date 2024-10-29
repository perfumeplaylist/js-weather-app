import Component from "../../core/Components.js";
import { $ } from "../../utils.js";

export default class Input extends Component {
  init() {
    this.state = { value: "" };
  }

  template() {
    const { props, state } = this;
    return `<input type=${props.type} placeholder=${props.placeholder} value=${state.value} />`;
  }

  addEvent() {
    const { props } = this;
    const $input = $("input");
    // input,enter
    $input.addEventListener("keydown", (event) => {
      const { key } = event;
      if (key === "Enter" && this.state.value.trim().length) {
        props.inputEvent && props.inputEvent(this.state.value);
      }
    });

    $input.addEventListener("input", (event) => {
      const {
        target: { value },
      } = event;
      this.setState({ value });
      // props.inputEvent && props.inputEvent(this.state.value);
    });
  }
}
