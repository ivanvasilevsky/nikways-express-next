import Image from "next/image"
import PlusSvg from "../ui/PlusSvg"
import { useState } from "react"

export default function ServiceQuestion({ info, modalOn }) {

  const [active, setActive] = useState(false)

  return (
    <div className={`service__question__item ${active && 'active'}`}>
      <div onClick={() => setActive(!active)} className="service__question__head">
        <span>{info.name}</span>
        <PlusSvg/>
      </div>
      <div className="service__question__bottom">
        <p className="service__question__text">{info.desc}</p>
        <button onClick={() => modalOn(info)} className="btn btn__more service__slide__btn">
          <span>Оставить заявку</span>
          <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
        </button>
      </div>
    </div>
  )
}