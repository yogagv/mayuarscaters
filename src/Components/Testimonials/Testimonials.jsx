import React from 'react'
import './testimonials.css'
const Testimonials = () => {
  return (
    <>
        <h1 className='text-center mt-5 service'>Testimonials</h1>
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-4">
            <div className="card carddata">
        <p className='testimonialtext'>Mayuras Events and Caters made our wedding day truly magical! From the stunning decor 
            to the delicious catering, every detail was perfect.  Our guests are still talking about the beautiful 
            arrangements and the fantastic food. Thank you, Mayuras, for making our special day unforgettable!</p>
                    <h4 className='rname'>- Rohit and Priya </h4>
                        <p className='rrole ms-3'>Client</p>
                        </div>
        </div>
        <div className="col-md-4">
        <div className="card carddata">
        <p className='testimonialtext'>We chose Mayuras Events and Caters for our daughter’s birthday party, 
            and it was the best decision we made. The planning team was so creative and attentive to detail. 
            They created a fun, vibrant atmosphere that the kids absolutely loved!  Highly recommend their services for any event</p>
                    <h4 className='rname'>- Ananya and Karthik </h4>
                        <p className='rrole ms-3'>Client</p>
                        </div>
        </div>
        <div className="col-md-4">
        <div className="card carddata">
        <p className='testimonialtext'>I hired Mayuras Events and Caters for a corporate event, and their service was outstanding. 
            The team was highly organized and handled everything with professionalism. They customized the menu to suit our guests' 
           Our clients and colleagues were thoroughly impressed.</p>
                    <h4 className='rname'>- Rajiv Menon </h4>
                        <p className='rrole ms-3'>CEO, Tech Innovators Inc.</p>
                        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Testimonials