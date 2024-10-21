export default class Component {
  constructor($target, initalState) {
    // this.fakeDocument = document.createDocumentFragment();
    this.target = $target;
    this.state = initalState;
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
    this.target.innerHTML = this.template();
    this.mounted();
  }

  mounted() {}
}
