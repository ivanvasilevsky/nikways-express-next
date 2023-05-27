import Intro from "@/component/index/intro/Intro"
import Partner from "@/component/index/partner/Partner"
import Portfolio from "@/component/index/portfolio/Portfolio"
import { $host } from "@/http/http"


export default function Home({ categories, portfolios, partners }) {


  return (
    <>
      <Intro categories={categories}/>
      <Portfolio portfolios={portfolios}/>
      <Partner partners={partners}/>
    </>
  )
}


export async function getServerSideProps() {

  const categories = await $host.get('/category')
  const portfolios = await $host.get('/portfolio')
  const contacts = await $host.get('/contact')
  const partners = await $host.get('/partner')

  return {
    props: {
      categories: categories.data,
      portfolios: portfolios.data,
      contacts: contacts.data,
      partners: partners.data,
    }
  }
}