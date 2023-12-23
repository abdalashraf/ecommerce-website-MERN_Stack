
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const headingStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    // Remove background color
    marginTop:"8px",
    backgroundColor: 'transparent', 
  };
function ProductCard() {
let [Product,setProducts]=useState([])
let navigate=useNavigate()
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
  return (
    <Container className='disscout-container' style={{ height: '70vh' }}>
    <Row>
      <Col>
        <h2 style={headingStyle}>Our Product</h2>
      </Col>
    </Row>
    <Row className="justify-content-center">
  {Product.map((product) => (
    <Col className=' card-margin' key={product.id} xs={12} sm={6} md={4} lg={3} data-aos="zoom-in-down">
      <Card className='disscout-card' style={{ width: '18rem', height: '100%' }}>
        <Link to={`/detailsPage/${product._id}`}>
          <Card.Img  className='card-image' variant="top" 
                   src={product.file}
                   //  src="https://media.istockphoto.com/id/1319763646/photo/mature-indian-man-messaging-on-smartphone.jpg?s=612x612&w=0&k=20&c=xvTEE_Kn9DFla9LDp_TEcvSz1rrXmeDwOPP9MHKKmeM="

          style={{ height: '240px', objectFit: 'cover' }} />
        </Link>
        <Card.Body>
          <Card.Title className='productname'>Name {product.name}</Card.Title>
          <Card.Text className='productprice'>Price : {product.price}</Card.Text>
          <Button onClick={()=>handleproductID(product._id)} className='productbutton bg-danger' variant="primary">Buy Now</Button>

        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  </Container>
  );
}

export default ProductCard;
