import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Footer({info}) {

  const [infoMass, setInfoMass] = useState({
    email_one: '',
    email_two: '',
    number_one: '',
    number_two: '',
    link_insta: '',
    link_whatsapp: '',
    link_telegram: '',
    link_youtube: ''
  })

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useState(() => {
    setInfoMass(info)
  }, [])

  return (
    <div className="footer">
      <div className="footer__outer">
        <Image className="footer__top__svg" src="/ui/footer_top.svg" width={1440} height={40} alt="wave"/>
        <div className="container">
          <div className="footer__inner">

            <Image className="footer__biba" src="/icons/footer_biba.jpg" width={400} height={380} alt="biba"/>

            <div className="footer__block">
              <div onClick={scrollTop} className="footer__arrow">
                <Image src="/icons/arrow_slide_r.svg" width={55} height={55} alt="arrow"/>
              </div>

              <div className="footer__floor">
                <div className="footer__col">
                  <p className="footer__title">У вас есть вопросы?</p>
                  <p className="footer__subtitle">Напишите нам</p>
                  <a href={`mailto:${infoMass.email_one}`} className="footer__link">{infoMass.email_one}</a>
                </div>
                <div className="footer__col">
                  <p className="footer__title">Хотите работать у нас?</p>
                  <p className="footer__subtitle">Напишите нам</p>
                  <a href={`mailto:${infoMass.email_two}`} className="footer__link">{infoMass.email_two}</a>
                </div>
              </div>
              <div className="footer__floor">
                <div className="footer__col">
                  <p className="footer__title">Контактные телефоны</p>
                  <a href={`tel:${infoMass.number_one}`} className="footer__link">{infoMass.number_one}</a>
                  <a href={`tel:${infoMass.number_two}`} className="footer__link">{infoMass.number_two}</a>
                </div>
                <div className="footer__col">
                  <p className="footer__title">Наши социальные сети</p>
                  <div className="footer__social">
                    <a href={infoMass.link_insta} className="footer__social__item">
                      <Image src="/icons/insta.svg" width={38} height={38} alt="insta"/>
                    </a>
                    <a href={infoMass.link_whatsapp} className="footer__social__item">
                      <Image src="/icons/whatsapp.svg" width={38} height={38} alt="youtube" />
                    </a>
                    <a href={infoMass.link_telegram} className="footer__social__item">
                      <Image src="/icons/telegram.svg" width={38} height={38} alt="youtube" />
                    </a>
                    <a href={infoMass.link_youtube} className="footer__social__item">
                      <Image src="/icons/youtube.svg" width={38} height={38} alt="youtube" />
                    </a>
                  </div>

                  <Link className="footer__btn" href="/form">Оставить заявку</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}