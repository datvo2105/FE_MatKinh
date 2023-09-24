import { useLayoutEffect, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { authSelector, logout } from "../features/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [showMoblie, setShowMoblie] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSubDrop, setIsSubDrop] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const dispatch = useDispatch();
  const { isAuth } = authSelector();

  const handleMenu = () => {
    setShowMoblie(!showMoblie);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

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
      <div className="header-wrap bg-white shadow bg-body-tertiary classicHeader position-sticky animated d-flex">
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
                  className={`btn--link site-header__menu js-mobile-nav-toggle mobile-nav--${
                    showMoblie ? "close" : "open"
                  }`}
                  onClick={handleMenu}
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
                <Link to="/">
                  <img
                    src="assets/images/logo.svg"
                    alt="Belle Multipurpose Html Template"
                    title="Belle Multipurpose Html Template"
                  />
                </Link>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-3 col-lg-2">
              <div className="site-cart">
                <div
                  className="site-header__cart "
                  title="Cart"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
                >
                  <i className="icon anm anm-bag-l"></i>
                  <span
                    id="CartCount"
                    className="site-header__cart-count"
                    data-cart-render="item_count"
                  >
                    2
                  </span>
                </div>
                <div
                  id="header-cart"
                  className={`block block-cart ${
                    showCart ? "d-block" : "d-none"
                  }`}
                >
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
              <div className="site-user float-right py-1 pr-3">
                <div className="site-cart">
                  <div
                    className="site-header__cart "
                    title="Cart"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowAuth(!showAuth);
                    }}
                  >
                    <i
                      className="icon anm anm-user-al"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  <div
                    id="header-cart"
                    className={`block block-cart ${
                      showAuth ? "d-block" : "d-none"
                    }`}
                    style={{ width: 180 }}
                  >
                    <ul className="mini-products-list">
                      <li className="item text-center">
                        <Link className="pName mr-0" to="/login">
                          Login
                        </Link>
                      </li>
                      {isAuth && (
                        <li className="item text-center">
                          <div
                            className="pName mr-0"
                            style={{ cursor: "pointer" }}
                            onClick={handleLogout}
                          >
                            Logout
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-nav-wrapper ${showMoblie ? "active" : ""}`}
        role="navigation"
      >
        <div className="closemobileMenu" onClick={handleMenu}>
          <i className="icon anm anm-times-l pull-right"></i> Close Menu
        </div>
        <ul id="MobileNav" className="mobile-nav">
          <li className="lvl1">
            <Link to="/">Trang Chủ</Link>
          </li>
          <li className="lvl1 parent megamenu">
            <Link to="/shop">
              Cửa Hàng
              <i
                className={`anm anm-${isDropdown ? "minus-r" : "plus-l"}`}
                onClick={() => {
                  setIsDropdown(!isDropdown);
                }}
              ></i>
            </Link>
            <ul className={`${isDropdown ? "d-block" : ""}`}>
              <li>
                <Link to="/sunglasses" className="site-nav">
                  Kính Mát
                </Link>
              </li>
              <li>
                <Link to="/glasses" className="site-nav">
                  Gọng Kính
                </Link>
              </li>
              <li>
                <Link to="/lenses" className="site-nav">
                  Tròng Kính
                </Link>
              </li>
            </ul>
          </li>
          <li className="lvl1 parent megamenu">
            <Link>
              Thông Tin
              <i
                className={`second anm anm-${isSubDrop ? "minus-r" : "plus-l"}`}
                onClick={() => {
                  setIsSubDrop(!isSubDrop);
                }}
              ></i>
            </Link>
            <ul className={`${isSubDrop ? "d-block" : ""}`}>
              <li>
                <Link to="/contact" className="site-nav">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link to="/about" className="site-nav">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="site-nav">
                  Câu Hỏi Thường Gặp
                </Link>
              </li>
            </ul>
          </li>
          <li className="lvl1">
            <Link to="/blog">Bài Viết</Link>
          </li>
          <li className="lvl1">
            <Link to="/">
              <b>Buy Now!</b>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
