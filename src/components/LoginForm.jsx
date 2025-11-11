import { useContext, useState } from 'react'
import { Context } from '../main'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistration, setIsRegistration] = useState(false)
  const navigate = useNavigate()

  const { store } = useContext(Context)

  async function registrationHandler(email, login, password) {
    try {
      const userID = await store.registration(email, login, password)
      navigate(`/profile/${userID}`)
    } catch (error) {
      console.log(error)
    }
  }

  async function loginHandler(login, password) {
    try {
      const userID = await store.login(login, password)
      navigate(`/profile/${userID}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="max-w-2xl m-auto border-2 border-black rounded-2xl p-3 flex flex-col gap-2">
        {isRegistration ? (
          <input
            type="text"
            id="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            className="text-2xl outline-1 outline-black rounded px-2 py-1 focus:outline-2 font-sans"
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          id="login"
          placeholder="login"
          onChange={e => setLogin(e.target.value)}
          value={login}
          className="text-2xl outline-1 outline-black rounded px-2 py-1 focus:outline-2 font-sans"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          className="text-2xl outline-1 outline-black rounded px-2 py-1 focus:outline-2"
        />

        <button
          className="bg-green-600 rounded w-full py-2 cursor-pointer hover:bg-green-500 duration-500"
          onClick={() => (isRegistration ? registrationHandler(email, login, password) : loginHandler(login, password))}
        >
          {isRegistration ? 'Зарегистрироваться' : 'Войти'}
        </button>

        <p className="text-center">
          {isRegistration ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}{' '}
          <span
            className="cursor-pointer text-blue-600 hover:text-blue-900"
            onClick={() => setIsRegistration(isRegistration ? false : true)}
          >
            {isRegistration ? 'Войти' : 'Зарегистрироваться'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
