export default class Component {
  constructor($target, params) {
    this.$target = $target;
    this.params = params;
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
    this.$target = this.template();
    this.addEvent();
  }

  addEvent() {}
}
