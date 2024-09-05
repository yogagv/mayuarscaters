import React from 'react'
import gallery1 from '../../assets/images/pexels-banu-film-ads-2611460-27060278.jpg'
import gallery2 from '../../assets/images/pexels-silvia-trigo-545701-1857157.jpg'
import gallery3 from '../../assets/images/indian-cuisine-buffet-table-ai-generated_113255-53719.avif'
import gallery4 from '../../assets/images/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg'
import gallery5 from '../../assets/images/vitaliy-lyubezhanin-gfVofr15ICc-unsplash.jpg'
import gallery6 from '../../assets/images/pexels-psco-1071883.jpg'
import gallery7 from '../../assets/images/room-with-large-curtain-that-says-flowers-it_865967-1297877.jpg'
import gallery8 from '../../assets/images/pexels-meenee-7283578.jpg'
import './gallery.css'

const Gallery = () => {
  return (
    <>
    <div className="container mt-5">
        <h1 className='text-center mt-5 service'>Gallery</h1>
        <h2 className='mt-1 gallerytext'>Visit our clients events gallery </h2>
        <div className="row">
            <div className="continer mt-5">
            <div className="row">
             <div className="col-md-3 hero-image ">
              <img src={gallery1} alt="hero1" className='border-0 hero_one' />
              <img src={gallery5} alt="hero1" className='mt-4 border-0 hero_five' />
            </div>
            <div className="col-md-3 hero-image">
                <img src={gallery2} alt="hero1" className='h-25 border-0 hero_two'  />
                <img src={gallery6} alt="hero1" className='h-50 mt-4 border-0 hero_six' />
            </div>
            <div className="col-md-3 hero-image">
                <img src={gallery3} alt="hero3" className='border-0 hero_three' />
                <img src={gallery7} alt="hero3" className='mt-4 h-50 border-0 hero_seven' />
            </div>
            <div className="col-md-3 hero-image">
                <img src={gallery4} alt="hero3" className='h-25 border-0 hero_four' />
                <img src={gallery8} alt="hero3" className='h-50 mt-4 border-0 hero_eight' />
            </div>
            </div>
            </div>
          
        </div>
        </div>
    </>
  )
}

export default Gallery