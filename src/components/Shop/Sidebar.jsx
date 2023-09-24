import { useState } from "react";
import PriceSlider from "./PriceSlider";

const Sidebar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  return (
    <>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
        <div className="closeFilter d-block d-md-none d-lg-none">
          <i className="icon icon anm anm-times-l"></i>
        </div>
        <div className="sidebar_tags">
          <div className="sidebar_widget categories filter-widget">
            <div
              className={`widget-title ${showCategory ? "" : "active"}`}
              onClick={() => {
                setShowCategory(!showCategory);
              }}
            >
              <h2>Categories</h2>
            </div>
            <div
              className={`widget-content ${
                showCategory ? "d-none opacity-0 overfollow-hidden" : ""
              }`}
              style={{
                transition: "all 5ms ease",
                opacity: 1,
                overflow: "visible",
              }}
            >
              <ul className="sidebar_categories">
                <li className="level1 sub-level">
                  <a href="#;" className="site-nav">
                    Clothing
                  </a>
                  <ul className="sublinks">
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        Men
                      </a>
                    </li>
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        Women
                      </a>
                    </li>
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        Child
                      </a>
                    </li>
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        View All Clothing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="level1 sub-level">
                  <a href="#;" className="site-nav">
                    Jewellery
                  </a>
                  <ul className="sublinks">
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        Ring
                      </a>
                    </li>
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        Neckalses
                      </a>
                    </li>
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        Eaarings
                      </a>
                    </li>
                    <li className="level2">
                      <a href="#;" className="site-nav">
                        View All Jewellery
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="lvl-1">
                  <a href="#;" className="site-nav">
                    Shoes
                  </a>
                </li>
                <li className="lvl-1">
                  <a href="#;" className="site-nav">
                    Accessories
                  </a>
                </li>
                <li className="lvl-1">
                  <a href="#;" className="site-nav">
                    Collections
                  </a>
                </li>
                <li className="lvl-1">
                  <a href="#;" className="site-nav">
                    Sale
                  </a>
                </li>
                <li className="lvl-1">
                  <a href="#;" className="site-nav">
                    Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <PriceSlider />
          <div className="sidebar_widget filterBox filter-widget">
            <div
              className={`widget-title ${showBrand ? "" : "active"}`}
              onClick={() => {
                setShowBrand(!showBrand);
              }}
            >
              <h2>Brands</h2>
            </div>
            <ul className={showBrand ? "d-none" : ""}>
              <li>
                <input type="checkbox" value="allen-vela" id="check1" />
                <label htmlFor="check1">
                  <span>
                    <span></span>
                  </span>
                  Allen Vela
                </label>
              </li>
              <li>
                <input type="checkbox" value="oxymat" id="check3" />
                <label htmlFor="check3">
                  <span>
                    <span></span>
                  </span>
                  Oxymat
                </label>
              </li>
              <li>
                <input type="checkbox" value="vanelas" id="check4" />
                <label htmlFor="check4">
                  <span>
                    <span></span>
                  </span>
                  Vanelas
                </label>
              </li>
              <li>
                <input type="checkbox" value="pagini" id="check5" />
                <label htmlFor="check5">
                  <span>
                    <span></span>
                  </span>
                  Pagini
                </label>
              </li>
              <li>
                <input type="checkbox" value="monark" id="check6" />
                <label htmlFor="check6">
                  <span>
                    <span></span>
                  </span>
                  Monark
                </label>
              </li>
            </ul>
          </div>
          <div className="sidebar_widget">
            <div className="widget-title">
              <h2>Popular Products</h2>
            </div>
            <div className="widget-content">
              <div className="list list-sidebar-products">
                <div className="grid">
                  <div className="grid__item">
                    <div className="mini-list-item">
                      <div className="mini-view_image">
                        <a className="grid-view-item__link" href="#">
                          <img
                            className="grid-view-item__image"
                            src="assets/images/product-images/mini-product-img.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="details">
                        {" "}
                        <a className="grid-view-item__title" href="#">
                          Cena Skirt
                        </a>
                        <div className="grid-view-item__meta">
                          <span className="product-price__price">
                            <span className="money">$173.60</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid__item">
                    <div className="mini-list-item">
                      <div className="mini-view_image">
                        {" "}
                        <a className="grid-view-item__link" href="#">
                          <img
                            className="grid-view-item__image"
                            src="assets/images/product-images/mini-product-img1.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div className="details">
                        {" "}
                        <a className="grid-view-item__title" href="#">
                          Block Button Up
                        </a>
                        <div className="grid-view-item__meta">
                          <span className="product-price__price">
                            <span className="money">$378.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid__item">
                    <div className="mini-list-item">
                      <div className="mini-view_image">
                        {" "}
                        <a className="grid-view-item__link" href="#">
                          <img
                            className="grid-view-item__image"
                            src="assets/images/product-images/mini-product-img2.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div className="details">
                        {" "}
                        <a className="grid-view-item__title" href="#">
                          Balda Button Pant
                        </a>
                        <div className="grid-view-item__meta">
                          <span className="product-price__price">
                            <span className="money">$278.60</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid__item">
                    <div className="mini-list-item">
                      <div className="mini-view_image">
                        {" "}
                        <a className="grid-view-item__link" href="#">
                          <img
                            className="grid-view-item__image"
                            src="assets/images/product-images/mini-product-img3.jpg"
                            alt=""
                          />
                        </a>{" "}
                      </div>
                      <div className="details">
                        {" "}
                        <a className="grid-view-item__title" href="#">
                          Border Dress in Black/Silver
                        </a>
                        <div className="grid-view-item__meta">
                          <span className="product-price__price">
                            <span className="money">$228.00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar_widget static-banner">
            <img src="assets/images/side-banner-2.jpg" alt="" />
          </div>
          <div className="sidebar_widget">
            <div className="widget-title">
              <h2>Information</h2>
            </div>
            <div className="widget-content">
              <p>
                Use this text to share information about your brand with your
                customers. Describe a product, share announcements, or welcome
                customers to your store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
