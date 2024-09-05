import React from 'react'
import Catering from '../../assets/images/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg'
import Decoration from '../../assets/images/groom-bride-s-wedding-table-decorated-with-flowers-candles.jpg'
import Photography from '../../assets/images/set-up-studio-shoot.jpg'
import Makeover from '../../assets/images/Best-10-Makeup-Artists-In-India-.png'
import Mehendi from '../../assets/images/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament.jpg'
import DJ from '../../assets/images/240_F_565324708_RYdtKOxeVUJKBuJDeqBqJ5hxxg8xXUvY.jpg'
import Invitation from '../../assets/images/18385238.jpg'
import Hall from '../../assets/images/long-hall-with-large-chandelier-top_1045911-8109.jpg'
import './services.css'
import { Card } from 'react-bootstrap'

const Services = () => {
  return (
    <>
    <h1 className='text-center mt-5 service'>Our Services</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3 cardtext">
            <Card style={{ width: '18.5rem'}}>
      <Card.Img variant="top" src={Catering} />
      <h4>Catering</h4>
    </Card>
            </div>
            <div className="col-md-3 cardtext">
            <Card style={{ width: '18.5rem'}}>
            <Card.Img variant="top" src={Decoration} />
      <h4>Decoration</h4>
      </Card>
            </div>
            <div className="col-md-3 cardtext">
            <Card style={{ width: '18.5rem'}}>
            <Card.Img variant="top" src={Photography} />
      <h4>Photography</h4>
    </Card>
            </div>
            <div className="col-md-3 cardtext">
            <Card style={{ width: '18.5rem'}}>
            <Card.Img variant="top" src={Makeover} />
      <h4>Makeover</h4>
    </Card>
            </div>
            <div className="col-md-3 mt-4 cardtext">
            <Card style={{ width: '18.5rem'}}>
      <Card.Img variant="top" src={Mehendi} />
      <h4>Mehendi</h4>
    </Card>
            </div>
            <div className="col-md-3 mt-4 cardtext">
            <Card style={{ width: '18.5rem'}}>
      <Card.Img variant="top" src={DJ} />
      <h4>DJ</h4>
    </Card>
            </div>
            <div className="col-md-3 mt-4 cardtext">
            <Card style={{ width: '18.5rem'}}>
      <Card.Img variant="top" src={Invitation} />
      <h4>Invitation Card</h4>
    </Card>
            </div>
            <div className="col-md-3 mt-4 cardtext">
            <Card style={{ width: '18.5rem'}}>
      <Card.Img variant="top" src={Hall} />
        <h4>Function Hall</h4>
    </Card>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services