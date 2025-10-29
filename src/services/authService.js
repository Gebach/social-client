import api from '../http'

export default class AuthService {
  static async registration(email, login, password) {
    const res = api.post('/registration', { email, login, password })
    return res
  }
}
