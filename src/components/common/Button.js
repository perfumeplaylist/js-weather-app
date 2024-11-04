import Component from "../../core/Components.js";
import { $ } from "../../utils.js";

export default class Button extends Component {
  template() {
    const { props } = this;
    return `<button type=${props.type}>${props.content}</button>`;
  }
  addEvent() {
    const { props } = this;
    const $button = $("button");
    $button.addEventListener("click", (event) => {
      event.preventDefault();
      props.buttonEvent && props.buttonEvent();
    });
  }
}
