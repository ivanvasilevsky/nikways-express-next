import { useEffect, useState } from "react";
import Modal from "../main/Modal";
import $host from "../../src/http/http";
import config from "../../config";

export default function PartnerModal({title, modalOff, slug, image}) {

  const [name, setName] = useState('')
  const [fio, setFio] = useState('')
  const [text, setText] = useState('')
  const [youtubeLink, setYoutubeLink] = useState('')
  const [file, setFile] = useState()

  const [deleteVerify, setDeleteVerify] = useState(false)

  const getInfo = async () => {
    if (slug) {
      const response = await $host.get(`/partner/${slug}`)
      const info = response.data

      setName(info.name)
      setText(info.desc)
      setFio(info.full_name)
      setYoutubeLink(info.youtube_link)
    }
  }

  const eventChange = async () => {

    const formData = new FormData

    if (slug) {
      formData.append('id', slug)
    }

    formData.append('name', name)
    formData.append('full_name', fio)
    formData.append('desc', text)
    formData.append('youtube_link', youtubeLink)


    if (file) {
      formData.append('image', file)
    }

    let response
    if (!slug) {
      response = await $host.post('/partner', formData)
    } else {
      response = await $host.put('/partner', formData)
    }

    if (response) {
      modalOff()
    }
  }

  const deleteChange = async () => {
    const response = await $host.delete(`/partner/${slug}`)

    if (response) {
      modalOff()
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

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
          <p className="main__input__label">ФИО</p>
          <input onChange={e=>setFio(e.target.value)} value={fio} type="text" className="main__input" placeholder="ФИО"/>
        </div>
        <div className="portfolio__modal__item">
          <p className="main__input__label">Текст</p>
          <input onChange={e=>setText(e.target.value)} value={text} type="text" className="main__input" placeholder="Текст"/>
        </div>
        <div className="portfolio__modal__item">
          <p className="main__input__label">Код YouTube</p>
          <input onChange={e=>setYoutubeLink(e.target.value)} value={youtubeLink} type="text" className="main__input" placeholder="Код"/>
        </div>

        {youtubeLink &&
        <div className="partner__modal__video">
          <iframe src={`https://www.youtube.com/embed/${youtubeLink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        }

        <div className="portfolio__modal__item">
          <p className="main__input__label">Логотип</p>
          <input onChange={e=>setFile(e.target.files[0])} type="file" className="main__input"/>

          {slug && !file &&
            <img className="service__modal__preview" src={config.IMAGE_URL + '/partners/'+ image} alt="preview"/>
          }
        </div>
        <button onClick={eventChange} className="btn btn-def portfolio__modal__btn">{title}</button>
      </div>
    </Modal>
  )
}