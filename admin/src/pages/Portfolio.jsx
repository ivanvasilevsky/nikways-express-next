import { useEffect, useState } from "react"
import $host from "../http/http"
import config from "../../config"
import ProductModal from "../../components/portfolio/PortfolioModal"
import { createPortal } from "react-dom"

export default function Portfolio() {

  const [modal, setModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('Создать')



  const modalOn = () => {
    setModal(true)
  }

  const modalOff = () => {
    setModal(false)
    setModalTitle('Создать')
  }


  return (
    <>
    {modal &&
      createPortal(<ProductModal title={modalTitle}  modalOff={modalOff} />, document.querySelector('#modal'))
    }

    <div className='category'>
      <div className="category__head">
        <button onClick={() => modalOn()} className="btn btn-def category__add">Добавить</button>
      </div>
      <div className="category__inner product__inner">
        <div className="category__grid product__grid">

        </div>
      </div>
    </div>
    </>
  )
}