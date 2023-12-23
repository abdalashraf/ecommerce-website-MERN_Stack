import React, { useEffect, useState } from 'react'
import "./ProductTable.css"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios';
import { toast } from 'react-toastify';
const ProductTable = () => {
  let [products,setProducts]=useState([])
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
 
  const  productdelete = (productID)=>{
    axios.delete(`/product-delete?anc=${productID}`).then(function(res){
      if(res){
        toast.success("Product Deleted SuccessFully")
      }
  setProducts(products.filter(pro=>pro._id !=productID))
  console.log(res);
}).catch ( function(error){
  console.log(error);
})
  }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (

    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta httpEquiv="Content-Language" content="en" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <title>
    Analytics Dashboard - This is an example dashboard created using build-in
    elements and components.
  </title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
  />
  <meta
    name="description"
    content="This is an example dashboard created using build-in elements and components."
  />
  <meta name="msapplication-tap-highlight" content="no" />
  <link
    href="https://demo.dashboardpack.com/architectui-html-free/main.css"
    rel="stylesheet"
  />
  <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div className="app-header header-shadow">
      <div className="app-header__logo">
        {/* <div className="logo-src" /> */}
        <img className='logo-admin'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Swisslog_logo_2023_one_line.svg/2560px-Swisslog_logo_2023_one_line.svg.png'>
        
        </img>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>{" "}
      <div className="app-header__content">
        <div className="app-header-left">
          <div className="search-wrapper">
            <div className="input-holder">
              <input
                type="text"
                className="search-input"
                placeholder="Type to search"
              />
              <button className="search-icon">
                <span />
              </button>
            </div>
            <button className="close" />
          </div>
          <ul className="header-menu nav">
            <li className="nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-database"> </i>
                Statistics
              </a>
            </li>
            <li className="btn-group nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-edit" />
                Projects
              </a>
            </li>
            <li className="dropdown nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-cog" />
                Settings
              </a>
            </li>
          </ul>{" "}
        </div>
        <div className="app-header-right">
          <div className="header-btn-lg pr-0">
            <div className="widget-content p-0">
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="btn-group">
                    <a
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="p-0 btn"
                    >
                        
                      <img
                        width={42}
                        className="rounded-circle"
                        src="assets/images/avatars/1.jpg"
                        alt=""
                      />
                      <i className="fa fa-angle-down ml-2 opacity-8" />
                    </a>
                    <div
                      tabIndex={-1}
                      role="menu"
                      aria-hidden="true"
                      className="dropdown-menu dropdown-menu-right"
                    >
                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item"
                      >
                        User Account
                      </button>
                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item"
                      >
                        Settings
                      </button>
                      <h6 tabIndex={-1} className="dropdown-header">
                        Header
                      </h6>
                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item"
                      >
                        Actions
                      </button>
                      <div tabIndex={-1} className="dropdown-divider" />
                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item"
                      >
                        Dividers
                      </button>
                    </div>
                  </div>
                </div>
                <div className="widget-content-left  ml-3 header-user-info">
                  <div className="widget-heading">Alina Mclourd</div>
                  <div className="widget-subheading">VP People Manager</div>
                </div>
                <div className="widget-content-right header-user-info ml-3">
                  <button
                    type="button"
                    className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                  >
                    <i className="fa text-white fa-calendar pr-1 pl-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>{" "}
    <div className="ui-theme-settings">
      <button
        type="button"
        id="TooltipDemo"
        className="btn-open-options btn btn-warning"
      >
        <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
      </button>
      <div className="theme-settings__inner">
        <div className="scrollbar-container">
          <div className="theme-settings__options-wrapper">
            <h3 className="themeoptions-heading">Layout Options</h3>
            <div className="p-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-3">
                        <div
                          className="switch has-switch switch-container-class"
                          data-class="fixed-header"
                        >
                          <div className="switch-animate switch-on">
                            <input
                              type="checkbox"
                              defaultChecked=""
                              data-toggle="toggle"
                              data-onstyle="success"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left">
                        <div className="widget-heading">Fixed Header</div>
                        <div className="widget-subheading">
                          Makes the header top fixed, always visible!
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-3">
                        <div
                          className="switch has-switch switch-container-class"
                          data-class="fixed-sidebar"
                        >
                          <div className="switch-animate switch-on">
                            <input
                              type="checkbox"
                              defaultChecked=""
                              data-toggle="toggle"
                              data-onstyle="success"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left">
                        <div className="widget-heading">Fixed Sidebar</div>
                        <div className="widget-subheading">
                          Makes the sidebar left fixed, always visible!
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-3">
                        <div
                          className="switch has-switch switch-container-class"
                          data-class="fixed-footer"
                        >
                          <div className="switch-animate switch-off">
                            <input
                              type="checkbox"
                              data-toggle="toggle"
                              data-onstyle="success"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left">
                        <div className="widget-heading">Fixed Footer</div>
                        <div className="widget-subheading">
                          Makes the app footer bottom fixed, always visible!
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <h3 className="themeoptions-heading">
              <div>Header Options</div>
              <button
                type="button"
                className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
                data-class=""
              >
                Restore Default
              </button>
            </h3>
            <div className="p-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <h5 className="pb-2">Choose Color Scheme</h5>
                  <div className="theme-settings-swatches">
                    <div
                      className="swatch-holder bg-primary switch-header-cs-class"
                      data-class="bg-primary header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-secondary switch-header-cs-class"
                      data-class="bg-secondary header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-success switch-header-cs-class"
                      data-class="bg-success header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-info switch-header-cs-class"
                      data-class="bg-info header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-warning switch-header-cs-class"
                      data-class="bg-warning header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-danger switch-header-cs-class"
                      data-class="bg-danger header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-light switch-header-cs-class"
                      data-class="bg-light header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-dark switch-header-cs-class"
                      data-class="bg-dark header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-focus switch-header-cs-class"
                      data-class="bg-focus header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-alternate switch-header-cs-class"
                      data-class="bg-alternate header-text-light"
                    ></div>
                    <div className="divider"></div>
                    <div
                      className="swatch-holder bg-vicious-stance switch-header-cs-class"
                      data-class="bg-vicious-stance header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-midnight-bloom switch-header-cs-class"
                      data-class="bg-midnight-bloom header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-night-sky switch-header-cs-class"
                      data-class="bg-night-sky header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-slick-carbon switch-header-cs-class"
                      data-class="bg-slick-carbon header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-asteroid switch-header-cs-class"
                      data-class="bg-asteroid header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-royal switch-header-cs-class"
                      data-class="bg-royal header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-warm-flame switch-header-cs-class"
                      data-class="bg-warm-flame header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-night-fade switch-header-cs-class"
                      data-class="bg-night-fade header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-sunny-morning switch-header-cs-class"
                      data-class="bg-sunny-morning header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-tempting-azure switch-header-cs-class"
                      data-class="bg-tempting-azure header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-amy-crisp switch-header-cs-class"
                      data-class="bg-amy-crisp header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-heavy-rain switch-header-cs-class"
                      data-class="bg-heavy-rain header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-mean-fruit switch-header-cs-class"
                      data-class="bg-mean-fruit header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-malibu-beach switch-header-cs-class"
                      data-class="bg-malibu-beach header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-deep-blue switch-header-cs-class"
                      data-class="bg-deep-blue header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-ripe-malin switch-header-cs-class"
                      data-class="bg-ripe-malin header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-arielle-smile switch-header-cs-class"
                      data-class="bg-arielle-smile header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-plum-plate switch-header-cs-class"
                      data-class="bg-plum-plate header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-happy-fisher switch-header-cs-class"
                      data-class="bg-happy-fisher header-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-happy-itmeo switch-header-cs-class"
                      data-class="bg-happy-itmeo header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-mixed-hopes switch-header-cs-class"
                      data-class="bg-mixed-hopes header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-strong-bliss switch-header-cs-class"
                      data-class="bg-strong-bliss header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-grow-early switch-header-cs-class"
                      data-class="bg-grow-early header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-love-kiss switch-header-cs-class"
                      data-class="bg-love-kiss header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-premium-dark switch-header-cs-class"
                      data-class="bg-premium-dark header-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-happy-green switch-header-cs-class"
                      data-class="bg-happy-green header-text-light"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <h3 className="themeoptions-heading">
              <div>Sidebar Options</div>
              <button
                type="button"
                className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class"
                data-class=""
              >
                Restore Default
              </button>
            </h3>
            <div className="p-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <h5 className="pb-2">Choose Color Scheme</h5>
                  <div className="theme-settings-swatches">
                    <div
                      className="swatch-holder bg-primary switch-sidebar-cs-class"
                      data-class="bg-primary sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-secondary switch-sidebar-cs-class"
                      data-class="bg-secondary sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-success switch-sidebar-cs-class"
                      data-class="bg-success sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-info switch-sidebar-cs-class"
                      data-class="bg-info sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-warning switch-sidebar-cs-class"
                      data-class="bg-warning sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-danger switch-sidebar-cs-class"
                      data-class="bg-danger sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-light switch-sidebar-cs-class"
                      data-class="bg-light sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-dark switch-sidebar-cs-class"
                      data-class="bg-dark sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-focus switch-sidebar-cs-class"
                      data-class="bg-focus sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-alternate switch-sidebar-cs-class"
                      data-class="bg-alternate sidebar-text-light"
                    ></div>
                    <div className="divider"></div>
                    <div
                      className="swatch-holder bg-vicious-stance switch-sidebar-cs-class"
                      data-class="bg-vicious-stance sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class"
                      data-class="bg-midnight-bloom sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-night-sky switch-sidebar-cs-class"
                      data-class="bg-night-sky sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-slick-carbon switch-sidebar-cs-class"
                      data-class="bg-slick-carbon sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-asteroid switch-sidebar-cs-class"
                      data-class="bg-asteroid sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-royal switch-sidebar-cs-class"
                      data-class="bg-royal sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-warm-flame switch-sidebar-cs-class"
                      data-class="bg-warm-flame sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-night-fade switch-sidebar-cs-class"
                      data-class="bg-night-fade sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-sunny-morning switch-sidebar-cs-class"
                      data-class="bg-sunny-morning sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-tempting-azure switch-sidebar-cs-class"
                      data-class="bg-tempting-azure sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-amy-crisp switch-sidebar-cs-class"
                      data-class="bg-amy-crisp sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-heavy-rain switch-sidebar-cs-class"
                      data-class="bg-heavy-rain sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-mean-fruit switch-sidebar-cs-class"
                      data-class="bg-mean-fruit sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-malibu-beach switch-sidebar-cs-class"
                      data-class="bg-malibu-beach sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-deep-blue switch-sidebar-cs-class"
                      data-class="bg-deep-blue sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-ripe-malin switch-sidebar-cs-class"
                      data-class="bg-ripe-malin sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-arielle-smile switch-sidebar-cs-class"
                      data-class="bg-arielle-smile sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-plum-plate switch-sidebar-cs-class"
                      data-class="bg-plum-plate sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-happy-fisher switch-sidebar-cs-class"
                      data-class="bg-happy-fisher sidebar-text-dark"
                    ></div>
                    <div
                      className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class"
                      data-class="bg-happy-itmeo sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class"
                      data-class="bg-mixed-hopes sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-strong-bliss switch-sidebar-cs-class"
                      data-class="bg-strong-bliss sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-grow-early switch-sidebar-cs-class"
                      data-class="bg-grow-early sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-love-kiss switch-sidebar-cs-class"
                      data-class="bg-love-kiss sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-premium-dark switch-sidebar-cs-class"
                      data-class="bg-premium-dark sidebar-text-light"
                    ></div>
                    <div
                      className="swatch-holder bg-happy-green switch-sidebar-cs-class"
                      data-class="bg-happy-green sidebar-text-light"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <h3 className="themeoptions-heading">
              <div>Main Content Options</div>
              <button
                type="button"
                className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm"
              >
                Restore Default
              </button>
            </h3>
            <div className="p-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <h5 className="pb-2">Page Section Tabs</h5>
                  <div className="theme-settings-swatches">
                    <div role="group" className="mt-2 btn-group">
                      <button
                        type="button"
                        className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class"
                        data-class="body-tabs-line"
                      >
                        Line
                      </button>
                      <button
                        type="button"
                        className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class"
                        data-class="body-tabs-shadow"
                      >
                        Shadow
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    <div className="app-main">
      <div className="app-sidebar sidebar-shadow">
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6" />
              </span>
            </button>
          </span>
        </div>{" "}
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Admin Dashboard</li>

              
              <li className="app-sidebar__heading">Product Management</li>
              <li>
                
                <ul>
                  <li>
                    <Link to="/addProduct" >
                      {/* <i className="metismenu-icon" /> */}
                    Add Product
                    </Link>
                  </li>
                
                  <li>
                    <Link to="/productTable" >
                      {/* <i className="metismenu-icon" /> */}
                    Product Table </Link>
                  </li>
                
                </ul>
              </li>
            
             
            </ul>
          </div>
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              
              
              <li className="app-sidebar__heading">Order Management</li>
              <li>
                
                <ul>
                 
                
                  <li>
                    <Link to="/orderTable" >
                      {/* <i className="metismenu-icon" /> */}
                    Order Table </Link>
                  </li>
                
                </ul>
              </li>
            
             
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="app-main__outer">
        <div className="app-main__inner">
         
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-3 widget-content bg-midnight-bloom">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Total Orders</div>
                    <div className="widget-subheading">Last year expenses</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span>1896</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card mb-3 widget-content bg-arielle-smile">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Clients</div>
                    <div className="widget-subheading">
                      Total Clients Profit
                    </div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span>$ 568</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="card mb-3 widget-content bg-grow-early">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Followers</div>
                    <div className="widget-subheading">People Interested</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span>46%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
              <div className="card mb-3 widget-content bg-premium-dark">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Products Sold</div>
                    <div className="widget-subheading">Revenue streams</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-warning">
                      <span>$14M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="row">
            <div className="col-md-12">
            <>
  <div className="container">
    <section className="panel panel-default">
      
      <div className="panel-body">
      <table className="table table-style">
      <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th> Category</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
        {
          products.map(function(product,index){
            const adjustedIndex = index + 1;
            return<>
           
 <tbody>
 <tr>
   <th scope="row">{adjustedIndex}</th>
   <td>{product.name}</td>
   <td>{product.Category}</td>
   <td>{product.price}</td>
   {/* <td><AiFillDelete onClick={() => productdelete(product._id)} /> <GrUpdate /></td> */}
   <td><AiFillDelete className='deleteButton' onClick={() => productdelete(product._id)} /></td>
 </tr>
 
</tbody>
            </>  
          })
        }
 
 
</table>

      </div>
      {/* panel-body // */}
    </section>
    {/* panel// */}
  </div>{" "}
  {/* container// */}
</>

            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                          71%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-valuenow={71}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "71%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Income Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-success">
                          54%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow={54}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "54%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">
                        Expenses Target
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-warning">
                          32%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            aria-valuenow={32}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "32%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">
                        Spendings Target
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                <div className="widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left pr-2 fsize-1">
                        <div className="widget-numbers mt-0 fsize-3 text-info">
                          89%
                        </div>
                      </div>
                      <div className="widget-content-right w-100">
                        <div className="progress-bar-xs progress">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            aria-valuenow={89}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "89%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left fsize-1">
                      <div className="text-muted opacity-6">Totals Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-wrapper-footer">
          <div className="app-footer">
            <div className="app-footer__inner">
              <div className="app-footer-left">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      Footer Link 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      Footer Link 2
                    </a>
                  </li>
                </ul>
              </div>
              <div className="app-footer-right">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      Footer Link 3
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0);" className="nav-link">
                      <div className="badge badge-success mr-1 ml-0">
                        <small>NEW</small>
                      </div>
                      Footer Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  </div>
</>

  )
}

export default ProductTable