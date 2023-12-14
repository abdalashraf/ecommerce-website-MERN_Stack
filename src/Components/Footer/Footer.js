import React from 'react'

const Footer = () => {
  return (
<footer className="footer-section">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget company-intro-widget">
            <a href="index.html" className="site-logo">
              <img
                src="https://i.ibb.co/vLDyPtM/ak-logo-yellow.png"
                alt="logo"
              />
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <ul className="company-footer-contact-list">
              <li>
                <i className="fas fa-phone" />
                0123456789
              </li>
              <li>
                <i className="fas fa-clock" />
                Mon - Sat 8.00 - 18.00
              </li>
            </ul>
          </div>
        </div>
        {/* widget end */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget course-links-widget">
            <h5 className="widget-title">Popular Courses</h5>
            <ul className="courses-link-list">
              <li>
                <a href="#">
                  <i className="fas fa-long-arrow-alt-right" />
                  Academic English
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-long-arrow-alt-right" />
                  Web Technology
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-long-arrow-alt-right" />
                  PC Systems
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-long-arrow-alt-right" />
                  Ui Web Design
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-long-arrow-alt-right" />
                  Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-long-arrow-alt-right" />
                  Apps Development
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* widget end */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget latest-news-widget">
            <h5 className="widget-title">lastest news</h5>
            <ul className="small-post-list">
              <li>
                <div className="small-post-item">
                  <a href="#" className="post-date">
                    July 18, 2018
                  </a>
                  <h6 className="small-post-title">
                    <a href="#">
                      Lorem Ipsum is simply dummy text of the printing.
                    </a>
                  </h6>
                </div>
              </li>
              {/* small-post-item end */}
              <li>
                <div className="small-post-item">
                  <a href="#" className="post-date">
                    July 28, 2018
                  </a>
                  <h6 className="small-post-title">
                    <a href="#">
                      Lorem Ipsum is simply dummy text of the printing
                    </a>
                  </h6>
                </div>
              </li>
              {/* small-post-item end */}
            </ul>
          </div>
        </div>
        {/* widget end */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget newsletter-widget">
            <h5 className="widget-title">Newsletter</h5>
            <div className="footer-newsletter">
              <p>
                Sign Up to Our Newsletter to Get Latest Updates &amp; Services
              </p>
              <form className="news-letter-form">
                <input
                  type="email"
                  name="news-email"
                  id="news-email"
                  placeholder="Your email address"
                />
                <input type="submit" defaultValue="Send" />
              </form>
            </div>
          </div>
        </div>
        {/* widget end */}
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 text-sm-left text-center">
          <span className="copy-right-text">
            © 2019 <a href="https://codepen.io/anupkumar92">Anup</a> All Rights
            Reserved.
          </span>
        </div>
        <div className="col-md-6 col-sm-6">
          <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* footer-bottom end */}
</footer>

  )
}

export default Footer