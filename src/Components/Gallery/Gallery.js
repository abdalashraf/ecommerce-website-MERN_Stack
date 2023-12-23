import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const containerStyle = {
  backgroundColor: 'transparent',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop: '8px',
  backgroundColor: 'transparent',
  fontFamily: 'Arial, sans-serif', 
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
};

function Gallery() {
  return (
    <Container className='gallery-container' style={containerStyle}>
      {/* Heading Row */}
      <Row>
        <Col style={headingStyle}>
          <h2>Image Gallery</h2>
        </Col>
      </Row>

      {/* Gallery Rows */}
      <Row>
      <Col md={4} sm={6}  data-aos="flip-up">

          <div className="thumbnail">
            <img
            src="https://media.istockphoto.com/id/1319763646/photo/mature-indian-man-messaging-on-smartphone.jpg?s=612x612&w=0&k=20&c=xvTEE_Kn9DFla9LDp_TEcvSz1rrXmeDwOPP9MHKKmeM="
              alt="Image 1"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
        </Col>

        <Col md={4} sm={6}  data-aos="flip-up">
          <div className="thumbnail">
            <img
            src="https://media.istockphoto.com/id/1091348950/photo/close-up-of-hands-typing-on-laptop-night-work-concept.jpg?s=612x612&w=0&k=20&c=zbsP8zNPpur8dca1E_kIZ6q0uFsxxUBmlm_1LJ8OmMY="
              alt="Image 2"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
        </Col>
        <Col md={4} sm={6}  data-aos="flip-up">

          <div className="thumbnail">
            <img
            src="https://media.istockphoto.com/id/1321115829/photo/video-on-demand-tv-streaming-multimedia.jpg?s=612x612&w=0&k=20&c=bnvCaFmO7ZD8WtKAaEhyNFddGXNnQwfEIBR47iZpvXc="
              alt="Image 3"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
        </Col>

        {/* Add more images as needed */}
      </Row>
    </Container>
  );
}

export default Gallery;
