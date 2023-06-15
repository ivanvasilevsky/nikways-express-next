import { useEffect, useState } from "react"
import Modal from "../main/Modal"
import $host from "../../src/http/http"

export default function CategoryModal({ title, modalOff, slug }) {

  const [error, setError] = useState('')

  const [deleteVerify, setDeleteVerify] = useState(false)

  const [id, setId] = useState()
  const [name, setName] = useState('')


  const getInfo = async () => {
    const response = await $host.get(`/category/${slug}`)
    const info = response.data

    if (slug) {
      setId(info.info.id)
    }

    setName(info.info.name)
  }

  useEffect(() => {
    if (slug) {
      getInfo()
    }
  }, [])


  const eventProject = async () => {

    if (name.length == 0) {
      return setError('Заполните название!')
    } else {
      setError('')
    }

    const formData = new FormData

    if (id) {
      formData.append('id', id)
    }

    formData.append('name', name)

    let response
    if (!id) {
      response = await $host.post('/category', formData)
    } else {
      response = await $host.put('/category', formData)
    }

    if (response) {
      modalOff()
    }
  }

  const deletePortfolio = async () => {
    console.log(id);
    const response = await $host.delete(`/category/${id}`)

    console.log(response);

    if (response) {
      modalOff()
    }
  }

  return (
    <Modal title={title} modalOff={modalOff}>
      <div className="portfolio__modal__inner">

        {id &&
          <>
          {!deleteVerify ?
            <button onClick={()=>setDeleteVerify(true)} className="btn btn-def btn-warning">Удалить</button>
          :
            <button onClick={deletePortfolio} className="btn btn-def btn-warning">Подтверждаю!</button>
          }
          </>
        }

        <div className="portfolio__modal__form">
          <div className="portfolio__modal__item">
            <p className="main__input__label">Название</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="main__input" placeholder="Название"/>
          </div>
        </div>

        <p className="modal__error__text">{error}</p>

        <button onClick={eventProject} className="btn btn-def portfolio__modal__btn">{title}</button>
      </div>
    </Modal>
  )
}