import Slider from "react-slick"
import Container from "../../main/Container"
import Image from "next/image";
import Link from "next/link";

const Intro = ({categories}) => {


  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Image src='/icons/arrow_slide_r.svg' alt="next" width={15} height={30} priority />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Image src='/icons/arrow_slide_l.svg' alt="next" width={15} height={30} priority />
      </div>
    )
  }

  const settings = {
    arrow: true,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 8000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }



  return (
    <Container className='intro'>

      <div className="intro__source">
        <Image src='/photo/intro_bg.jpg' width={430} height={470} alt="bg" priority />
      </div>

      <div className="intro__block">
        <p className="intro__subtitle">
          <span>Только посмотрите какие мы делаем</span>
          <Image src="/icons/arrow_r.svg" width={80} height={10} alt="arrow"/>
        </p>
      </div>

      <div className="intro__slider__outer">
        <Slider className="intro__slider" {...settings}>
          {categories.map(item => (
            <Link className="intro__slider__item" key={item.id} href={item.slug}>{item.name}</Link>
          ))}
        </Slider>
      </div>

      <Image className="intro__bottom" src='/ui/intro_bottom.svg' width={1920} height={96} alt="bottom" priority/>
    </Container>
  )
}

export default Intro