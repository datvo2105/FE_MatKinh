import { useState } from "react";

const PriceSlider = () => {
  const [showPrice, setShowPrice] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);

  return (
    <>
      <div className="sidebar_widget filterBox filter-widget">
        <div
          className={`widget-title ${showPrice ? "" : "active"}`}
          onClick={() => {
            setShowPrice(!showPrice);
          }}
        >
          <h2>Price</h2>
        </div>
        <form
          action="#"
          method="post"
          className={`price-filter ${
            showPrice ? "d-none opacity-0 overfollow-hidden" : ""
          }`}
          style={{
            transition: "all 5ms ease",
            opacity: 1,
            overflow: "visible",
          }}
        >
          <div
            id="slider-range"
            className="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
          >
            <div
              className="ui-slider-range ui-widget-header ui-corner-all"
              style={{ left: `${minPrice}%`, width: `${maxPrice - minPrice}%` }}
            ></div>
            <span
              className="ui-slider-handle ui-state-default ui-corner-all"
              tabIndex="0"
            ></span>
            <span
              className="ui-slider-handle ui-state-default ui-corner-all"
              tabIndex="0"
              style={{ left: `${maxPrice}%` }}
            ></span>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="no-margin">
                <input id="amount" disabled defaultValue={"0"} />
              </p>
            </div>
            <div className="col-6 text-right margin-25px-top">
              <button className="btn btn-secondary btn--small">filter</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PriceSlider;
