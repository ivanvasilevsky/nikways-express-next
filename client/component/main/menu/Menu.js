import Image from "next/image"
import BurgerSvg from "../../ui/BurgerSvg"
import { useEffect, useState } from "react"
import WaveSvg from "../../ui/WaveSvg"
import LinkMenu from "./LinkMenu"
import CrossMenuSvg from "@/component/ui/CrossMenuSvg"
import TriggerMenuBg from "@/component/ui/TriggerMenuBg"
import Link from "next/link"
import { Router, useRouter } from "next/router"
import ModalForm from "@/component/modals/ModalForm"
import { createPortal } from "react-dom"

export default function Menu() {

  const router = useRouter()

  const [darkTheme, setDarkTheme] = useState(false)
  const [topPos, setTopPos] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  const [modalActive, setModalActive] = useState(false)
  const modalInfo = {
    image: 'biba_w.jpg',
    name: 'Оставить заявку',
    desc: 'Всегда на связи)'
  }

  const modalActiveChange = () => {
    setModalActive(!modalActive)
  }

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
    <>
      {modalActive && createPortal(<ModalForm info={modalInfo} modalOff={modalActiveChange} />, document.querySelector('#modal'))}

      <div className={`menu ${menuActive ? 'active' : ''} ${darkTheme ? 'dark' : ''} ${topPos ? 'top' : ''}`}>
        <div className="menu__back"></div>

        <div className="menu__mini">
          <div className="container">
            <div className="menu__mini__inner">
              <div className={`menu__mini__block ${router.asPath != '/' ? 'active' : ''}`}>
                {!router.asPath.includes('project') ?
                  <>
                    <Link className="menu__mini__link" href="/">На главную</Link>
                    {!router.asPath.includes('portfolio') &&
                      <Link className="menu__mini__link" href="/portfolio/all">Портфолио</Link>
                    }
                    {!router.asPath.includes('services') &&
                      <Link className="menu__mini__link" href="/services">Услуги</Link>
                    }

                    {/* <Link className="menu__mini__link" href="/form">Заявка</Link> */}
                    {/* <Link className="menu__mini__link" href="/about">О нас</Link> */}
                  </>
                  :
                  <button onClick={router.back} className="btn menu__mini__link" href="/portfolio/all">Назад</button>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="menu__main">
          {menuActive &&
            <WaveSvg />
          }
          {!menuActive &&
            <WaveSvg />
          }

          <div className="menu__main__inner">
            <LinkMenu title="Главная" link="/" />
            <LinkMenu title="Портфолио" link="/portfolio/all" />
            <LinkMenu title="Услуги" link="/services" />
            {/* <LinkMenu title="О нас" link="/about" /> */}
            {/* <LinkMenu title="Нейромаркетинг" link="/" /> */}
            {/* <LinkMenu title="Игра о нас" link="/" /> */}
            {/* <LinkMenu title="Личный кабинет" link="/" /> */}
            {/* <LinkMenu title="Оставить заявку" link="/form" /> */}

            <div className="menu__modal__btn">
              <p onClick={modalActiveChange} className="menu__main__link">Оставить заявку</p>
            </div>
          </div>
        </div>
        <div className="menu__trigger back__shadow">
          <div className="menu__trigger__inner">
            <TriggerMenuBg />
          </div>
        </div>

        <div className="menu__trigger">
          <div className="menu__trigger__inner">
            <TriggerMenuBg />
            <div onClick={() => setMenuActive(true)} className="menu__trigger__btn">
              <BurgerSvg />
            </div>
          </div>
          <div onClick={() => setMenuActive(false)} className="menu__trigger__cross">
            <CrossMenuSvg />
          </div>
        </div>

      </div>
    </>
  )
}