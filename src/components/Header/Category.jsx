import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategory } from "../../services/product.service";

const Category = () => {
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    getAllCategory().then((res) => setListCategory(res.data.data));
  }, []);

  return (
    <li className="lvl1 parent megamenu">
      <Link to="/product">
        Cửa Hàng<i className="anm anm-angle-down-l"></i>
      </Link>
      <div className="megamenu style1">
        <ul className="grid mmWrapper">
          <li className="grid__item large-up--one-whole">
            <ul className="grid">
              {listCategory.map((category) => {
                return (
                  <li
                    key={category._id}
                    className="grid__item lvl-1 col-md-3 col-lg-3"
                  >
                    <Link to={`${category.desc}`} className="site-nav lvl-1">
                      {category.name}
                    </Link>
                    <ul className="subLinks">
                      <li className="lvl-2">
                        <Link to="/sunglasses/sale" className="site-nav lvl-2">
                          Sale
                        </Link>
                      </li>
                      <li className="lvl-2">
                        <Link
                          to="/sunglasses/hot-sale"
                          className="site-nav lvl-2"
                        >
                          Bán Chạy
                          <span className="lbl nm_label3 ml-1">Hot</span>
                        </Link>
                      </li>
                      <li className="lvl-2">
                        <Link to="/sunglasses/new" className="site-nav lvl-2">
                          Hàng Mới Về
                          <span className="lbl nm_label1 ml-1">New</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Category;
