import { Carousel } from 'react-bootstrap'
import { useState } from 'react'
import Banner1 from './img/banner1.jpg'
import Banner2 from './img/banner2.jpg'
import Banner3 from './img/banner3.jpg'
import './estilos/home.css'
function Home() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <>
      <h2 className="mx-auto py-3 text-center">Bem Vindos a FullStack Eletro!!</h2>
      <Carousel className="col-9 m-auto" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={Banner1}
            alt="Banner Promocional1"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Banner Promocional"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner3}
            alt="banner Promocional"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  

export default Home;