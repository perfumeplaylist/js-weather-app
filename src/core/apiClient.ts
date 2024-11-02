type ApiClientConfig = {
  url: string;
  params: Record<string, string>;
};

export default class ApiClient {
  private url: string;
  private commonParams: ApiClientConfig["params"];

  constructor({ url, params = {} }: ApiClientConfig) {
    this.url = url;
    this.commonParams = {
      appid: import.meta.env.VITE_API_KEY as string,
      ...params,
    };
  }

  async get<T>(
    url: string,
    params: ApiClientConfig["params"] = {}
  ): Promise<T> {
    const newParams = new URLSearchParams({ ...params, ...this.commonParams });
    try {
      const res = await fetch(`${this.url}${url}?${newParams}`);
      return res.json();
    } catch (error) {
      throw error;
    }
  }
}
