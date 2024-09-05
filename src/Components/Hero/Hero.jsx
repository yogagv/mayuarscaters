import React from 'react'
import sliderData from '../sliderdata.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hero.css'
const Hero = () => {

    const settings = {

        dots: false,
        arrows: true,   
        infinite: true,
        speed: 500,
        autoplayspeed: 15000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
        

      };

      const firstSlide = sliderData[0];
      const secondSlide = sliderData[1];
      const thirdSlide = sliderData[2];


  return (
    <div className='hero'>
        <div className="container">
    <Slider {...settings} className='slider'>
      <div className='col-md-12 col-sm-12'>
        <div className="row">
        <div className='col-md-6 col-sm-12 mt-5'>
        <h1 className='slideone'>{firstSlide.title}</h1>
        <p className='slidepara'>{firstSlide.desc}</p>
        <button className='mt-2 visitbutton text-bold'>Visit</button>
          </div>
          <div className='col-md-6 col-sm-12 mt-5'>
            <img src={firstSlide.cover} className='sliderimg' alt="" />
          </div>
          </div>
          </div>
          <div className='col-md-12 col-sm-12'>
        <div className="row">
        <div className='col-md-6 col-sm-12 mt-5'>
        <h1 className='slideone'>{secondSlide.title}</h1>
        <p className='slidepara'>{secondSlide.desc}</p>
        <button className='mt-2 visitbutton text-bold'>Visit</button>
          </div>
          <div className='col-md-6 col-sm-12 mt-5'>
            <img src={secondSlide.cover} className='sliderimg ms-5' alt="" />
          </div>
          </div>
          </div>
          <div className='col-md-12 col-sm-12'>
        <div className="row">
        <div className='col-md-6 col-sm-12 mt-5'>
        <h1 className='slideone'>{thirdSlide.title}</h1>
        <p className='slidepara'>{thirdSlide.desc}</p>
        <button className='mt-2 visitbutton text-bold'>Visit</button>
          </div>
          <div className='col-md-6 col-sm-12 mt-5'>
            <img src={thirdSlide.cover} className='sliderimg' alt="" />
          </div>
          </div>
          </div>
    </Slider>
    </div>
        </div>
  )
}

export default Hero