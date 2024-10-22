export default class FetchApi {
  constructor(url) {
    this.url = url;
    this.commonParams = {
      appid: import.meta.env.VITE_API_KEY,
      units: "metric",
    };
  }

  async get(params) {
    const newParams = new URLSearchParams({ ...params, ...this.commonParams });
    const res = await fetch(`${this.url}${new URLSearchParams(newParams)}`);
    return res.json();
  }
}
