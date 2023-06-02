import { useState } from "react"
import $host from "../../src/http/http"
import Cookies from "js-cookie"
import { motion } from "framer-motion"

export default function Login({ checkLogin }) {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()

  const loginCheck = async () => {
    const response = await $host.post('/login', {
      login,
      password
    })

    if (response.data.status == 0) {
      return setError(response.data.message)
    }

    if (response.data.role != 'ADMIN') {
      return setError('Ваш аккаунт не является администратором!')
    }

    Cookies.set('token', response.data.token)
    window.location.reload(false)
    checkLogin()
  }


  return (
    <motion.div
      transition={{ duration: .3 }}
      initial={{ translateY: 40, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: 40, opacity: 0 }}
      className='login'
    >
      <div className="login__inner">
        <img src="/admin/icons/logo.png" alt="logo" className="login__logo" />
        <div className="login__block">
          <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" className="main__input" placeholder="Логин"/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="main__input" placeholder="Пароль" />
          <button onClick={loginCheck} className="btn btn-def login__btn">Войти</button>

          {error &&
            <p className="modal__error__text login__error">{error}</p>
          }
        </div>
      </div>
    </motion.div>
  )
}