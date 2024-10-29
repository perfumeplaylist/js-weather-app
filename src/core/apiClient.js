export default class apiClient {
  constructor({ url, params }) {
    this.url = url;
    this.commonParams = {
      appid: import.meta.env.VITE_API_KEY,
      ...params,
    };
  }

  async get(url, params) {
    const newParams = new URLSearchParams({ ...params, ...this.commonParams });
    try {
      const res = await fetch(`${this.url}${url}?${newParams}`);
      return res.json();
    } catch (error) {
      throw error;
    }
  }
}
