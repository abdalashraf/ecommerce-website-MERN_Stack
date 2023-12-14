import React from 'react'
import "./AdminSideBar.css"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const AdminSideBar = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (

    <>
  
 
 
  <meta name="msapplication-tap-highlight" content="no" />
  <link
    href="https://demo.dashboardpack.com/architectui-html-free/main.css"
    rel="stylesheet"
  />
  <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
   
    
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
              <li className="app-sidebar__heading">Dashboards</li>
              <li>
                <a href="index.html" className="mm-active">
                  <i className="metismenu-icon pe-7s-rocket" />
                  Dashboard Example 1
                </a>
              </li>
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
 {/* addcode */}

            </div>
          </div>
        
        </div>
        
      </div>
    </div>
  </div>
</>

  )
}

export default AdminSideBar