import Component from "../../core/Components.js";

export default class Heading extends Component {
  template() {
    return `<p class=${this.props.strong} check>${this.props.content}</p>`;
  }
}
