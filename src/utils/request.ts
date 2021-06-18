import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from 'axios';

export interface IAPI {
  getInstance(): AxiosInstance | null;
}

export default class API implements IAPI {
  private api: AxiosInstance | null = null;

  private created(config: AxiosRequestConfig): void {
    this.api = axios.create(config);
  }

  private handleInterceptors() {
    this.api && this.api.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, (err: AxiosError) => {
      return Promise.reject(err);
    });

    this.api && this.api.interceptors.response.use(async (res: AxiosResponse) => {
      // @todo
      const {status, data} = res
      if (status === 200) {
        return data
      }
    }, (err: AxiosError) => {
      return Promise.reject(err);
    })
  }

  constructor(config: AxiosRequestConfig) {
    this.created(config);
    this.handleInterceptors();
  }

  public getInstance(): AxiosInstance | null{
    return this.api;
  }
}

export const mainAPI = new API({
  baseURL: `//${document.domain}/app`
}).getInstance();


export const HomeAPI = new API({
  baseURL: '/api',
}).getInstance();