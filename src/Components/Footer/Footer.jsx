import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/mayuras catering.png'
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer_one mt-2'>
    <div className="container">
    <div className="col-md-12">
      <div className="row">
      <div className="col-md-3 tourfooter">
        <div className="logo-container">
        <img src={logo} alt="logo" className='mayuralogo mt-5'/><span><Link as={Link} to="/" className='text-decoration-none'><h3 className='logo-text text-light'>Mayuras' Events & Caters</h3> </Link></span>
        </div>
          <p className='lh-sm ms-4 footertext' style={{color:"#768BA4"}}>We believe that every event is a unique story waiting to be told. With years of experience in the industry, 
            we specialize in crafting memorable experiences that bring people together. Join us at Mayuras Events and Catering, where every celebration is crafted with passion and served with love!</p>
            <div className="social-icon ms-4">
            <span className='ms-1 social'><FaInstagram /></span> 
            <span className='ms-1 social'><CiYoutube /></span>
            <span className='social'> <TiSocialFacebook /></span>
            <span className='social'><FaXTwitter /></span>
            </div>
      </div>
      <div className="col-md-3 mt-5">
      <h5 className='text-light ms-5 mt-3'>Quicklinks</h5>
      <h6 className='mt-4 ms-5'>
      <Link to="/catering" className='text-decoration-none fw-normal' style={{color:"#768BA4"}} >Catering</Link>
      </h6>
      <h6 className='mt-3 ms-5'>
      <Link to="/decoration" className='text-decoration-none fw-normal' style={{color:"#768BA4"}}>Decoration</Link>
      </h6>
      <h6 className='mt-3 ms-5'>
      <Link to="/photography" className='text-decoration-none fw-normal' style={{color:"#768BA4"}}>Photography</Link>
      </h6>
      <h6 className='mt-3 ms-5'>
      <Link to="/makeover" className='text-decoration-none fw-normal' style={{color:"#768BA4"}}>Makeover</Link>
      </h6>
      <h6 className='mt-3 ms-5'>
      <Link to="/mehendi" className='text-decoration-none fw-normal' style={{color:"#768BA4"}}>Mehendi</Link>
      </h6>
      </div>
      <div className="col-md-3 mt-5">
      <h5 className='text-light mt-3'>Client Support</h5>
      <h6 className='mt-3'>
      <Link to="/helpcenter" className='text-decoration-none  fw-normal' style={{color:"#768BA4"}}>Help Center</Link>
      </h6>
      <h6 className='mt-3'>
      <Link to="/privacypolicy" className='text-decoration-none fw-normal mt-5' style={{color:"#768BA4"}}>Privacy Policy</Link>
      </h6>
      <h6 className='mt-3'>
      <Link to="/terms&condition" className='text-decoration-none fw-normal mt-5' style={{color:"#768BA4"}}>Terms & Condition</Link>
      </h6>
      <h6 className='mt-3'>
      <Link to="/individual&corporate_booking" className='text-decoration-none fw-normal mt-5' style={{color:"#768BA4"}}>Individual & Corporate Booking</Link>
      </h6>
      <h6 className='mt-3'>
      <Link to="/ourstories" className='text-decoration-none fw-normal mt-5' style={{color:"#768BA4"}}>Our Stories</Link>
      </h6>
      </div>
      <div className="col-md-3 mt-5">
      <h5 className='text-light ms-2 mt-3'> Contact</h5>
      <h6 className='mt-3 ms-2 text-light'> 
      <span className='fw-noraml' style={{color:"#768BA4"}}>No.70, Extended Area, Cheyyar<br/><span className=''>No.26, Ambal Nagar, Palliakranai,</span> <br /> Chennai.</span>
      </h6>
      <h6 className='mt-3 ms-2 text-light'>
      <span className='contact'><MdEmail />  </span>   
         Email: <span className='text-light fw-normal' style={{color:"#768BA4"}}>mayurascaters@outlook.com</span>
      </h6>
      <h6 className='mt-3 ms-2 text-light'>
      <span className='contact'><FaPhone />  </span>   
         Contact: <span className='text-light fw-normal' style={{color:"#768BA4"}}>+91 8668155546<br/><span className='contact_one'>+91 8072880531</span>
         <br/><span className='contact_one'>+91 8754656185</span></span>
      </h6>
      </div>
    </div>
    </div>
    </div>
    <div className="container">
    <div className="col-md-12 mt-5">
        <h6 className='text-center text-secondary fw-normal'>Copyright 2024, Design and developed by Yogananthan. All rights reserved.</h6>
    </div>
    </div>
    </div>
    </>
  )
}

export default Footer