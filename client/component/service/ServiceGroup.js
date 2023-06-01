import config from "@/config"
import Image from "next/image"

export default function ServiceGroup({info, number}) {
  return (
    <div className="service__stage__item">
      <span className="service__stage__number">0{number + 1}</span>
      <div className="service__stage__info">
        <p className="service__stage__title">{info.title}</p>
        <p className="service__stage__text">{info.subtitle}</p>

        <div className="service__stage__block">
          {info.services_group_items.map(item => (
            <button className="btn service__stage__service">
              <span>{item.name}</span>
              <Image src="/icons/service_arrow.svg" width={60} height={10} alt="arrow" />
            </button>
          ))}
        </div>
      </div>
      <Image className="service__stage__photo" src={config.IMAGE_URL + `/services/` + info.image} width={570} height={750} alt="photo" />
    </div>
  )
}