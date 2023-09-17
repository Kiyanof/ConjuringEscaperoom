import React, { ReactNode, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3)
  const width = useSelector((state: RootState) => state.uiReducer.deviceWidth);
  const breakPoints = {
    xs: 640, sm: 768, md: 1024, lg: 1280, xl: 1440, xxl: 1536
  }

  useEffect(() => {
    if(width < breakPoints.xs) setSlidesToShow(1)
    else if(width < breakPoints.sm) setSlidesToShow(1)
    else if(width < breakPoints.md) setSlidesToShow(2)
    else if(width < breakPoints.lg) setSlidesToShow(2)
    else if(width < breakPoints.xl) setSlidesToShow(3)
    else if(width < breakPoints.xxl) setSlidesToShow(3)
    else setSlidesToShow(4)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '62px',
    arrows: false,

    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className='container-fluid p-3'>
      <Slider  {...settings}> {/* TODO: Fix It */}
          {children.map((child, index) => (
            <div key={index} className='lg:p-10 p-2 w-full'>
              {child}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
