import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMinPrice, getMaxPrice, getBrandId } from "../../utils/getRegex";
import { getAllBrand } from "../../services/product.service";
import { getCategoryId } from "./../../utils/getRegex";

const ListBrand = () => {
  const navigate = useNavigate();
  const [listBrand, setListBrand] = useState([]);
  const [showBrand, setShowBrand] = useState(false);
  const minPrice = getMinPrice(location.search);
  const maxPrice = getMaxPrice(location.search);
  const brandId = getBrandId(location.search);
  const categoryId = getCategoryId(location.search);

  useEffect(() => {
    getAllBrand().then((res) => setListBrand(res.data));
  }, []);

  return (
    <div className="sidebar_widget filterBox filter-widget">
      <div
        className={`widget-title ${showBrand ? "" : "active"}`}
        onClick={() => {
          setShowBrand(!showBrand);
        }}>
        <h2>Thương Hiệu</h2>
      </div>
      <ul
        className={showBrand ? "d-none  opacity-0 overfollow-hidden" : ""}
        style={{
          transition: "all 10ms ease",
          opacity: 1,
          overflow: "visible",
        }}>
        <li style={{ fontSize: 14 }}>
          <input
            type="radio"
            id="checkDefault"
            value="all"
            checked={brandId == "" ? true : false}
            onChange={() => navigate("/product")}
          />
          <label htmlFor="checkDefault" style={{ marginLeft: 5, fontSize: 14 }}>
            <span>
              <span></span>
            </span>
            Tất Cả
          </label>
        </li>
        {listBrand.map((brand, index) => {
          return (
            <li key={brand._id} style={{ fontSize: 14 }}>
              <input
                type="radio"
                id={`check${index + 1}`}
                value={brand._id}
                checked={brandId === brand._id ? true : false}
                onChange={() =>
                  navigate(
                    `?brandId=${brand._id}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
                  )
                }
              />
              <label
                htmlFor={`check${index + 1}`}
                style={{ marginLeft: 5, fontSize: 14 }}>
                <span>
                  <span></span>
                </span>
                {brand.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBrand;
