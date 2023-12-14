import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useForm } from 'react-hook-form';
const OrderForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
    <Header></Header>
    <div className="container">
    <div className="py-5 text-center">
      <h2>Checkout form</h2>
      <p className="lead">
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </div>
    <div className="row">
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">-$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
        {/* <form onSubmit={handleSubmit(onSubmit)} className="card p-2">
          <div className="input-group">
            <input

              type="text"
              className="form-control"
              placeholder="Promo code"
              />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </div>
        </form> */}
      </div>
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
              {...register('firstName')}

                type="text"
                className="form-control"
               
                placeholder=""
                defaultValue=""
                required=""
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
              {...register('lastName')}

                type="text"
                className="form-control"
                
                placeholder=""
                defaultValue=""
                required=""
                />
              <div className="invalid-feedback">Valid last name is required.</div>
            </div>
          </div>
         
          <div className="mb-3">
            <label htmlFor="email">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              {...register('email')}
            
              type="email"
              className="form-control"
             
              placeholder="you@example.com"
              />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              {...register('address')}

              type="text"
              className="form-control"
             
              placeholder="1234 Main St"
              required=""
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
        
        
          <hr className="mb-4" />
        
          
          
          
          
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">© 2017-2019 Company Name</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Support</a>
        </li>
      </ul>
    </footer>
  </div>
  <Footer></Footer>
                </>
  
  )
}

export default OrderForm