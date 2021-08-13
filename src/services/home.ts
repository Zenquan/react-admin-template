import {
  AxiosRequestConfig
} from 'axios';
import { HomeAPI as API } from 'utils';
import { getMenus, getUsers } from '../../mock/index';
const isProd = process.env.NODE_ENV === 'production';

const login = async (config: AxiosRequestConfig & {
  userName: string,
  passWord: string,
  remember: boolean
}): Promise<any> => {
  return getUsers(config.userName.trim(), config.passWord.trim(), config.remember)
  // return isProd
  //     ? getUsers(config.userName, config.passWord, config.remember)
  //     : API && API.post('/login', { ...config })
  }

const menus = async (config: AxiosRequestConfig): Promise<any> => {
  return getMenus(`${config.params.roleType}`)
  // return isProd
  //     ? getMenus(`${config.params.roleType}`)
  //     : API && API.get('/menus', { ...config })
}

const home: {
  login: Function,
  menus: Function,
} = {
  login,
  menus,
}

export default home