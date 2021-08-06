import { action, decorate, observable } from "mobx";
import { persist } from 'mobx-persist'
import { isAuthenticated,authenticateSuccess, logout } from 'utils'
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
      this.setUserInfo({
        userName: '',
        avatar: '',
        roleType: 0
      })
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