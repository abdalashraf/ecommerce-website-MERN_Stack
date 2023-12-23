import React from 'react'
import ABC from '../Carousel/Carousel'
import Gallery from '../Gallery/Gallery'
import DiscountProduct from '../NEWARRIVALS/NEWARRIVALS'
import ProductCard from '../ProductCard/ProductCard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
<Header></Header>
        <ABC></ABC>
        <Gallery></Gallery>
        <DiscountProduct></DiscountProduct>
        <ProductCard></ProductCard>
        <Footer></Footer>

    </div>
  )
}

export default Home