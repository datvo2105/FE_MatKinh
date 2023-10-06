import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authSelector, logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import Cart from "../components/Header/Cart";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isSubDrop, setIsSubDrop] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showMoblie, setShowMoblie] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuth, userData } = authSelector();

  const handleLogout = () => {
    dispatch(logout());
    location.assign("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const path = `/product?search=${searchInput}`;
    navigate(path);
    setIsSearch(false);
  };

  return (
    <>
      <div
        className="header-wrap bg-white shadow bg-body-tertiary classicHeader position-sticky animated d-flex"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
              <Link to="/">
                <img
                  src="../../public/assets/images/logo.svg"
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
                  onClick={() => setShowMoblie(!showMoblie)}
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
                    <Link to="/product">
                      Cửa Hàng<i className="anm anm-angle-down-l"></i>
                    </Link>
                  </li>
                  <li className="lvl1">
                    <Link to="/blog">Bài Viết</Link>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <Link to="/about">
                      Thông Tin <i className="anm anm-angle-down-l"></i>
                    </Link>
                    <ul className="dropdown">
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
                </ul>
              </nav>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
              <div className="logo">
                <Link to="/">
                  <img src="../../public/assets/images/logo.svg" />
                </Link>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-3 col-lg-2">
              <nav className="grid__item" id="AccessibleNav">
                <ul
                  id="siteNav"
                  className="site-nav medium center hidearrow d-flex align-items-center justify-content-end"
                >
                  <li className="lvl1">
                    <div className="site-header__search">
                      <button
                        type="button"
                        className="search-trigger"
                        onClick={() => {
                          setIsSearch(true);
                          setShowCart(false);
                        }}
                      >
                        <i className="icon anm anm-search-l"></i>
                      </button>
                    </div>
                  </li>
                  <li className="lvl1 mr-4">
                    <Cart
                      showCart={showCart}
                      setShowCart={setShowCart}
                      isAuth={isAuth}
                    />
                  </li>
                  <li className="lvl1 parent dropdown d-lg-block d-md-none">
                    <div className=" site-header__cart ">
                      <div type="button" style={{ cursor: "pointer" }}>
                        <i className="icon anm anm-user-al"></i>
                      </div>
                    </div>
                    <ul
                      className="dropdown"
                      style={{ transform: "translate(-80%)" }}
                    >
                      {isAuth !== null ? (
                        <>
                          <li className="item text-center">
                            <Link
                              className="pName mr-0 site-nav"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "100%",
                              }}
                              to="/information"
                            >
                              {userData.user_name}
                            </Link>
                          </li>
                          <li className="item text-center">
                            <Link
                              type="button"
                              className="pName mr-0 site-nav"
                              style={{ cursor: "pointer" }}
                              onClick={handleLogout}
                            >
                              Đăng Xuất
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="item text-center">
                            <Link className="pName mr-0 site-nav" to="/login">
                              Đăng Nhập
                            </Link>
                          </li>
                          <li className="item text-center">
                            <Link
                              className="pName mr-0 site-nav"
                              to="/register"
                            >
                              Đăng Ký
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className={`search ${isSearch ? "search--opened" : ""}`}>
          <div className="search__form">
            <form className="search-bar__form" onSubmit={handleSearch}>
              <button className="go-btn search__button" type="submit">
                <i className="icon anm anm-search-l"></i>
              </button>
              <input
                className="search__input"
                type="search"
                name="q"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Tìm kiếm sản phẩm...."
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
      </div>

      <div
        className={`mobile-nav-wrapper ${showMoblie ? "active" : ""}`}
        role="navigation"
      >
        <div
          className="closemobileMenu"
          onClick={() => setShowMoblie(!showMoblie)}
        >
          <i className="icon anm anm-times-l pull-right"></i> Close Menu
        </div>
        <ul id="MobileNav" className="mobile-nav">
          <li className="lvl1">
            <Link to="/">Trang Chủ</Link>
          </li>
          <li className="lvl1 parent megamenu">
            <Link to="/product">Cửa Hàng</Link>
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
        </ul>
      </div>
    </>
  );
};

export default Header;
