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

    window.addEventListener("popstate", () => {
      this.renderPage(window.location.pathname);
    });

    window.addEventListener("navigate", (event) => {
      const {
        detail: { path },
      } = event;

      history.pushState({}, "", path);
      this.renderPage(path);
    });
  }

  matchPathToUrl(path, url) {
    const params = {};

    if (path === url) return { isMatched: true, params };

    const pathSegment = path.split("/");
    const urlSegment = url.split("/");

    const isMatched =
      pathSegment.length === urlSegment.length &&
      pathSegment.every((seg, i) => {
        if (seg === urlSegment[i]) return true;
        else if (seg.startsWith(":")) {
          params[seg.slice(1)] = urlSegment[i];
          return true;
        }
        return false;
      });

    return { isMatched, params };
  }

  findRouter(routes, targetURL) {
    const routeFromRoot = [];

    const findRoute = (routes, currentPath) => {
      for (const route of routes) {
        const path = (currentPath + route.path).replace("//", "/");
        const { isMatched, params } = this.matchPathToUrl(path, targetURL);

        if (isMatched) {
          return { ...route, params };
        }
        if (route.children) {
          const childRoute = findRoute(route.children, path);

          if (childRoute) {
            routeFromRoot.push({ ...route, params: {} });
            return childRoute;
          }
        }
      }
      return null;
    };

    const matchedRoute = findRoute(routes, "/");

    if (matchedRoute) routeFromRoot.unshift(matchedRoute);

    return { match: matchedRoute, routes: routeFromRoot };
  }

  renderPage(path) {
    const matchRouter = this.findRouter(this.router, path);
    if (!!matchRouter) {
      while (matchRouter.routes.length) {
        const { component, params } = matchRouter.routes.pop();
        const $target = $("#app");
        new component($target, params);
      }
    }
  }
}
