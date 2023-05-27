import config from "@/config"
import Image from "next/image"

export default function PartnerItem({ item, setInfoOn }) {

  return (
    <div onClick={() => setInfoOn(item)} className="partner__item">
      <Image src={`${config.IMAGE_URL}/partners/${item.logo}`} width={200} height={60} alt="logo"/>
    </div>
  )
}