import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';



const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop: '10px',
  backgroundColor: 'transparent',
  fontFamily: 'Arial, sans-serif !important', 

};

function NEWARRIVALS() {
let navigate=useNavigate()
let [Product,setProducts]=useState([])
  useEffect(function () {
    axios.get("/productdata")
      .then(function (res) {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handleproductID= (productID)=>{
    navigate(`/detailsPage/${productID}`);

  }
  const lastThreeProducts = Product.slice(-3);
  return (
    <Container className='disscout-container' style={{ height: '70vh' }}>
    <Row>
      <Col style={headingStyle}>
        <h2>NEW ARRIVALS</h2>
      </Col>
    </Row>
    <Row className="justify-content-center">
      {lastThreeProducts.map((product) => (
        <Col
          className=' card-margin'
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          data-aos="zoom-in-down"
        >
          <Card
            className='disscout-card'
            style={{ width: '22rem', height: '100%' }}
          >
            <Link to={`/detailsPage/${product._id}`}>
              <Card.Img
                className='card-image'
                variant="top"
                src={product.file}
                style={{
                  width:"500px",
                  height: '340px',
                  objectFit: 'cover', // or 'contain' based on your preference
                }}
              />
            </Link>
            <Card.Body>
              <Card.Title className='productname'>
                Name {product.name}
              </Card.Title>
              <Card.Text className='productprice productprice-new'>
                <h4>

                Price :$ {product.price}
                </h4>
               
              </Card.Text>
              <Button
                onClick={() => handleproductID(product._id)}
                className='productbutton bg-danger productbutton-new'
                variant="primary"
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default NEWARRIVALS;
