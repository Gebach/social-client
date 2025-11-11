import { makeAutoObservable } from 'mobx'
import AuthService from '../services/authService'

export default class Store {
  _user = {}
  _isAuth = false
  _isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  _setUser(user) {
    this._user = user
  }

  _setAuth(bool) {
    this._isAuth = bool
  }

  _setLoading(bool) {
    this._isLoading = bool
  }

  saveUserData(userData) {
    localStorage.setItem('token', userData.refreshToken)
    this._setUser(userData.user)(userData.user)(this._user)
    this._setAuth(true)
  }

  getUser() {
    if (localStorage.getItem('token')) {
      return this._user
    }
  }

  async registration(email, login, password) {
    try {
      const res = await AuthService.registration(email, login, password)
      console.log(res)
      this.saveUserData()(res.data.user.id)
      return res.data.user.id
    } catch (err) {
      console.log(err)
    }
  }

  async login(login, password) {
    try {
      const res = await AuthService.login(login, password)
      console.log(res)

      this.saveUserData(res.data)(res.data)(this._user)(res.data.user.id)

      return res.data.user.id
    } catch (err) {
      console.log(err)
    }
  }
}
