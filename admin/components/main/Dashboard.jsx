import Cookies from "js-cookie"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import config from "../../config"


export default function Dashboard({ titleOn, checkLogin }) {

  const menuMass = [
    {
      name: 'Портфолио',
      seo: '/admin/'
    },
    {
      name: 'Категории',
      seo: '/admin/category'
    },
    {
      name: 'Группа услуг',
      seo: '/admin/service_group'
    },
    {
      name: 'Услуги',
      seo: '/admin/services'
    },
    {
      name: 'Партнеры',
      seo: '/admin/partners'
    },
    {
      name: 'Информация',
      seo: '/admin/info'
    },
  ]

  const location = useLocation()

  useEffect(() => {
    menuMass.forEach(item => {
      if (item.seo == location.pathname) {
        titleOn(item.name)
      }
    })
  }, [])

  const exitOn = () => {
    Cookies.remove('token')
    checkLogin()
  }


  return (
    <div className='dashboard'>

      <a target="_blank" href={`${config.SITE_URL}`}>
        <img src="/admin/icons/logo.png" alt="logo" className="dashboard__logo"/>
      </a>

      <div className="dashboard__menu">
        {menuMass.map((item, i) => (
          <Link to={item.seo} onClick={() => titleOn(item.name)} className={`dashboard__item ${location.pathname == item.seo && 'active'}`} key={i}>{item.name}</Link>
        ))}
      </div>

      <div onClick={exitOn} className='dashboard__exit'>Выход</div>
    </div>
  )
}