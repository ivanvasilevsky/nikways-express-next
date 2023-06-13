import ModalForm from "@/component/modals/ModalForm"
import ModalNeuro from "@/component/modals/ModalNeuro"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"

export default function Neuro() {

  const [switchActive, setSwitchActive] = useState(false)
  const [modalFormActive, setModalFormActive] = useState(false)
  const [modalNeuroActive, setModalNeuroActive] = useState(false)

  const info = {
    name: 'Нейромаркетинг',
    desc: 'У нас есть возможность получить самые достоверные данные перед запуском ролика, и понять какие эмоции испытывает человек при его просмотре.',
    image: 'brain_w.jpg',
  }

  const modalFormOn = () => {
    setSwitchActive(true)
    setTimeout(() => {
      setModalFormActive(true)
    }, 400)
  }

  const modalFormOff = () => {
    setModalFormActive(false)
    setSwitchActive(false)
  }

  const modalNeuroOn = () => {
    setModalNeuroActive(true)
  }

  const modalNeuroOff = () => {
    setModalNeuroActive(false)
  }

  return (
    <>

      {modalNeuroActive && createPortal(<ModalNeuro modalOff={modalNeuroOff} />, document.querySelector('#modal'))}
      {modalFormActive && createPortal(<ModalForm info={info} modalOff={modalFormOff} />, document.querySelector('#modal'))}


      <div className="neuro">
        <Image className="neuro__wave" src="/ui/neuro_top.svg" width={1920} height={200} alt="wave" />
        <Image className="neuro__wave" src="/ui/neuro_bottom.svg" width={1920} height={200} alt="wave" />

        <div className="neuro__inner">
          <div className="neuro__title__block">
            <span className="neuro__title__back">Нейромаркетинг</span>
            <span className="neuro__title__center">Нейромаркетинг</span>
            <span className="neuro__title__back">Нейромаркетинг</span>
          </div>
          <p className="neuro__text">У нас есть возможность получить самые достоверные данные перед запуском ролика, и понять какие эмоции испытывает человек при его просмотре.<br /><br />Мы используем новейшее оборудование для считывания эмоционального состояния человека и используем эти данные в продвижении вашей рекламы</p>
        </div>
        <Image className="neuro__brain" src="/ui/brain_b.jpg" width={1540} height={1050} alt="brain2" />

        <div className="neuro__blocks">
          <div className="container">
            <div className="neuro__block__outer">
              <div className="neuro__block">
                <p className="neuro__block__title">Узнать подробнее</p>

                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn__neuro">
                  <span>О нейромаркетинге</span>
                  <Image src="/icons/arrow_gr.svg" width={6} height={10} alt="arrow" />
                </a>
                {/* <button onClick={modalNeuroOn} className="btn btn__neuro">
                  <span>О нейромаркетинге</span>
                  <Image src="/icons/arrow_gr.svg" width={6} height={10} alt="arrow" />
                </button> */}
              </div>

              <div className='neuro__block'>
                <p className="neuro__block__title">Подключить</p>
                <div onClick={modalFormOn} className={`neuro__switch ${switchActive ? 'active' : ''}`}>
                  <Image src="/icons/switch_radio.svg" width={16} height={16} alt="switch" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}