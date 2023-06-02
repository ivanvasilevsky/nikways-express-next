import { motion } from "framer-motion"


export default function Modal({ title = 'Модальное окно', modalOff, backClick = true, children}) {
  return (
    <motion.div
      transition={{ duration: .3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='modal'
    >
      {backClick ?
        <div onClick={modalOff} className="modal__back"></div>
      :
        <div className="modal__back"></div>
      }
      <motion.div
        transition={{ duration: .2 }}
        initial={{ scale: .85}}
        animate={{ scale: 1 }}
        exit={{ scale: .85 }}
        className="modal__block"
      >
        <div className="modal__head">
          <p>{title}</p>
          <button onClick={modalOff} className="btn modal__cross">
            <img src="/admin/icons/cross.svg" alt="cross"/>
          </button>
        </div>
        <div className="modal__inner">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}