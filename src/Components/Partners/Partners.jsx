import React from 'react'
import Photography from '../../assets/images/photography.png'
import Decoration from '../../assets/images/Brochure28.png'
import Makeover from '../../assets/images/Brochure50.png'
import Mehendi from '../../assets/images/mehindi.png'
import './partners.css'

const Partners = () => {
  return (
    <>
    <h1 className='text-center mt-5 service'>Our Partners</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col md-3">
           <img src={Photography} alt="" className='' />
            </div>
            <div className="col-md-3">
                <img src={Decoration} alt="" className='' />
            </div>
            <div className="col-md-3">
                <img src={Makeover} alt="" className='' />
            </div>
            <div className="col-md-3">
                <img src={Mehendi} alt="" className='' />
            </div>
        </div>
        </div>
    </>
  )
}

export default Partners