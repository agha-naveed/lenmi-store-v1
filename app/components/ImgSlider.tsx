import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider() {

  const slides = [
    { image: 'https://www.hamzastore.pk/images/banners/62e90d4aa42f5.webp', caption: 'Slide 1' },
    { image: 'https://www.hamzastore.pk/images/banners/652d20b21c058.webp', caption: 'Slide 2' },
    { image: 'https://www.hamzastore.pk/images/banners/62e90d4aa4ffb.webp', caption: 'Slide 3' },
  ];

  return (
    <Carousel className='sm:block hidden'
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.caption} />
        </div>
      ))}
    </Carousel>
  );
};
