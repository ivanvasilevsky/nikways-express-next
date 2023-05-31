import PortfolioItem from "../index/portfolio/PortfolioItem"
import Container from "../main/Container"

export default function PortfolioGrid({ portfolios }) {

  const projects = portfolios.portfolios.portfolios

  return (
    <Container className="portfolio">
      <div className="portfolio__grid">
        {projects.map(item => (
          <PortfolioItem key={item.id} info={item} />
        ))}
      </div>
    </Container>
  )
}