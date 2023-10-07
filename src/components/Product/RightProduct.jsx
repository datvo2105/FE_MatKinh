import { useEffect, useState } from "react";
import { priceDiscount, countRating } from "../../hooks/Func";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../../features/orderSlice";
import { getShipping } from "../../services/order.service";
import { Navigate } from "react-router-dom";

const RightProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [chooseSize, setChooseSize] = useState("");
  const [chooseColor, setChooseColor] = useState("");
  const [statusShip, setStatusShip] = useState();
  const [qty, setQty] = useState(1);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    getShipping()
      .then((res) => res.data)
      .then((shipping) =>
        shipping.forEach((ship) => {
          if (ship.status.toLowerCase() == "đơn hàng vừa mới khởi tạo")
            setStatusShip(ship._id);
        }),
      );
  }, []);

  const handleAddCart = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        product: product._id,
        quantity: qty,
        size: chooseSize,
        color: chooseColor,
        status: "cart",
        shipping: statusShip,
      }),
    );
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to="/product" />;
  }

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="product-single__meta">
        <h1 className="product-single__title">{product.name}</h1>
        <div className="product-nav clearfix"></div>
        <div className="prInfoRow">
          <div className="product-stock">
            <span className={`instock ${product.quantity > 0 ? "" : "hide"}`}>
              CÒN HÀNG
            </span>
            <span
              className={`outstock ${product.quantity > 0 ? "hide" : ""}`}
              style={{ color: "#e95144" }}
            >
              HẾT HÀNG
            </span>
          </div>
          <div className="product-review">
            <a className="reviewLink" href="#tab2">
              {countRating(product.rate).map((star, index) => (
                <i className={star} key={index}></i>
              ))}
            </a>
          </div>
        </div>
        <p className="product-single__price product-single__price-product-template">
          <span className="visually-hidden">Giá Cả</span>
          {product.discount > 0 ? (
            <>
              <s id="ComparePrice-product-template">
                <span className="money mr-1">{product.price} VND</span>
              </s>
              <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                <span id="ProductPrice-product-template">
                  <span className="money">
                    {priceDiscount(product.price, product.discount)} VND
                  </span>
                </span>
              </span>
              <span className="discount-badge">
                <span className="devider">|</span>&nbsp;
                <span>Bạn tiết kiệm được</span>
                <span
                  id="SaveAmount-product-template"
                  className="ml-1 product-single__save-amount"
                >
                  <span className="money">
                    {product.price -
                      priceDiscount(product.price, product.discount)}{" "}
                    VND
                  </span>
                </span>
                <span className="off ml-1">
                  (<span>{product.discount}</span>%)
                </span>
              </span>
            </>
          ) : (
            <>
              <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                <span id="ProductPrice-product-template">
                  <span className="money">{product.price} VND</span>
                </span>
              </span>
            </>
          )}
        </p>
      </div>
      <div className="product-single__description rte">
        <span>{product.desc}</span>
      </div>
      {product.quantity <= 0 ? (
        <div
          id="quantity_message"
          style={{
            color: "#e95144",
            borderColor: "#e95144",
          }}
        >
          <span className="items">Hết Hàng</span>
        </div>
      ) : (
        <div id="quantity_message">
          Còn
          <span className="items"> {product.quantity}</span> sản phẩm.
        </div>
      )}
      <form
        method="post"
        id="product_form_10508262282"
        acceptCharset="UTF-8"
        className="product-form product-form-product-template hidedropdown"
        encType="multipart/form-data"
        onSubmit={handleAddCart}
      >
        <div className="swatch clearfix swatch-0 option1" data-option-index="0">
          <div className="product-form__item">
            {product.colors.map((color) => (
              <div
                key={color}
                value={`${color}`}
                className="swatch-element color black available"
              >
                <input
                  className="swatchInput"
                  id={`swatch-0-${color}`}
                  type="radio"
                  name="option-0"
                  defaultValue={color}
                />
                <label
                  className="swatchLbl color small"
                  htmlFor={`swatch-0-${color}`}
                  style={{ backgroundColor: `${color}` }}
                  title={color}
                  onClick={() => setChooseColor(color)}
                ></label>
              </div>
            ))}
          </div>
        </div>
        <div className="swatch clearfix swatch-1 option2" data-option-index="1">
          <div className="product-form__item">
            {product.sizes.map((size) => (
              <div
                key={size}
                value={size}
                className="swatch-element xs available"
              >
                <input
                  className="swatchInput"
                  id={`swatch-1-${size}`}
                  type="radio"
                  name="option-1"
                  defaultValue={size}
                />
                <label
                  className="swatchLbl medium rectangle"
                  htmlFor={`swatch-1-${size}`}
                  title={size}
                  onClick={() => setChooseSize(size)}
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
        {product.quantity > 0 ? (
          <div className="product-action clearfix">
            <div className="product-form__item--quantity">
              <div className="wrapQtyBtn">
                <div className="qtyField">
                  <button
                    type="button"
                    className="qtyBtn minus"
                    onClick={() => setQty(qty - 1)}
                  >
                    <i className="fa anm anm-minus-r" aria-hidden="true"></i>
                  </button>
                  <input
                    type="text"
                    id="Quantity"
                    name="quantity"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="product-form__input qty"
                  />
                  <button
                    className="qtyBtn plus"
                    type="button"
                    onClick={() => setQty(qty + 1)}
                  >
                    <i className="fa anm anm-plus-r" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="product-form__item--submit">
              <button
                type="submit"
                name="add"
                className="btn product-form__cart-submit"
              >
                <span>Thêm vào giỏ hàng</span>
              </button>
            </div>
            <div
              className="shopify-payment-button"
              data-shopify="payment-button"
            >
              <button
                type="button"
                className="shopify-payment-button__button shopify-payment-button__button--unbranded"
              >
                mua ngay
              </button>
            </div>
          </div>
        ) : (
          <div className="product-action clearfix">
            <div
              className="shopify-payment-button"
              data-shopify="payment-button"
            >
              <button
                type="button"
                disabled
                className="shopify-payment-button__button shopify-payment-button__button--unbranded"
              >
                Sản phẩm tạm hết hàng.
              </button>
            </div>
          </div>
        )}
      </form>
      <br />

      <p id="freeShipMsg" className="freeShipMsg" data-price="199">
        <i className="fa fa-truck" aria-hidden="true"></i>
        Giao hàng miễn phí
      </p>
      <p className="shippingMsg">
        <i className="fa fa-clock-o" aria-hidden="true"></i>
        Khoảng <b id="fromDate">3 ngày</b> ~ <b id="fromDate">7 ngày</b> tùy khu
        vực
      </p>
      <div className="userViewMsg" data-user="20" data-time="11000">
        <i className="fa fa-users" aria-hidden="true"></i>
        <strong className="uersView">14</strong> Lượt xem sản phẩm
      </div>
    </div>
  );
};

export default RightProduct;

RightProduct.propTypes = {
  product: PropTypes.object,
};
