import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCategoryById } from "../../features/productSlice";

const ListCategory = ({ listCategory }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [isCheck, setIsCheck] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCategoryById(isCheck));
  }, [isCheck]);

  return (
    <div className="sidebar_widget filterBox filter-widget">
      <div
        className={`widget-title ${showCategory ? "" : "active"}`}
        onClick={() => {
          setShowCategory(!showCategory);
        }}
      >
        <h2>Categories</h2>
      </div>
      <ul
        className={showCategory ? "d-none  opacity-0 overfollow-hidden" : ""}
        style={{
          transition: "all 10ms ease",
          opacity: 1,
          overflow: "visible",
        }}
      >
        <li style={{ fontSize: 14 }}>
          <input
            type="radio"
            id="checkDefault"
            value="all"
            checked={isCheck == "" ? true : false}
            onChange={() => setIsCheck("")}
          />
          <label htmlFor="checkDefault" style={{ marginLeft: 5, fontSize: 14 }}>
            <span>
              <span></span>
            </span>
            All
          </label>
        </li>
        {listCategory.map((category, index) => {
          return (
            <li key={category._id} style={{ fontSize: 14 }}>
              <input
                type="radio"
                id={`check${index + 1}`}
                value={category._id}
                checked={isCheck === category._id ? true : false}
                onChange={() => setIsCheck(category._id)}
              />
              <label
                htmlFor={`check${index + 1}`}
                style={{ marginLeft: 5, fontSize: 14 }}
              >
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
