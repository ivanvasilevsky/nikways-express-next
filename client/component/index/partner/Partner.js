import Container from "@/component/main/Container"
import PartnerItem from "./PartnerItem"
import {useState } from "react"
import PartnerInfo from "./PartnerInfo"

export default function Partner({partners}) {

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const [moveCheck, setMoveCheck] = useState(0)

  const [mouseMomentX, setMouseMomentX] = useState(0)
  const [mouseMomentY, setMouseMomentY] = useState(0)

  const [blockMove, setBlockMove] = useState(true)

  const [info, setInfo] = useState()


  const mouseEnter = (e) => {
    setMouseMomentX(e.pageX)
    setMouseMomentY(e.pageY)
    setMoveCheck(1)
  }

  const partnerMouseMove = (e) => {
    if (moveCheck == 1) {
      setMouseX((e.pageX - mouseMomentX) / 10)
      setMouseY((e.pageY - mouseMomentY) / 10)

      setBlockMove(false)
    }
  }

    const mouseLeave = () => {
    setMouseX(0)
    setMouseY(0)
    setMouseMomentX(0)
    setMouseMomentY(0)
    setBlockMove(true)
    setMoveCheck(0)
  }

  const setInfoOn = (info) => {
    setInfo(info)
  }

  return (
    <div className="partner">
      <div className="partner__outer"
        onMouseMove={partnerMouseMove}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <h2 className="index__title">Нам доверяют</h2>

        <div className={`partner__slide ${blockMove ? 'animate' : ''}`} style={{ translate: `${-mouseX}px ${-mouseY}px` }}>
          <div className="partner__line">
            {partners.first.map((item, i) => (
              <PartnerItem setInfoOn={setInfoOn} key={i} item={item}/>
            ))}
          </div>
          <div className="partner__line">
            {partners.second.map((item, i) => (
              <PartnerItem setInfoOn={setInfoOn} key={i + 10} item={item} />
            ))}
          </div>
        </div>
      </div>

      {info &&
        <PartnerInfo info={info}/>
      }
    </div>
  )
}