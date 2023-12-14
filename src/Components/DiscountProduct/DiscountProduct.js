import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'https://via.placeholder.com/100x180',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'https://via.placeholder.com/100x180',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    imageUrl: 'https://via.placeholder.com/100x180',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    imageUrl: 'https://via.placeholder.com/100x180',
  }
  ,
  {
    id: 5,
    title: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'https://via.placeholder.com/100x180',
  },
  {
    id: 6,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'https://via.placeholder.com/100x180',
  },
];

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop: '10px',
  backgroundColor: 'transparent',
  fontFamily: 'Arial, sans-serif !important', 

};

function DiscountProduct() {
  return (
    <Container className='disscout-container' style={{ height: '70vh' }}>
      <Row>
        <Col style={headingStyle}>
          <h2 >Discount Product</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
  {products.map((product) => (
    <Col className=' card-margin' key={product.id} xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
      <Card className='disscout-card' style={{ width: '18rem', height: '100%' }}>
        <Link to={`/detailsPage/${product.id}`}>
          <Card.Img  className='card-image' variant="top" src={product.imageUrl} style={{ height: '240px', objectFit: 'cover' }} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

    </Container>
  );
}

export default DiscountProduct;
