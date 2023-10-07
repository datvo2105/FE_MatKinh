import "../../../public/assets/css/priceSlider.css";
import ReactSlider from "react-slider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryId } from "../../utils/getRegex";

const PriceSlider = () => {
  const navigate = useNavigate();
  const minPrice = 0;
  const maxPrice = 10000000;
  const categoryId = getCategoryId(location.search);
  const [price, setPrice] = useState([minPrice, maxPrice]);

  const handleChangePrice = (newPrice) => {
    setPrice(newPrice);
  };

  const formatPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });

  const initPrice = [
    formatPrice.format(price[0]),
    formatPrice.format(price[1]),
  ];

  const handleFilterPrice = (e) => {
    e.preventDefault();
    navigate(
      `?categoryId=${categoryId}&minPrice=${price[0]}&maxPrice=${price[1]}`,
    );
  };

  return (
    <div className="sidebar_widget filterBox filter-widget">
      <div className="widget-title">
        <h2>Price</h2>
      </div>
      <form className="price-filter" onSubmit={handleFilterPrice}>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={price}
          onChange={handleChangePrice}
          step={100}
          min={minPrice}
          max={maxPrice}
        />
        <div className="row">
          <div className="col-6">
            <p className="no-margin">
              <input
                id="amount"
                type="text"
                value={initPrice.join(" - ")}
                onChange={handleChangePrice}
                style={{ width: 200 }}
              />
            </p>
          </div>
          <div className="col-6 text-right margin-25px-top">
            <button className="btn btn-secondary btn--small">filter</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PriceSlider;
