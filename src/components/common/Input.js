import Component from "../../core/Components.js";
import { $ } from "../../utils.js";

export default class Input extends Component {
  template() {
    const { props } = this;
    return `<input type=${props.type} placeholder="${props.placeholder}" />`;
  }

  addEvent() {
    const { props } = this;

    this.$target.addEventListener("keyup", (event) => {
      const {
        target: { value },
        key,
      } = event;
      if (key === "Enter") {
        props.enterEvent && props.enterEvent();
        return;
      }
      props.inputEvent && props.inputEvent(value);
    });
  }
}
