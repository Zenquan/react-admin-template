import { action, decorate, observable } from "mobx";
import { persist } from 'mobx-persist'
import { isAuthenticated,authenticateSuccess,logout } from 'utils/session'

export type UserInfoType = {
  roleType: number,
  userName: string,
  avatar: string
}

export class LoginStore {
  isLogin = !!isAuthenticated()
  userInfo: UserInfoType = {
    roleType: 0,
    userName: '',
    avatar: ''
  }

  setUserInfo (userInfo: UserInfoType) {
    this.userInfo = userInfo
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  getUserInfo () {
    return this.userInfo
  }

  toggleLogin(flag: boolean,info={}) {
    if (flag) {
      authenticateSuccess(this.userInfo.userName)
      this.isLogin = true
    } else {
      logout()
      this.isLogin = false
    }

  }

}

decorate(LoginStore, {
  userInfo: [(persist('userInfo') as any), observable],
  setUserInfo: action,
  getUserInfo: action,
  isLogin: observable,
  toggleLogin: action
})

export default new LoginStore();