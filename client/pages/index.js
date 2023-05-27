import Intro from "@/component/index/intro/Intro"
import Portfolio from "@/component/index/portfolio/Portfolio"
import { $host } from "@/http/http"


export default function Home({ categories, portfolios }) {


  return (
    <>
      <Intro categories={categories}/>
      <Portfolio portfolios={portfolios}/>
    </>
  )
}


export async function getServerSideProps() {

  const categories = await $host.get('/category')
  const portfolios = await $host.get('/portfolio')

  return {
    props: {
      categories: categories.data,
      portfolios: portfolios.data,
    }
  }
}