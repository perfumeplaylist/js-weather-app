import Component from "../../core/Components.js";

export default class Heading extends Component {
  template() {
    return `<h${this.props.level}>${this.props.content}</h${this.props.level}>`;
  }
  addEvent() {
    this.$target.addEventListener("click", () => {
      this.props.clickEvent && this.props.clickEvent();
    });
  }
}
