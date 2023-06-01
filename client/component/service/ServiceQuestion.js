import Image from "next/image"
import PlusSvg from "../ui/PlusSvg"
import { useState } from "react"

export default function ServiceQuestion({ info }) {

  const [active, setActive] = useState(false)

  return (
    <div className={`service__question__item ${active && 'active'}`}>
      <div onClick={() => setActive(!active)} className="service__question__head">
        <span>Профессиональная съёмка видео\фильмов</span>
        <PlusSvg/>
      </div>
      <div className="service__question__bottom">
        <p className="service__question__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.

          Aenean massaLorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaLorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaLorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaLorem</p>
        <button className="btn btn__more service__slide__btn">
          <span>Оставить заявку</span>
          <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
        </button>
      </div>
    </div>
  )
}