import config from "@/config"
import { $host } from "@/http/http"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import ReactInputMask from "react-input-mask"


export default function ModalForm({info, modalOff}) {

  const [fio, setFio] = useState('')
  const [phone, setPhone] = useState('')

  const [sendCheck, setSendCheck] = useState(false)

  const [fioError, setFioError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const sendForm = async () => {

    if (fio.length == 0) {
      return setFioError(true)
    }

    if (phone.length == 0) {
      return setPhoneError(true)
    }


    const request = await $host.post('/send_mini_form', {
      fio,
      phone,
      title: info.name
    })

    if (request.data.status == 1) {
      setSendCheck(true)

      setTimeout(() => {
        setFio('')
        setPhone('')
        modalOff()
      }, 2500)
    }
  }

  const [active, setActive] = useState(false)

  const modalHide = () => {
    setActive(false)

    setTimeout(() => {
      modalOff()
    }, 400)
  }

  useEffect(() => {
    setActive(true)
  }, [])

  return (
    <div className={`modal ${active && 'active'}`}>
      <div onClick={modalHide} className="modal__back"></div>
      <div className="modal__block">
        <Image onClick={modalHide} className="modal__cross" src="/icons/cross.svg" width={30} height={30} alt="cross"/>

          <div className="modal__inner">
            <div className="modal__top">
              <Image src={config.IMAGE_URL + '/services/' + info.image} width={420} height={280} className="modal__photo" alt="photo"/>

              <div className="modal__info">
                <p className="modal__title">{info.name}</p>
                <p className="modal__text">{info.desc}</p>
              </div>
            </div>

            <div className="modal__form">
              <input className={`input ${fioError ? 'error' : ''}`} value={fio} onChange={(e) => {
                setFio(e.target.value)
                setFioError(false)
              }} type="text" placeholder="ФИО"/>
              <ReactInputMask mask='+7 999 999 9999' className={`input ${phoneError ? 'error' : ''}`} value={phone} onChange={(e) => {
                setPhone(e.target.value)
                setPhoneError(false)
              }} type="text" placeholder="ТЕЛЕФОН" />
              <button onClick={sendForm} className="btn btn-black">Оставить заявку</button>
            </div>
          </div>

          {sendCheck &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="modal__done"
            >
              <p>Ваша заявка отправлена!</p>
            </motion.div>
          }
      </div>
    </div>
  )
}