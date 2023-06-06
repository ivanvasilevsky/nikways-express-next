import { useEffect, useState } from "react"
import $host from "../../src/http/http"

export default function ServiceGroupSubItem({ subItem, updateOn }) {

  const [title, setTitle] = useState(subItem.name)
  const [text, setText] = useState(subItem.text)
  const [deleteVerify, setDeleteVerify] = useState(false)

  const deleteClick = () => {
    setDeleteVerify(true)
    setTimeout(() => {
      setDeleteVerify(false)
    }, 1500)
  }

   const saveChange = async () => {
    const response = await $host.put('/services_item', {
      id: subItem.id,
      name: title,
      text
    })

    if (response) {
      updateOn()
    }
  }

  const deleteItem = async () => {
    const response = await $host.delete(`/services_item/${subItem.id}`)

    if (response) {
      updateOn()
    }
  }


  return (
    <div className="category__subitem">
      <div className="category__subitem__head">
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="portfolio__name input-hide" placeholder="Название"/>

        {title != subItem.name || text != subItem.text ?
          <button onClick={saveChange} className="btn category__item__edit">
            <img src="/admin/icons/check.svg" alt="check" />
          </button>
          :
          <></>
        }
        {!deleteVerify ?
          <button onClick={deleteClick} className="btn category__item__edit">
            <img src="/admin/icons/remove.svg" alt="remove" />
          </button>
        :
          <button onClick={deleteItem} className="btn category__item__edit">
            <img src="/admin/icons/removeWarning.svg" alt="remove" />
          </button>
        }
      </div>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="category__subitem__text" placeholder="Текст услуги"></textarea>
    </div>
  )
}