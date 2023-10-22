import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMinPrice, getMaxPrice, getCategoryId } from "../../utils/getRegex";
import { getAllCategory } from "../../services/product.service";

const ListCategory = () => {
  const navigate = useNavigate();
  const [listCategory, setListCategory] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const minPrice = getMinPrice(location.search);
  const maxPrice = getMaxPrice(location.search);
  const categoryId = getCategoryId(location.search);

  useEffect(() => {
    getAllCategory().then((res) => setListCategory(res.data));
  }, []);

  return (
    <div className="sidebar_widget filterBox filter-widget">
      <div
        className={`widget-title ${showCategory ? "" : "active"}`}
        onClick={() => {
          setShowCategory(!showCategory);
        }}>
        <h2>Danh mục</h2>
      </div>
      <ul
        className={showCategory ? "d-none  opacity-0 overfollow-hidden" : ""}
        style={{
          transition: "all 10ms ease",
          opacity: 1,
          overflow: "visible",
        }}>
        <li style={{ fontSize: 14 }}>
          <input
            type="radio"
            id="checkCategoryDefault"
            value="all"
            checked={categoryId == "" ? true : false}
            onChange={() => navigate("/product")}
          />
          <label
            htmlFor="checkCategoryDefault"
            style={{ marginLeft: 5, fontSize: 14 }}>
            <span>
              <span></span>
            </span>
            Tất Cả
          </label>
        </li>
        {listCategory.map((category, index) => {
          return (
            <li key={category._id} style={{ fontSize: 14 }}>
              <input
                type="radio"
                id={`checkCategory${index + 1}`}
                value={category._id}
                checked={categoryId === category._id ? true : false}
                onChange={() =>
                  navigate(
                    `?categoryId=${category._id}&minPrice=${minPrice}&maxPrice=${maxPrice}`
                  )
                }
              />
              <label
                htmlFor={`checkCategory${index + 1}`}
                style={{ marginLeft: 5, fontSize: 14 }}>
                <span>
                  <span></span>
                </span>
                {category.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListCategory;
