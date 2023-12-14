import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function ABC() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item style={{ height: '500px' }} data-aos="fade-up">
          <img
            className="d-block w-100"
src="
https://media.istockphoto.com/id/1265437534/photo/black-friday-super-sale-realistic-black-gifts-boxes-on-dark-and-red-background-banner-poster.jpg?s=612x612&w=0&k=20&c=s9O-SOPohTShG5bEgxgdNERWTiieKFHV6wGceiDkzR0="
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the caption for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px' }}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1400254177/photo/wooden-hangers-with-sweaters-over-beige-background-with-copy-space-clothing-donations.jpg?s=612x612&w=0&k=20&c=nXmOTzoWRiiGY21GQEDQR_9HQZFfOvQ4kK3g1YZFknU="

            alt="Second slide"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the caption for the second slide.</p>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px' }}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"

            alt="Third slide"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the caption for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ABC;
