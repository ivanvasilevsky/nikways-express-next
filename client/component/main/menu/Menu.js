import Image from "next/image"
import BurgerSvg from "../../ui/BurgerSvg"
import { useEffect, useState } from "react"
import WaveSvg from "../../ui/WaveSvg"
import LinkMenu from "./LinkMenu"
import CrossMenuSvg from "@/component/ui/CrossMenuSvg"
import TriggerMenuBg from "@/component/ui/TriggerMenuBg"
import Link from "next/link"
import { Router, useRouter } from "next/router"

export default function Menu() {

  const router = useRouter()

  const [darkTheme, setDarkTheme] = useState(false)
  const [topPos, setTopPos] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])


  const handleScroll = () => {
    if (window.scrollY > 340) {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }

    if (window.scrollY > 540) {
      setTopPos(true)
    } else {
      setTopPos(false)
    }
  }


  Router.events.on('routeChangeComplete', () => {
    setMenuActive(false)
  })

  return (
    <div className={`menu ${menuActive ? 'active' : ''} ${darkTheme ? 'dark' : ''} ${topPos ? 'top' : ''}`}>
      <div className="menu__back"></div>

      <div className="menu__mini">
        <div className="container">
          <div className="menu__mini__inner">
            <div className={`menu__mini__block ${router.asPath != '/' ? 'active' : ''}`}>
              <Link className="menu__mini__link" href="/">На главную</Link>
              <Link className="menu__mini__link" href="/">Портфолио</Link>
              <Link className="menu__mini__link" href="/">Заявка</Link>
              <Link className="menu__mini__link" href="/">О нас</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="menu__main">
        {menuActive &&
          <WaveSvg/>
        }
        {!menuActive &&
          <WaveSvg />
        }

        <div className="menu__main__inner">
          <LinkMenu title="Портфолио" link="/test"/>
          <LinkMenu title="Услуга" link="/" />
          <LinkMenu title="О нас" link="/" />
          <LinkMenu title="Нейромаркетинг" link="/" />
          <LinkMenu title="Игра о нас" link="/" />
          <LinkMenu title="Личный кабинет" link="/" />
          <LinkMenu title="Оставить заявку" link="/" />
        </div>
      </div>

      <div className="menu__trigger">
        <div className="menu__trigger__inner">
          <TriggerMenuBg/>
          <div onClick={() => setMenuActive(true)} className="menu__trigger__btn">
            <BurgerSvg/>
          </div>
        </div>
        <div onClick={() => setMenuActive(false)} className="menu__trigger__cross">
          <CrossMenuSvg />
        </div>
      </div>
    </div>
  )
}