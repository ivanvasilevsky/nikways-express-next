import { motion } from "framer-motion"
import Image from "next/image"

export default function ModalNeuro({modalOff}) {

  return (
    <div className='modal'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={modalOff} className="modal__back"
      ></motion.div>
      <motion.div
        initial={{ scale: .4 }}
        animate={{ scale: 1 }}
        exit={{ scale: .4 }}
        className="modal__neuro__block "
      >
        <Image onClick={modalOff} className="modal__neuro__cross" src="/icons/cross_w.svg" width={30} height={30} alt="cross" />

        <h2 className="modal__neuro__title">Что такое нейромаркетинг?</h2>

        <div className="modal__neuro__galleries">
          <Image src="/photo/neuro1.jpg" width={500} height={350} alt="photo"/>
          <Image src="/photo/neuro2.jpg" width={500} height={350} alt="photo" />
          <Image src="/photo/neuro3.jpg" width={500} height={350} alt="photo" />
          <Image src="/photo/neuro4.jpg" width={500} height={350} alt="photo" />
        </div>

        <p className="modal__neuro__text">У нас есть возможность получить самые достоверные данные перед запуском ролика, и понять какие эмоции испытывает человек при его просмотре.<br/><br/> Мы используем новейшее оборудование для считывания эмоционального состояния человека и используем эти данные в продвижении вашей рекламы</p>

      </motion.div>
    </div>
  )
}