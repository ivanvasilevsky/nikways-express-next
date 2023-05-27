import Link from "next/link"
import Container from "./Container"
import Image from "next/image"

export default function Header() {
  return (
    <Container className="header">
      <Link className="header__logo" href="/">
        <Image src="/icons/logo.png" width={96} height={74} alt="logo" priority />
      </Link>
      <div className="header__block">
        <div className="header__item">
          <p className="header__subtitle">Крутые как яйца</p>
          <Link href="/form" className="header__link">
            <Image src="/icons/send.svg" width={16} height={16} alt="send" priority/>
            <span>Оставить заявку</span>
          </Link>
        </div>
        <div className="header__item">
          <p className="header__subtitle">Уже работаете с нами?</p>
          <Link href="" className="header__link user">
            <Image src="/icons/user.svg" width={16} height={16} alt="send" priority />
            <span>Личный кабинет</span>
          </Link>
        </div>
      </div>
    </Container>
  )
}