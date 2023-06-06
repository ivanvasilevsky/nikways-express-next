import config from "../../config";

export default function PartnerItem({ item, modalOn }) {
  return (
    <div className="category__item partner__item">
      <div className="category__item__head">
        <p className="portfolio__name">{item.name}</p>
        <button onClick={() => modalOn(item.id, item.logo)} className="btn category__item__edit">
          <img src="/admin/icons/setting.svg" alt="setting" />
        </button>
      </div>
      <img src={config.IMAGE_URL + '/partners/' + item.logo} alt="preview" className="partner__item__preview" />
    </div>
  )
}