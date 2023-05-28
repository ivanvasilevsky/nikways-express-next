import Slider from "react-slick"
import ServiceItem from "./ServiceItem"
import Link from "next/link"
import Image from "next/image"
import { createPortal } from "react-dom"
import ModalForm from "@/component/modals/ModalForm"
import { useState } from "react"

export default function Service({services}) {

  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 8000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  }

  const [modalActive, setModalActive] = useState(false)
  const [modalInfo, setModalInfo] = useState()

  const modalOn = (info) => {
    setModalInfo(info)
    setModalActive(true)
  }

  const modalOff = () => {
    setModalActive(false)
    setModalInfo()
  }

  return (
    <>
      {modalActive && createPortal(<ModalForm key={'modal'} info={modalInfo} modalOff={modalOff}/>, document.querySelector('#modal'))}

      <section className="service__index">
        <h2 className="index__title">Услуги</h2>

        <Slider className="service__index__slider" {...settings}>
          {services.map(item => (
            <ServiceItem key={item.id} info={item} modalOn={modalOn}/>
          ))}
        </Slider>

        <Link className="btn__more" href="/services">
          <span>Смотреть все</span>
          <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
        </Link>
      </section>
    </>
  )
}