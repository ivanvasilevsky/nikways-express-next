import Intro from "../index/intro/Intro"
import PortfolioGrid from "./PortfolioGrid"
import Filter from "./filter/Filter"

export default function PortfolioPage({ portfolios, categories }) {

  return (
    <>
      <Intro title={portfolios.info.name}/>
      <Filter categoryInfo={portfolios} categories={categories}/>
      <PortfolioGrid portfolios={portfolios}/>
    </>
  )
}