import { useEffect, useState } from "react";
import Modal from "../main/Modal";
import $host from "../../src/http/http";
import config from "../../config";

export default function ServiceModal({title, modalOff, slug, image}) {

  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState()

  const [deleteVerify, setDeleteVerify] = useState(false)


  const getInfo = async () => {
    if (slug) {
      const response = await $host.get(`/services_groupe/${slug}`)
      const info = response.data

      setName(info.title)
      setText(info.subtitle)
    }
  }

  const eventChange = async () => {

    const formData = new FormData

    if (slug) {
      formData.append('id', slug)
    }

    formData.append('title', name)
    formData.append('subtitle', text)


    if (file) {
      formData.append('image', file)
    }

    let response
    if (!slug) {
      response = await $host.post('/services_groupe', formData)
    } else {
      response = await $host.put('/services_groupe', formData)
    }

    if (response) {
      modalOff()
    }
  }

  const deleteChange = async () => {
    const response = await $host.delete(`/services_groupe/${slug}`)

    if (response) {
      modalOff()
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

  console.log(config.IMAGE_URL + '/services/'+ image);

  return (
    <Modal title={title} modalOff={modalOff}>
      <div className="modal__service_inner">
        {slug &&
          <>
          {!deleteVerify ?
            <button onClick={()=>setDeleteVerify(true)} className="btn btn-def btn-warning">Удалить</button>
          :
            <button onClick={deleteChange} className="btn btn-def btn-warning">Подтверждаю!</button>
          }
          </>
        }

        <div className="portfolio__modal__item">
          <p className="main__input__label">Название</p>
          <input onChange={e=>setName(e.target.value)} value={name} type="text" className="main__input" placeholder="Название"/>
        </div>
        <div className="portfolio__modal__item">
          <p className="main__input__label">Текст</p>
          <textarea onChange={e=>setText(e.target.value)} value={text} type="text" className="main__input" placeholder="Текст"></textarea>
        </div>

        <div className="portfolio__modal__item">
          <p className="main__input__label">Изображение</p>
          <input onChange={e=>setFile(e.target.files[0])} type="file" className="main__input"/>

          {slug && !file &&
            <img className="service__modal__preview" src={config.IMAGE_URL + '/services/'+ image} alt="preview"/>
          }
        </div>
        <button onClick={eventChange} className="btn btn-def portfolio__modal__btn">{title}</button>
      </div>
    </Modal>
  )
}