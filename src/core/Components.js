export default class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.state = null;
    this.render();
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  template() {
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.addEvent();
  }

  mounted() {}

  addEvent() {}
}
