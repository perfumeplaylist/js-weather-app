export default class Heading {
  template() {
    return `<p class=${this.props.strong} check>${this.props.content}</p>`;
  }
}
