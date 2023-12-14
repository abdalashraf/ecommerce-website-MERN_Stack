import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
const DetailsPage = () => {
  return (
    <>
    <Header></Header>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <div className="main-img">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858753_960_720.jpg"
              alt="ProductS"
            />
            <div className="row my-3 previews">
              <div className="col-md-3">
                <img
                  className="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg"
                  alt="Sale"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg"
                  alt="Sale"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg"
                  alt="Sale"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg"
                  alt="Sale"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="main-description px-2">
            <div className="category text-bold">Category: Women</div>
            <div className="product-title text-bold my-3">
              Black dress for Women
            </div>
            <div className="price-area my-4">
              <p className="old-price mb-1">
                <del>$100</del>{" "}
                <span className="old-price-discount text-danger">(20% off)</span>
              </p>
              <p className="new-price text-bold mb-1">$80</p>
              <p className="text-secondary mb-1">
                (Additional tax may apply on checkout)
              </p>
            </div>
            <div className="buttons d-flex my-5">
              <div className="block">
                <Link to="/orderForm" className="shadow btn custom-btn ">
                Buy Now
                </Link>
              </div>
              <div className="block">
                <button className="shadow btn custom-btn">Add to cart</button>
              </div>
              <div className="block quantity">
                <input
                  type="number"
                  className="form-control"
                  id="cart_quantity"
                  defaultValue={1}
                  min={0}
                  max={5}
                  placeholder="Enter email"
                  name="cart_quantity"
                />
              </div>
            </div>
          </div>
          <div className="product-details my-4">
            <p className="details-title text-color mb-1">Product Details</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              excepturi odio recusandae aliquid ad impedit autem commodi earum
              voluptatem laboriosam?{" "}
            </p>
          </div>
          <div className="row questions bg-light p-3">
            <div className="col-md-1 icon">
              <i className="fa-brands fa-rocketchat questions-icon" />
            </div>
            <div className="col-md-11 text">
              Have a question about our products at E-Store? Feel free to contact
              our representatives via live chat or email.
            </div>
          </div>
          <div className="delivery my-4">
            <p className="font-weight-bold mb-0">
              <span>
                <i className="fa-solid fa-truck" />
              </span>{" "}
              <b>Delivery done in 3 days from date of purchase</b>{" "}
            </p>
            <p className="text-secondary">
              Order now to get this product delivery
            </p>
          </div>
          <div className="delivery-options my-4">
            <p className="font-weight-bold mb-0">
              <span>
                <i className="fa-solid fa-filter" />
              </span>{" "}
              <b>Delivery options</b>{" "}
            </p>
            <p className="text-secondary">View delivery options here</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container similar-products my-4">
      <hr />
      <p className="display-5">Similar Products</p>
      <div className="row">
        <div className="col-md-3">
          <div className="similar-product">
            <img
              className="w-100"
              src="https://source.unsplash.com/gsKdPcIyeGg"
              alt="Preview"
            />
            <p className="title">Lovely black dress</p>
            <p className="price">$100</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="similar-product">
            <img
              className="w-100"
              src="https://source.unsplash.com/sg_gRhbYXhc"
              alt="Preview"
            />
            <p className="title">Lovely Dress with patterns</p>
            <p className="price">$85</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="similar-product">
            <img
              className="w-100"
              src="https://source.unsplash.com/gJZQcirK8aw"
              alt="Preview"
            />
            <p className="title">Lovely fashion dress</p>
            <p className="price">$200</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="similar-product">
            <img
              className="w-100"
              src="https://source.unsplash.com/qbB_Z2pXLEU"
              alt="Preview"
            />
            <p className="title">Lovely red dress</p>
            <p className="price">$120</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
  
  )
}

export default DetailsPage