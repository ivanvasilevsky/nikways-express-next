import Container from "@/component/main/Container"
import { $host } from "@/http/http"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import ReactInputMask from "react-input-mask"

export default function FormIndex() {

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
      title: 'Форма на главной'
    })

    if (request.data.status == 1) {
      setSendCheck(true)

      setTimeout(() => {
        setFio('')
        setPhone('')
        setSendCheck(false)
      }, 2500)
    }
  }

  return (
    <Container className="form__index">
      <h2 className="index__title form__index__title">Более мягкий текст (вместо оставь заявку)</h2>
      <div className="modal__form form__index__form">
        <input className={`input ${fioError ? 'error' : ''}`} value={fio} onChange={(e) => {
          setFio(e.target.value)
          setFioError(false)
        }} type="text" placeholder="ФИО" />
        <ReactInputMask mask='+7 999 999 9999' className={`input ${phoneError ? 'error' : ''}`} value={phone} onChange={(e) => {
          setPhone(e.target.value)
          setPhoneError(false)
        }} type="text" placeholder="ТЕЛЕФОН" />
        <button onClick={sendForm} className="btn btn-black">Оставить заявку</button>

        <AnimatePresence>
          {sendCheck &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal__done"
            >
              <p>Ваша заявка отправлена!</p>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </Container>
  )
}