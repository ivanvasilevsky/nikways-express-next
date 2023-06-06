import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import $host from "../http/http"
import ServiceGroupItem from "../../components/serviceGroup/ServiceGroupItem"
import ServiceModal from "../../components/serviceGroup/ServiceModal"

export default function ServiceGroup() {

  const [modal, setModal] = useState(false)
  const [modalSlug, setModalSlug] = useState()
  const [modalPreview, setModalPreview] = useState()
  const [modalTitle, setModalTitle] = useState('Создать')

  const [services, setServices] = useState([])

  const getInfo = async () => {
    const response = await $host.get('/services_groupe')
    setServices(response.data.reverse())
  }

  useEffect(() => {
    getInfo()
  }, [])


  const modalOn = (slug, image) => {
    setModalPreview(image)
    if (slug) {
      setModalSlug(slug)
      setModalTitle('Изменить')
    }
    setModal(true)
  }

  const modalOff = () => {
    getInfo()
    setModalPreview()
    setModal(false)
    setModalTitle('Создать')
    setModalSlug()
  }


  return (
    <>
    {modal &&
      createPortal(<ServiceModal title={modalTitle}  modalOff={modalOff} slug={modalSlug} image={modalPreview}/>, document.querySelector('#modal'))
    }

    <div className='category'>
      <div className="category__head">
        <button onClick={() => modalOn()} className="btn btn-def category__add">Добавить</button>
      </div>
      <div className="category__inner portfolio__inner">
        <div className="category__grid portfolio__grid">
          {services.map(item => (
            <ServiceGroupItem key={item.id} item={item} modalOn={modalOn} updateOn={getInfo}/>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}