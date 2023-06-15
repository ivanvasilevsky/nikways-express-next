import config from "@/config"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ServiceGroup({ info, number, modalOn, scroll, mainBlock }) {

  const [position, setPosition] = useState(0)

  const photo = useRef()


  useEffect(() => {
    const blockTop = photo.current.getBoundingClientRect().top
    const blockHeight = photo.current.getBoundingClientRect().height - 150
    const clientHeightCenter = window.innerHeight / 2

    const blockPosition = blockTop + blockHeight - clientHeightCenter

    const mainBlockBottom = mainBlock.current.getBoundingClientRect().bottom - clientHeightCenter - 100

    console.log(mainBlockBottom);

    if (blockPosition < 0 && mainBlockBottom > 0) {
      setPosition(blockPosition)
    }

    console.log();

  }, [scroll])

  return (
    <div className="service__stage__item">
      <span className="service__stage__number">0{number + 1}</span>
      <div className="service__stage__info">
        <p className="service__stage__title">{info.title}</p>
        <p className="service__stage__text">{info.subtitle}</p>

        <div className="service__stage__block">
          {info.services_group_items.map(item => (
            <button key={item.id} onClick={() => modalOn({ name: item.name, desc: item.text, image: info.image })} className="btn service__stage__service">
              <span>{item.name}</span>
              <Image src="/icons/service_arrow.svg" width={60} height={10} alt="arrow" />
            </button>
          ))}
        </div>
      </div>
      <Image ref={photo} className={`service__stage__photo first`} src={config.IMAGE_URL + `/services/` + info.image} width={570} height={750} alt="photo" />
      <Image style={{ translate: `0px ${position * -1}px` }} className={`service__stage__photo`} src={config.IMAGE_URL + `/services/` + info.image} width={570} height={750} alt="photo" />
    </div>
  )
}