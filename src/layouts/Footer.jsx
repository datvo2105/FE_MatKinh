import { useState, useEffect } from "react";
import { getAllCategory } from "../services/product.service";
import { Link } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    getAllCategory().then((res) => setListCategory(res.data.data));
  }, []);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <footer id="footer">
        <div className="newsletter-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 w-100 d-flex justify-content-end align-items-center">
                <div className="footer-social">
                  <ul className="list--inline site-footer__social-icons social-icons">
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Facebook"
                      >
                        <i className="icon icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Twitter"
                      >
                        <i className="icon icon-twitter"></i>{" "}
                        <span className="icon__fallback-text">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Pinterest"
                      >
                        <i className="icon icon-pinterest"></i>{" "}
                        <span className="icon__fallback-text">Pinterest</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Instagram"
                      >
                        <i className="icon icon-instagram"></i>{" "}
                        <span className="icon__fallback-text">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Tumblr"
                      >
                        <i className="icon icon-tumblr-alt"></i>{" "}
                        <span className="icon__fallback-text">Tumblr</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on YouTube"
                      >
                        <i className="icon icon-youtube"></i>{" "}
                        <span className="icon__fallback-text">YouTube</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        href="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Vimeo"
                      >
                        <i className="icon icon-vimeo-alt"></i>{" "}
                        <span className="icon__fallback-text">Vimeo</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Danh Mục</h4>
                  <ul>
                    {listCategory.map((category) => (
                      <li key={category._id}>
                        <Link to={category.desc}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Thông Tin</h4>
                  <ul>
                    <li>
                      <Link to="/about">Về Chúng Tôi</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Chăm Sóc Khách Hàng</h4>
                  <ul>
                    <li>
                      <Link to="/faqs">Câu Hỏi Thường Gặp</Link>
                    </li>
                    <li>
                      <Link to="/contact">Liên Hệ</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                  <h4 className="h4">Liên Hệ</h4>
                  <ul className="addressFooter">
                    <li>
                      <i className="icon anm anm-map-marker-al"></i>
                      <p>
                        55 Gallaxy Enque,
                        <br />
                        2568 steet, 23568 NY
                      </p>
                    </li>
                    <li className="phone">
                      <i className="icon anm anm-phone-s"></i>
                      <p>(440) 000 000 0000</p>
                    </li>
                    <li className="email">
                      <i className="icon anm anm-envelope-l"></i>
                      <p>sales@yousite.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="footer-bottom">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left"></div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                  <ul className="payment-icons list--inline">
                    <li>
                      <i
                        className="icon mx-1 fa fa-cc-visa"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i
                        className="icon mx-1 fa fa-cc-mastercard"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i
                        className="icon mx-1 fa fa-cc-discover"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i
                        className="icon mx-1 fa fa-cc-paypal"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i
                        className="icon mx-1 fa fa-credit-card"
                        aria-hidden="true"
                      ></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <span
        id="site-scroll"
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <i className="icon anm anm-angle-up-r"></i>
      </span>
    </>
  );
};

export default Footer;
