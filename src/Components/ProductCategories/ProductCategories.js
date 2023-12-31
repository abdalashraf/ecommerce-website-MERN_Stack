import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link ,useNavigate, useParams} from 'react-router-dom';
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
  },
  
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
  fontFamily: 'Arial, sans-serif !important', // Change this to the desired font family
};


const ProductCategories = () => {
  
let [catProduct,setCatProduct]=useState([])
let CategoriesID =useParams()
console.log(CategoriesID.CategoriesID,"CategoriesID")
useEffect(function () {
  axios.get(`/category?anc=${CategoriesID.CategoriesID}`)
    
  .then(function (res) {

      console.log("Raw Data:", res.data); // Log raw data
      setCatProduct(res.data)
      
    })
    .catch(function (error) {
      console.log(error);
    });
}, [CategoriesID]);

let navigate=useNavigate()
const handleproductID= (productID)=>{
  navigate(`/detailsPage/${productID}`);

}
  return (
    <>
    <Header></Header>
    <Container className='disscout-container' style={{ height: '70vh' }}>
      <Row>
        <Col style={headingStyle}>
          <h2 > Product Category </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {catProduct.map((product) => (
          <Col className='card-margin' key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }} data-aos="fade-up">
             <Card className='disscout-card' style={{ width: '18rem', height: '100%' }}>

              <Link to={`/detailsPage/${product.id}`}>
              <Card.Img variant="top" src={product.file} style={{ height: '240px', objectFit: 'cover' }} />
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
    <Footer></Footer>
    </>
  )
}

export default ProductCategories