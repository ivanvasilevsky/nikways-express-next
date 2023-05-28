import config from "@/config"
import Image from "next/image"

export default function ServiceItem({info, modalOn}) {
  return (
    <div className="service__index__slide">
      <div className="service__index__slide__inner">
        <Image className="service__index__slide__outer" src="/ui/service_outer.svg" width={970} height={420} alt="outer" priority />

        <div className="service__index__slide__info">
          <p className="service__index__slide__title">{info.name}</p>
          <p className="service__index__slide__text">{info.desc}</p>
        </div>

        <Image className="service__index__slide__photo" src={config.IMAGE_URL + '/services/' + info.image} width={530} height={410} alt="photo" priority/>

        <button onClick={() => modalOn(info)} className="btn service__index__slide__more">
          <span>Подробнее</span>
          <Image src="/icons/arrow_service_r.svg" width={28} height={28} alt="arrow" />
        </button>
      </div>
    </div>
  )
}