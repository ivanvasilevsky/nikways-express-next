import PortfolioPage from "@/component/portfolio/PortfolioPage"
import { $host } from "@/http/http"

export default function Portfolio({ portfolios, categories }) {

  return (
    <PortfolioPage portfolios={portfolios} categories={categories} />
  )
}

export async function getServerSideProps(context) {
  const contacts = await $host.get('/contact')
  const categories = await $host.get('/category_all')
  const portfolios = await $host.get(`/category/${context.resolvedUrl.split('/')[2]}`)

  return {
    props: {
      contacts: contacts.data,
      categories: categories.data,
      portfolios: portfolios.data,
    }
  }
}