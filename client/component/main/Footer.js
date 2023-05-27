import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

export default function Footer({info}) {
  return (
    <div className="footer">
      <div className="footer__outer">
        <Image className="footer__top__svg" src="/ui/footer_top.svg" width={1440} height={40} alt="wave"/>
        <div className="container">
          <div className="footer__inner">

            <Image className="footer__biba" src="/icons/footer_biba.jpg" width={400} height={380} alt="biba"/>

            <div className="footer__block">
              <div className="footer__arrow">
                <Image src="/icons/arrow_slide_r.svg" width={55} height={55} alt="arrow"/>
              </div>

              <div className="footer__floor">
                <div className="footer__col">
                  <p className="footer__title">У вас есть вопросы?</p>
                  <p className="footer__subtitle">Напишите нам</p>
                  <a href="mailto:info@nikways.net" className="footer__link">info@nikways.net</a>
                </div>
                <div className="footer__col">
                  <p className="footer__title">Хотите работать у нас?</p>
                  <p className="footer__subtitle">Напишите нам</p>
                  <a href="mailto:pridatko@nikways.net" className="footer__link">pridatko@nikways.net</a>
                </div>
              </div>
              <div className="footer__floor">
                <div className="footer__col">
                  <p className="footer__title">Контактные телефоны</p>
                  <a href="tel:87712085150" className="footer__link">8-771-208-51-50</a>
                  <a href="tel:87712085150" className="footer__link">8-771-208-51-50</a>
                </div>
                <div className="footer__col">
                  <p className="footer__title">Наши социальные сети</p>
                  <div className="footer__social">
                    <a href="" className="footer__social__item">
                      <Image src="/icons/insta.svg" width={38} height={38} alt="insta"/>
                    </a>
                    <a href="" className="footer__social__item">
                      <Image src="/icons/whatsapp.svg" width={38} height={38} alt="youtube" />
                    </a>
                    <a href="" className="footer__social__item">
                      <Image src="/icons/telegram.svg" width={38} height={38} alt="youtube" />
                    </a>
                    <a href="" className="footer__social__item">
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