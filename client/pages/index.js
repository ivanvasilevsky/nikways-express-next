import FormIndex from "@/component/index/form/FormIndex"
import Intro from "@/component/index/intro/Intro"
import Neuro from "@/component/index/neuro/Neuro"
import Partner from "@/component/index/partner/Partner"
import Portfolio from "@/component/index/portfolio/Portfolio"
import Service from "@/component/index/service/Service"
import { $host } from "@/http/http"


export default function Home({ categories, portfolios, partners, services }) {


  return (
    <>
      <Intro categories={categories}/>
      <Portfolio portfolios={portfolios}/>
      <Service services={services}/>
      <FormIndex/>
      <Neuro/>
      <Partner partners={partners}/>
    </>
  )
}


export async function getServerSideProps() {

  const categories = await $host.get('/category')
  const portfolios = await $host.get('/portfolio')
  const contacts = await $host.get('/contact')
  const partners = await $host.get('/partner')
  const services = await $host.get('/services?type=1')

  return {
    props: {
      categories: categories.data,
      portfolios: portfolios.data,
      contacts: contacts.data,
      partners: partners.data,
      services: services.data,
    }
  }
}