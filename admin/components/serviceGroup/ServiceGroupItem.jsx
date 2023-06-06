import $host from "../../src/http/http"
import ServiceGroupSubItem from "./ServiceGroupSubItem"

export default function ServiceGroupItem({ item, modalOn, updateOn }) {

  const createSubItem = async () => {
    const response = await $host.post('/services_item', {
      name: '',
      text: '',
      servicesGroupId: item.id
    })

    if (response) {
      updateOn()
    }
  }

  return (
    <div className="category__item" key={item.id}>
      <div className="category__item__head">
        <p className="portfolio__name">{item.title}</p>

        <div className="portfolio__btn__block">
          <button onClick={() => modalOn(item.id, item.image)} className="btn category__item__edit">
            <img src="/admin/icons/setting.svg" alt="setting" />
          </button>
        </div>
      </div>
      <div className="category__item__block">
        {item.services_group_items.map(subItem => (
          <ServiceGroupSubItem key={subItem.id} subItem={subItem} updateOn={updateOn}/>
        ))}

        <button onClick={createSubItem} className="btn btn-def btn__service__add">Добавить</button>
      </div>
    </div>
  )
}