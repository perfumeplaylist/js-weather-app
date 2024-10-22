import { $ } from "../utils.js";

export default class Router {
  constructor(router) {
    this.router = router;
    this.init();
  }

  init() {
    window.location.pathname === "/"
      ? (window.location.pathname = "/weather")
      : window.location.pathname;

    this.renderPage(window.location.pathname);

    window.addEventListener("navigate", (event) => {
      const {
        detail: { path },
      } = event;
      this.renderPage(path);
      history.pushState({}, "", path);
    });
  }

  push(path) {
    const navigateEvent = new CustomEvent("navigate", { detail: { path } });
    window.dispatchEvent(navigateEvent);
  }

  findRouter(path) {
    const splitPath = path.split("/").filter(Boolean);

    for (const route of this.router) {
      const splitRoute = route.path.split("/").filter(Boolean);

      if (splitPath.length !== splitRoute.length) {
        if (!splitRoute.includes(":")) continue;
      }

      let isMatch = true;
      const params = {};

      for (let i = 0; i < splitRoute.length; i++) {
        if (splitRoute[i].startsWith(":")) {
          const paramName = splitRoute[i].slice(1);
          params[paramName] = splitPath[i];
          continue;
        }

        if (splitRoute[i] !== splitPath[i]) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        return { ...route, params };
      }
    }

    return null;
  }

  renderPage(path) {
    const matchRouter = this.findRouter(path);
    if (!!matchRouter) {
      const { component, params } = matchRouter;
      const $target = $("#app");
      new component($target, params);
    }
  }
}
