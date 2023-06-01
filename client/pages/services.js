import Intro from "@/component/index/intro/Intro"
import Container from "@/component/main/Container"
import ServiceGroup from "@/component/service/ServiceGroup"
import ServiceSlide from "@/component/service/ServiceSlide"
import ServiceQuestion from "@/component/service/ServiceQuestion"
import { $host } from "@/http/http"
import Image from "next/image"
import Slider from "react-slick"

export default function services({ serviceGroupe, services }) {

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Image src='/icons/arrow_gr.svg' alt="next" width={15} height={30} priority />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Image src='/icons/arrow_gr.svg' alt="next" width={15} height={30} priority />
      </div>
    )
  }

  const settings = {
    arrow: true,
    // autoplay: true,
    infinite: false,
    autoplaySpeed: 8000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Intro/>

      <section className="service__stage">
        <div className="container">
          {serviceGroupe.map((item, i) => (
            <ServiceGroup info={item} number={i}/>
          ))}
        </div>
        <Image className="service__wave" src="/ui/service_wave.svg" width={1920} height={200} alt="wave"/>
      </section>

      <section className="service__slider">
        <h4 className="project__main__title">Особые предложения</h4>

        <Slider className="service__slide" {...settings}>
          {services.filter(item => item.type == 2).map(item => (
            <ServiceSlide info={item}/>
          ))}
        </Slider>
      </section>

      <Container className="service__question">
        <h4 className="project__main__title">Собери свою услугу</h4>
        <div className="service__question__block">
          {services.filter(item => item.type == 3).map(item => (
            <ServiceQuestion info={item}/>
          ))}
        </div>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const contacts = await $host.get('/contact')
  const serviceGroupe = await $host.get('/services_groupe')
  const services = await $host.get('/services')

  return {
    props: {
      contacts: contacts.data,
      serviceGroupe: serviceGroupe.data,
      services: services.data
    }
  }
}