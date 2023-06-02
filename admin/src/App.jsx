import { useEffect, useState } from "react"
import Login from "../components/main/Login"
import Page from "../components/main/Page"
import Cookies from "js-cookie"
import { jwtVerify } from 'jose'

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const secretKey = new TextEncoder().encode('DXt@l7dm$2eQ#v4Ttju7e*G')

  const tokenVerify = async () => {
    const token = Cookies.get('token')

    if (token) {
      const tokenCheck = await jwtVerify(token, secretKey)

      if (tokenCheck) {
        setIsLogin(true)
      }
    } else {
      setIsLogin(false)
    }
  }

  useEffect(() => {
    tokenVerify()
  }, [])

  return (
    <div className="page">
      {!isLogin ?
        <Login checkLogin={tokenVerify} />
      :
        <Page checkLogin={tokenVerify}/>
      }
    </div>
  )
}

export default App