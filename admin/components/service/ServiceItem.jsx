import config from "../../config";

export default function ServiceItem({ item, modalOn }) {

  return (
    <div className="category__item" key={item.id}>
      <div className="category__item__head">
        <p className="portfolio__name">{item.name}</p>
        <button onClick={() => modalOn(item.id, item.image)} className="btn category__item__edit">
          <img src="/admin/icons/setting.svg" alt="setting" />
        </button>
      </div>
      <img src={config.IMAGE_URL + '/services/' + item.image} alt="preview" className="service__item__preview" />
    </div>
  )
}