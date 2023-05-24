import Image from "next/image"
import BurgerSvg from "../../ui/BurgerSvg"
import { useEffect, useState } from "react"
import WaveSvg from "../../ui/WaveSvg"
import LinkMenu from "./LinkMenu"
import CrossMenuSvg from "@/component/ui/CrossMenuSvg"
import TriggerMenuBg from "@/component/ui/TriggerMenuBg"

export default function Menu() {

  const [darkTheme, setDarkTheme] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className={`menu ${menuActive ? 'active' : ''} ${darkTheme ? 'dark' : ''}`}>
      <div className="menu__back"></div>

      <div className="menu__mini">

      </div>

      <div className="menu__main">
        {menuActive &&
          <WaveSvg/>
        }
        {!menuActive &&
          <WaveSvg />
        }

        <div className="menu__main__inner">
          <LinkMenu title="Портфолио" link="/"/>
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