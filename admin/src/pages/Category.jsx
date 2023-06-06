import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import $host from "../http/http"
import CategoryModal from "../../components/category/CategoryModal"

export default function Category() {

  const [modal, setModal] = useState(false)
  const [modalSlug, setModalSlug] = useState()
  const [modalTitle, setModalTitle] = useState('Создать')

  const [categories, setCategories] = useState([])

  const getInfo = async () => {
    const response = await $host.get('/category_all')
    setCategories(response.data.reverse())
  }

  useEffect(() => {
    getInfo()
  }, [])



  const modalOn = (slug) => {
    if (slug) {
      setModalSlug(slug)
      setModalTitle('Изменить')
    }
    setModal(true)
  }

  const modalOff = () => {
    getInfo()
    setModal(false)
    setModalTitle('Создать')
    setModalSlug()
  }


  return (
    <>
    {modal &&
      createPortal(<CategoryModal title={modalTitle}  modalOff={modalOff} slug={modalSlug}/>, document.querySelector('#modal'))
    }

    <div className='category'>
      <div className="category__head">
        <button onClick={() => modalOn()} className="btn btn-def category__add">Добавить</button>
      </div>
      <div className="category__inner portfolio__inner">
        <div className="category__grid portfolio__grid">

          {categories.map(item => (
            <div className="category__item" key={item.id}>
              <div className="category__item__head">
                <p className="portfolio__name">{item.name}</p>
                <div className="portfolio__btn__block">
                  <button onClick={() => modalOn(item.slug)} className="btn category__item__edit">
                    <img src="/admin/icons/setting.svg" alt="setting" />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    </>
  )
}