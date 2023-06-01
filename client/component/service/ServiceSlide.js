import config from "@/config"
import Image from "next/image"

export default function ServiceSlide({ info }) {
  return (
    <div className="service__slide__outer">
      <div className="service__slide__inner">
        <div className="service__slide__info">
          <p className="service__slide__title">Ролик за 40 000</p>
          <p className="service__slide__text">Закажите не менее 15 роликов формата Reels за 600 000 или же за 40 000 за ролик</p>

          <div className="service__slide__bottom">
            <button className="btn btn__more service__slide__btn">
              <span>Оставить заявку</span>
              <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
            </button>

            <a target='_blank' className="btn__more service__slide__btn" href="/">
              <span>Посмотреть КП</span>
              <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
            </a>
          </div>
        </div>

        <Image className="service__slide__photo" src={config.IMAGE_URL + '/services/' + info.image} width={500} height={500} alt="photo" priority />
      </div>
    </div>
  )
}