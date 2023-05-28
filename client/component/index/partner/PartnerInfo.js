import Container from "@/component/main/Container"
import config from "@/config"
import { motion } from "framer-motion"
import Image from "next/image"

export default function PartnerInfo({info}) {
  return (
    <motion.div
      initial={{ maxHeight: 0 }}
      animate={{ maxHeight: 1000 }}
    >
      <Container className="partner__info">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="partner__video"
        >
          <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${info.youtube_link}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </motion.div>

        <Image className="partner__info__logo" src={config.IMAGE_URL + '/partners/' + info.logo} width={220} height={40} alt="logo"/>
        <p className="partner__info__name">{info.full_name}</p>
        <p className="partner__info__desc">{info.desc}</p>
      </Container>
    </motion.div>
  )
}