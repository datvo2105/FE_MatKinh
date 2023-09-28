import { useState } from "react";
import { Link } from "react-router-dom";

const Mobile = ({ showMoblie, handleMenu }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSubDrop, setIsSubDrop] = useState(false);

  return (
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
          <Link to="/product">
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
  );
};

export default Mobile;
