import Image from "next/image"
import BurgerSvg from "../../ui/BurgerSvg"
import { useState } from "react"
import WaveSvg from "../../ui/WaveSvg"
import LinkMenu from "./LinkMenu"
import CrossMenuSvg from "@/component/ui/CrossMenuSvg"

export default function Menu() {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className={`menu ${menuActive ? 'active' : ''}`}>
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
          <Image className="menu__trigger__bg" src="/ui/menu_trigger.svg" width={55} height={500} priority alt="trigger"/>
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