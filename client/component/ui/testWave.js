import WaveSvg from "@/component/ui/WaveSvg"
import { motion } from "framer-motion"
import { useState } from "react"


export default function TestWave() {

  const [ check, setCheck ] = useState(false)

  return (
    <>
      <button onClick={() => setCheck(!check)}>click</button>
      {check &&
        <motion.div className="block"
          initial={{ translateX: 1200 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 1200 }}
          transition={{ duration: .7 }}
        >
          <WaveSvg/>
        </motion.div>
      }
    </>
  )
}
