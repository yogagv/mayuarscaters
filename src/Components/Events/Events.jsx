import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marriage from '../../assets/images/pexels-banu-film-ads-2611460-27060269.jpg'
import Birthday from '../../assets/images/pexels-nietjuh-796606.jpg'
import Anniversary from '../../assets/images/pexels-rovenimages-com-344613-949582.jpg'
import Babyshower from '../../assets/images/pexels-paola-vasquez-1971169-3593434.jpg'
import Party from '../../assets/images/pexels-psco-1071882.jpg'
import Ceremonies from '../../assets/images/pexels-asadphoto-169196.jpg'
import Puberty from '../../assets/images/puberty.jpg'
import Betrothal from '../../assets/images/betrothal.jpg'
import Festival from '../../assets/images/festivals.jpg'
import './events.css'
import { Card } from 'react-bootstrap';

const Events = () => {

    const settings = {

        dots: true,
        arrows: true,   
        infinite: true,
        speed: 500,
        autoplayspeed: 100,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3
        

      };
  return (
    <>
     <h1 className='text-center mt-5 service'>Events</h1>
     <div className="container mt-5">
        <div className="row">
        <Slider {...settings}>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Marriage} />
            <Card.Body>
              <Card.Title className='cardtitle'>Marriage</Card.Title>
              <Card.Text className='carddesc'>
              We understand that a wedding is not just an event; it’s a momentous occasion that marks the beginning of a 
              beautiful journey together. Our goal is to craft a celebration that embodies your love story, 
              personality, and traditions, ensuring every detail is tailored to your unique style and vision.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Birthday} />
            <Card.Body>
              <Card.Title className='cardtitle'>Birthday</Card.Title>
              <Card.Text className='carddesc'>
              We specialize in creating unforgettable birthday celebrations that are filled with joy, laughter, 
              and cherished memories. Whether it’s a first birthday, a sweet sixteen, or a milestone 
              celebration, our team is dedicated to designing a unique and fun-filled experience tailored just for you.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Anniversary} />
            <Card.Body>
              <Card.Title className='cardtitle'>Anniversary</Card.Title>
              <Card.Text className='carddesc'>
              We specialize in crafting unforgettable anniversary 
              celebrations that capture the essence of your journey together. Whether it’s a first anniversary or a golden jubilee,
               we design a personalized experience that reflects your unique relationship and creates lasting memories.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Babyshower} />
            <Card.Body>
              <Card.Title className='cardtitle'>Baby Shower</Card.Title>
              <Card.Text className='carddesc'>
              Welcome the arrival of your little one with a memorable baby shower crafted by Mayuras' 
              We specialize in creating joyful and heartwarming celebrations that honor this special moment in your life. 
              our team is here to make your baby shower a unique and unforgettable experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Party} />
            <Card.Body>
              <Card.Title className='cardtitle'>Party</Card.Title>
              <Card.Text className='carddesc'>
              We transform your celebrations into extraordinary events that everyone will remember! Whether you’re planning a 
              corporate gathering, a graduation party, or any other special occasion, 
              we bring your vision to life with creativity, style, and impeccable service. 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Ceremonies} />
            <Card.Body>
              <Card.Title className='cardtitle'>Ceremonies</Card.Title>
              <Card.Text className='carddesc'>
              We specialize in creating beautiful and meaningful ceremonies that reflect your unique traditions, values, and vision. 
              Whether it's a religious or cultural event, 
              a personal milestone, or a celebration of life, we are dedicated to making every moment special, memorable, and stress-free.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Puberty} />
            <Card.Body>
              <Card.Title className='cardtitle'>Puberty</Card.Title>
              <Card.Text className='carddesc'>
              Celebrate the transition from childhood to adulthood with a beautifully organized puberty 
              ceremony by Mayuras Events and Caters. We understand the cultural significance of this rite of 
              passage and are dedicated to creating 
              a meaningful and joyous celebration.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Betrothal} />
            <Card.Body>
              <Card.Title className='cardtitle'>Betrothal</Card.Title>
              <Card.Text className='carddesc'>
              Celebrate the joyous union of two families!
              We understand that a betrothal is more than just an event, it is a meaningful prelude to a lifelong commitment. 
              Our team is dedicated to creating a memorable, elegant, and culturally significant celebration.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
        <Card className='event'>
            <Card.Img variant="top" src={Festival} />
            <Card.Body>
              <Card.Title className='cardtitle'>Festivals</Card.Title>
              <Card.Text className='carddesc'>
              Celebrate the vibrancy and joy of festivals with Mayuras Events and Caters! Whether 
              it’s a grand public festival or an intimate family gathering, we are dedicated to bringing 
              the spirit of the occasion to life with exceptional planning, 
              captivating decor, delicious food, and engaging entertainment.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        </Slider>
        </div>
     </div>
    </>
  )
}

export default Events