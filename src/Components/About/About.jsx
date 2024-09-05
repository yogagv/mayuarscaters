import React from 'react'
import abtimg from '../../assets/images/pexels-tae-fuller-331517-1616113.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <section id='about'>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={abtimg} alt="" className='abtimg' />
            </div>
            <div className="col-md-6 abtdata">
                <h1>About us</h1>
                <p className='text-justify'>We believe that every event is a unique story waiting to be told. With years of experience in the industry, 
                    we specialize in crafting memorable experiences that bring people together. From intimate gatherings to grand 
                    celebrations, our team is dedicated to delivering excellence in every detail.Our services are a seamless blend of 
                    creativity and professionalism. We take pride in understanding your vision and turning it into 
                    reality, whether it's a wedding, corporate event, birthday party, or any special occasion. Our talented chefs 
                    create delicious menus that cater to all tastes, while our event planners ensure a smooth, stress-free experience 
                    from start to finish.your satisfaction is our success. We go the extra mile 
                    to make sure every moment is perfect, because we know that when you trust us with your event, 
                    you're trusting us with your most cherished memories. Join us at Mayuras Events and Catering, where every celebration is crafted 
                    with passion and served with love!</p>
                    <button className='visitbutton text-bold'>Visit</button>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default About