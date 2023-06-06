import Footer from "@/component/main/Footer"
import HeadBlock from "@/component/main/HeadBlock"
import Header from "@/component/main/Header"
import Menu from "@/component/main/menu/Menu"
import WaveTransSvg from "@/component/ui/WaveTransSvg"
import { AnimatePresence, motion } from "framer-motion"
import { Router, useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
  const router = useRouter()
  const pageKey = router.asPath.split('/')[1]

  const [transitionActive, setTransitionActive] = useState(false)


  const handleStart = (url) => {
    const mainPath = url.split('/')[1]

    if (mainPath != pageKey) {
      setTransitionActive(true)
    }
  }

  const handleComplete = () => setTransitionActive(false)

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    }
  }, [router])


  return (
    <>
      <HeadBlock title={children.props.title} />

      <div id="modal"></div>

      <AnimatePresence mode="wait">
        {transitionActive &&
          <motion.div
            animate={{ top: 0 }}
            exit={{ opacity: 0, transition: { duration: 1.2, delay: .7 } }}
            transition={{ duration: .6 }}
            className='transition'
          >
            <div className="transition__inner">
              {transitionActive &&
                <WaveTransSvg />
              }
              {!transitionActive &&
                <WaveTransSvg />
              }
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <div className='page'>

        <AnimatePresence mode="wait">
          <motion.div key={pageKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5, delay: .15 }}>
            <Menu />
            <Header />
            {children}
            <Footer info={children.props.contacts} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}