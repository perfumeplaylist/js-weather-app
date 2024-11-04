export default class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.state = null;
    this.init();
    this.render();
    this.addEvent();
  }

  init() {}

  setState(newState, shouldRender = true) {
    this.state = newState;
    if (shouldRender) this.render();
  }

  template() {
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  mounted() {}

  addEvent() {}
}
