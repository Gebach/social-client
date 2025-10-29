import { makeAutoObservable } from 'mobx'
import AuthService from '../services/authService'

export default class Store {
  user = {}
  isAuth = false
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user) {
    this.user = user
  }

  setAuth(bool) {
    this.isAuth = bool
  }

  setLoading(bool) {
    this.isAuth = bool
  }

  async registration(email, login, password) {
    try {
      const response = await AuthService.registration(email, login, password)
      console.log(response)
      localStorage.setItem('token', response.data.refreshToken)
      this.setUser(response.data.user)
      this.setAuth(true)
    } catch (err) {
      console.log(err)
    }
  }
}
