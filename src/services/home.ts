import {
  AxiosRequestConfig
} from 'axios';
import { HomeAPI as API } from 'utils';

const login = async (config: AxiosRequestConfig): Promise<any> => API && API.post('/login', { ...config })

const menus = async (config: AxiosRequestConfig): Promise<any> => API && API.get('/menus', { ...config })

const home: {
  login: Function,
  menus: Function,
} = {
  login,
  menus,
}

export default home