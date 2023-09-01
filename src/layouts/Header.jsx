import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <div className={`search ${isSearch ? "search--opened" : ""}`}>
        <div className="search__form">
          <form className="search-bar__form" action="#">
            <button className="go-btn search__button" type="submit">
              <i className="icon anm anm-search-l"></i>
            </button>
            <input
              className="search__input"
              type="search"
              name="q"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search entire store..."
              aria-label="Search"
              autoComplete="off"
            />
          </form>
          <button
            type="button"
            className="search-trigger close-btn"
            onClick={() => {
              setIsSearch(false);
            }}
          >
            <i className="anm anm-times-l"></i>
          </button>
        </div>
      </div>
      <div className="header-wrap bg-white shadow bg-body-tertiary classicHeader animated d-flex">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
              <Link to="/">
                <img
                  src="assets/images/logo.svg"
                  alt="Belle Multipurpose Html Template"
                  title="Belle Multipurpose Html Template"
                />
              </Link>
            </div>
            <div className="col-2 col-sm-3 col-md-3 col-lg-8">
              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
                >
                  <i className="icon anm anm-times-l"></i>
                  <i className="anm anm-bars-r"></i>
                </button>
              </div>
              <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center hidearrow">
                  <li className="lvl1">
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <Link to="/shop">
                      Cửa Hàng<i className="anm anm-angle-down-l"></i>
                    </Link>
                    <div className="megamenu style1">
                      <ul className="grid mmWrapper">
                        <li className="grid__item large-up--one-whole">
                          <ul className="grid">
                            <li className="grid__item lvl-1 col-md-4 col-lg-4">
                              <Link to="/sunglasses" className="site-nav lvl-1">
                                Kính Mát
                              </Link>
                              <ul className="subLinks">
                                <li className="lvl-2">
                                  <Link
                                    to="/sunglasses/sale"
                                    className="site-nav lvl-2"
                                  >
                                    Sale
                                  </Link>
                                </li>
                                <li className="lvl-2">
                                  <Link
                                    to="/sunglasses/hot-sale"
                                    className="site-nav lvl-2"
                                  >
                                    Bán Chạy
                                    <span className="lbl nm_label3 ml-1">
                                      Hot
                                    </span>
                                  </Link>
                                </li>
                                <li className="lvl-2">
                                  <Link
                                    to="/sunglasses/new"
                                    className="site-nav lvl-2"
                                  >
                                    Hàng Mới Về
                                    <span className="lbl nm_label1 ml-1">
                                      New
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="grid__item lvl-1 col-md-4 col-lg-4">
                              <Link to="/glasses" className="site-nav lvl-1">
                                Gọng Kính
                              </Link>
                              <ul className="subLinks">
                                <li className="lvl-2">
                                  <Link
                                    to="/glasses/sale"
                                    className="site-nav lvl-2"
                                  >
                                    Sale
                                  </Link>
                                </li>
                                <li className="lvl-2">
                                  <Link
                                    to="/glasses/hot-sale"
                                    className="site-nav lvl-2"
                                  >
                                    Bán Chạy
                                    <span className="lbl nm_label3 ml-1">
                                      Hot
                                    </span>
                                  </Link>
                                </li>
                                <li className="lvl-2">
                                  <Link
                                    to="/glasses/new"
                                    className="site-nav lvl-2"
                                  >
                                    Hàng Mới Về
                                    <span className="lbl nm_label1 ml-1">
                                      {" "}
                                      New
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="grid__item lvl-1 col-md-4 col-lg-4">
                              <Link to="/lenses" className="site-nav lvl-1">
                                Tròng Kính
                              </Link>
                              <ul className="subLinks">
                                <li className="lvl-2">
                                  <Link
                                    to="/lenses/sale"
                                    className="site-nav lvl-2"
                                  >
                                    Sale
                                  </Link>
                                </li>
                                <li className="lvl-2">
                                  <Link
                                    to="/lenses/hot-sale"
                                    className="site-nav lvl-2"
                                  >
                                    Bán Chạy
                                    <span className="lbl nm_label3 ml-1">
                                      Hot
                                    </span>
                                  </Link>
                                </li>
                                <li className="lvl-2">
                                  <Link
                                    to="/lenses/new"
                                    className="site-nav lvl-2"
                                  >
                                    Hàng Mới Về
                                    <span className="lbl nm_label1 ml-1">
                                      {" "}
                                      New
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1">
                    <Link to="/blog">Bài Viết</Link>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">
                      Thông Tin <i className="anm anm-angle-down-l"></i>
                    </a>
                    <div className="megamenu style4">
                      <ul className="grid grid--uniform mmWrapper">
                        <li className="grid__item lvl-1 col-md-5 col-lg-5">
                          <ul className="subLinks">
                            <li className="lvl-2">
                              <Link to="/about" className="site-nav lvl-2">
                                Về Chúng Tôi
                              </Link>
                            </li>
                            <li className="lvl-2">
                              <Link to="/faqs" className="site-nav lvl-2">
                                Câu Hỏi Thường Gặp
                              </Link>
                            </li>
                            <li className="lvl-2">
                              <Link to="/contact" className="site-nav lvl-2">
                                Liên Hệ
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="grid__item lvl-1 col-md-7 col-lg-7">
                          <img
                            src="assets/images/megamenu-bg1.jpg"
                            alt=""
                            title=""
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1">
                    <a href="#">
                      <b>Buy Now!</b> <i className="anm anm-angle-down-l"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo.svg"
                    alt="Belle Multipurpose Html Template"
                    title="Belle Multipurpose Html Template"
                  />
                </a>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-3 col-lg-2">
              <div className="site-cart">
                <a href="#;" className="site-header__cart" title="Cart">
                  <i className="icon anm anm-bag-l"></i>
                  <span
                    id="CartCount"
                    className="site-header__cart-count"
                    data-cart-render="item_count"
                  >
                    2
                  </span>
                </a>
                <div id="header-cart" className="block block-cart">
                  <ul className="mini-products-list">
                    <li className="item">
                      <a className="product-image" href="#">
                        <img
                          src="assets/images/product-images/cape-dress-1.jpg"
                          alt="3/4 Sleeve Kimono Dress"
                          title=""
                        />
                      </a>
                      <div className="product-details">
                        <a href="#" className="remove">
                          <i className="anm anm-times-l" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="edit-i remove">
                          <i className="anm anm-edit" aria-hidden="true"></i>
                        </a>
                        <a className="pName" href="cart.html">
                          Sleeve Kimono Dress
                        </a>
                        <div className="variant-cart">Black / XL</div>
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <span className="label">Qty:</span>
                            <a
                              className="qtyBtn minus"
                              href="event.preventDefault()"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              className="product-form__input qty"
                            />
                            <a
                              className="qtyBtn plus"
                              href="event.preventDefault()"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div className="priceRow">
                          <div className="product-price">
                            <span className="money">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <a className="product-image" href="#">
                        <img
                          src="assets/images/product-images/cape-dress-2.jpg"
                          alt="Elastic Waist Dress - Black / Small"
                          title=""
                        />
                      </a>
                      <div className="product-details">
                        <a href="#" className="remove">
                          <i className="anm anm-times-l" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="edit-i remove">
                          <i className="anm anm-edit" aria-hidden="true"></i>
                        </a>
                        <a className="pName" href="cart.html">
                          Elastic Waist Dress
                        </a>
                        <div className="variant-cart">Gray / XXL</div>
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <span className="label">Qty:</span>
                            <a
                              className="qtyBtn minus"
                              href="event.preventDefault()"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              className="product-form__input qty"
                            />
                            <a
                              className="qtyBtn plus"
                              href="event.preventDefault()"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div className="priceRow">
                          <div className="product-price">
                            <span className="money">$99.00</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="total">
                    <div className="total-in">
                      <span className="label">Cart Subtotal:</span>
                      <span className="product-price">
                        <span className="money">$748.00</span>
                      </span>
                    </div>
                    <div className="buttonSet text-center">
                      <a
                        href="cart.html"
                        className="btn btn-secondary btn--small"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-secondary btn--small"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-header__search">
                <button
                  type="button"
                  className="search-trigger"
                  onClick={() => {
                    setIsSearch(true);
                  }}
                >
                  <i className="icon anm anm-search-l"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-wrapper" role="navigation">
        <div className="closemobileMenu">
          <i className="icon anm anm-times-l pull-right"></i> Close Menu
        </div>
        <ul id="MobileNav" className="mobile-nav">
          <li className="lvl1 parent megamenu">
            <a href="index.html">
              Home <i className="anm anm-plus-l"></i>
            </a>
            <ul>
              <li>
                <a href="#" className="site-nav">
                  Home Group 1<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="index.html" className="site-nav">
                      Home 1 - Classic
                    </a>
                  </li>
                  <li>
                    <a href="home2-default.html" className="site-nav">
                      Home 2 - Default
                    </a>
                  </li>
                  <li>
                    <a href="home15-funiture.html" className="site-nav">
                      Home 15 - Furniture
                    </a>
                  </li>
                  <li>
                    <a href="home3-boxed.html" className="site-nav">
                      Home 3 - Boxed
                    </a>
                  </li>
                  <li>
                    <a href="home4-fullwidth.html" className="site-nav">
                      Home 4 - Fullwidth
                    </a>
                  </li>
                  <li>
                    <a href="home5-cosmetic.html" className="site-nav">
                      Home 5 - Cosmetic
                    </a>
                  </li>
                  <li>
                    <a href="home6-modern.html" className="site-nav">
                      Home 6 - Modern
                    </a>
                  </li>
                  <li>
                    <a href="home7-shoes.html" className="site-nav last">
                      Home 7 - Shoes
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="site-nav">
                  Home Group 2<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="home8-jewellery.html" className="site-nav">
                      Home 8 - Jewellery
                    </a>
                  </li>
                  <li>
                    <a href="home9-parallax.html" className="site-nav">
                      Home 9 - Parallax
                    </a>
                  </li>
                  <li>
                    <a href="home10-minimal.html" className="site-nav">
                      Home 10 - Minimal
                    </a>
                  </li>
                  <li>
                    <a href="home11-grid.html" className="site-nav">
                      Home 11 - Grid
                    </a>
                  </li>
                  <li>
                    <a href="home12-category.html" className="site-nav">
                      Home 12 - Category
                    </a>
                  </li>
                  <li>
                    <a href="home13-auto-parts.html" className="site-nav">
                      Home 13 - Auto Parts
                    </a>
                  </li>
                  <li>
                    <a href="home14-bags.html" className="site-nav last">
                      Home 14 - Bags
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="site-nav">
                  New Sections<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="home11-grid.html" className="site-nav">
                      Image Gallery
                    </a>
                  </li>
                  <li>
                    <a href="home5-cosmetic.html" className="site-nav">
                      Featured Product
                    </a>
                  </li>
                  <li>
                    <a href="home7-shoes.html" className="site-nav">
                      Columns with Items
                    </a>
                  </li>
                  <li>
                    <a href="home6-modern.html" className="site-nav">
                      Text columns with images
                    </a>
                  </li>
                  <li>
                    <a href="home2-default.html" className="site-nav">
                      Products Carousel
                    </a>
                  </li>
                  <li>
                    <a href="home9-parallax.html" className="site-nav last">
                      Parallax Banner
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="site-nav">
                  New Features<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="home13-auto-parts.html" className="site-nav">
                      Top Information Bar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="site-nav">
                      Age Varification
                    </a>
                  </li>
                  <li>
                    <a href="#" className="site-nav">
                      Footer Blocks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="site-nav">
                      2 New Megamenu style
                    </a>
                  </li>
                  <li>
                    <a href="#" className="site-nav">
                      Show Total Savings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="site-nav">
                      New Custom Icons
                    </a>
                  </li>
                  <li>
                    <a href="#" className="site-nav last">
                      Auto Currency
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="#">
              Shop <i className="anm anm-plus-l"></i>
            </a>
            <ul>
              <li>
                <a href="#" className="site-nav">
                  Shop Pages<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="shop-left-sidebar.html" className="site-nav">
                      Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar.html" className="site-nav">
                      Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth.html" className="site-nav">
                      Fullwidth
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-3.html" className="site-nav">
                      3 items per row
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-4.html" className="site-nav">
                      4 items per row
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-5.html" className="site-nav">
                      5 items per row
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-6.html" className="site-nav">
                      6 items per row
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-7.html" className="site-nav">
                      7 items per row
                    </a>
                  </li>
                  <li>
                    <a href="shop-listview.html" className="site-nav last">
                      Product Listview
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="site-nav">
                  Shop Features<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="shop-left-sidebar.html" className="site-nav">
                      Product Countdown
                    </a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar.html" className="site-nav">
                      Infinite Scrolling
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-3.html" className="site-nav">
                      Pagination - Classic
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-6.html" className="site-nav">
                      Pagination - Load More
                    </a>
                  </li>
                  <li>
                    <a href="product-labels.html" className="site-nav">
                      Dynamic Product Labels
                    </a>
                  </li>
                  <li>
                    <a href="product-swatches-style.html" className="site-nav">
                      Product Swatches
                    </a>
                  </li>
                  <li>
                    <a href="product-hover-info.html" className="site-nav">
                      Product Hover Info
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-3.html" className="site-nav">
                      Product Reviews
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="site-nav last">
                      Discount Label
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="product-layout-1.html">
              Product <i className="anm anm-plus-l"></i>
            </a>
            <ul>
              <li>
                <a href="product-layout-1.html" className="site-nav">
                  Product Page<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="product-layout-1.html" className="site-nav">
                      Product Layout 1
                    </a>
                  </li>
                  <li>
                    <a href="product-layout-2.html" className="site-nav">
                      Product Layout 2
                    </a>
                  </li>
                  <li>
                    <a href="product-layout-3.html" className="site-nav">
                      Product Layout 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-with-left-thumbs.html"
                      className="site-nav"
                    >
                      Product With Left Thumbs
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-with-right-thumbs.html"
                      className="site-nav"
                    >
                      Product With Right Thumbs
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-with-bottom-thumbs.html"
                      className="site-nav last"
                    >
                      Product With Bottom Thumbs
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="short-description.html" className="site-nav">
                  Product Features<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="short-description.html" className="site-nav">
                      Short Description
                    </a>
                  </li>
                  <li>
                    <a href="product-countdown.html" className="site-nav">
                      Product Countdown
                    </a>
                  </li>
                  <li>
                    <a href="product-video.html" className="site-nav">
                      Product Video
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-quantity-message.html"
                      className="site-nav"
                    >
                      Product Quantity Message
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-visitor-sold-count.html"
                      className="site-nav"
                    >
                      Product Visitor/Sold Count
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-zoom-lightbox.html"
                      className="site-nav last"
                    >
                      Product Zoom/Lightbox
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="site-nav">
                  Product Features<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a
                      href="product-with-variant-image.html"
                      className="site-nav"
                    >
                      Product with Variant Image
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-with-color-swatch.html"
                      className="site-nav"
                    >
                      Product with Color Swatch
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-with-image-swatch.html"
                      className="site-nav"
                    >
                      Product with Image Swatch
                    </a>
                  </li>
                  <li>
                    <a href="product-with-dropdown.html" className="site-nav">
                      Product with Dropdown
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-with-rounded-square.html"
                      className="site-nav"
                    >
                      Product with Rounded Square
                    </a>
                  </li>
                  <li>
                    <a href="swatches-style.html" className="site-nav last">
                      Product Swatches All Style
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="site-nav">
                  Product Features<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="product-accordion.html" className="site-nav">
                      Product Accordion
                    </a>
                  </li>
                  <li>
                    <a href="product-pre-orders.html" className="site-nav">
                      Product Pre-orders
                    </a>
                  </li>
                  <li>
                    <a href="product-labels-detail.html" className="site-nav">
                      Product Labels
                    </a>
                  </li>
                  <li>
                    <a href="product-discount.html" className="site-nav">
                      Product Discount In %
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-shipping-message.html"
                      className="site-nav"
                    >
                      Product Shipping Message
                    </a>
                  </li>
                  <li>
                    <a
                      href="product-shipping-message.html"
                      className="site-nav last"
                    >
                      Size Guide
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="about-us.html">
              Pages <i className="anm anm-plus-l"></i>
            </a>
            <ul>
              <li>
                <a href="cart-variant1.html" className="site-nav">
                  Cart Page <i className="anm anm-plus-l"></i>
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="cart-variant1.html" className="site-nav">
                      Cart Variant1
                    </a>
                  </li>
                  <li>
                    <a href="cart-variant2.html" className="site-nav">
                      Cart Variant2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="compare-variant1.html" className="site-nav">
                  Compare Product <i className="anm anm-plus-l"></i>
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="compare-variant1.html" className="site-nav">
                      Compare Variant1
                    </a>
                  </li>
                  <li>
                    <a href="compare-variant2.html" className="site-nav">
                      Compare Variant2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="checkout.html" className="site-nav">
                  Checkout
                </a>
              </li>
              <li>
                <a href="checkout.html" className="site-nav">
                  Checkout
                </a>
              </li>
              <li>
                <a href="about-us.html" className="site-nav">
                  About Us<span className="lbl nm_label1">New</span>
                </a>
              </li>
              <li>
                <a href="contact-us.html" className="site-nav">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="faqs.html" className="site-nav">
                  FAQs
                </a>
              </li>
              <li>
                <a href="lookbook1.html" className="site-nav">
                  Lookbook<i className="anm anm-plus-l"></i>
                </a>
                <ul>
                  <li>
                    <a href="lookbook1.html" className="site-nav">
                      Style 1
                    </a>
                  </li>
                  <li>
                    <a href="lookbook2.html" className="site-nav last">
                      Style 2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="404.html" className="site-nav">
                  404
                </a>
              </li>
              <li>
                <a href="coming-soon.html" className="site-nav">
                  Coming soon<span className="lbl nm_label1">New</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="blog-left-sidebar.html">
              Blog <i className="anm anm-plus-l"></i>
            </a>
            <ul>
              <li>
                <a href="blog-left-sidebar.html" className="site-nav">
                  Left Sidebar
                </a>
              </li>
              <li>
                <a href="blog-right-sidebar.html" className="site-nav">
                  Right Sidebar
                </a>
              </li>
              <li>
                <a href="blog-fullwidth.html" className="site-nav">
                  Fullwidth
                </a>
              </li>
              <li>
                <a href="blog-grid-view.html" className="site-nav">
                  Gridview
                </a>
              </li>
              <li>
                <a href="blog-article.html" className="site-nav">
                  Article
                </a>
              </li>
            </ul>
          </li>
          <li className="lvl1">
            <a href="#">
              <b>Buy Now!</b>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
