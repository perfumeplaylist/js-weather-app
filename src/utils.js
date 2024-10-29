export const $ = (name) => document.querySelector(name);

export const routerPush = (path) => {
  const navigateEvent = new CustomEvent("navigate", { detail: { path } });
  window.dispatchEvent(navigateEvent);
};

export function convertTimestampToTime(timestamp) {
  const dateObj = new Date(timestamp * 1000);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const localString = dateObj.toLocaleString("ko-KR", options);
  return localString;
}
