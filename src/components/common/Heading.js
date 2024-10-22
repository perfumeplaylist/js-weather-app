export default class Heading {
  template() {
    return `<h${this.props.level}>${this.props.content}</h${this.props.level}>`;
  }
}
