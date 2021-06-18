import { createContext, useContext } from 'react'
import { create } from 'mobx-persist'
import loginStore, { LoginStore } from './login'

const hydrate = create({
  storage: localStorage,
  jsonify: true
})

interface IStore {
  loginStore: LoginStore
}
class Store implements IStore {
  public loginStore: LoginStore
  constructor() {
    this.loginStore = loginStore
    hydrate('userInfo', this.loginStore)
  }
}

export const store =  new Store()

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext(StoreContext)
}
