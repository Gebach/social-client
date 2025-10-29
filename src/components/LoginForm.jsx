import { useContext, useState } from 'react'
import { Context } from '../main'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const { store } = useContext(Context)

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="max-w-2xl m-auto border-2 border-black rounded-2xl p-3 flex flex-col gap-2">
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="text-2xl outline-1 outline-black rounded px-2 py-1 focus:outline-2 font-sans"
        />
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
          onClick={() => store.registration(email, login, password)}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}

export default LoginForm
