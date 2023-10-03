import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { priceDiscount, countRating } from "../hooks/Func";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getShipping } from "../services/order.service";
import { addToCart } from "../features/orderSlice";

const ProductSlider = ({ listProduct }) => {
  const settingSlider = {
    infinite: listProduct.length >= 4 ? true : false,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: listProduct.length >= 4 ? 4 : listProduct.length,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const dispatch = useDispatch();
  const [chooseSize, setChooseSize] = useState("");
  const [chooseColor, setChooseColor] = useState("");
  const [statusShip, setStatusShip] = useState();
  const [qty, setQty] = useState(1);

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

  const handleAddCart = (product) => {
    dispatch(
      addToCart({
        product: product._id,
        quantity: 1,
        size: product.sizes[0],
        color: product.colors[0],
        status: "cart",
        shipping: statusShip,
      }),
    );
  };

  return (
    <Slider {...settingSlider}>
      {listProduct.map((product) => {
        return (
          <div key={product._id} className="col-12 item">
            <div className="product-image">
              <Link to={`/product/${product._id}`}>
                <img
                  className="primary blur-up lazyload "
                  data-src={product.images[0]}
                  src={product.images[0]}
                  style={{
                    height: 280,
                    width: 280,
                    objectFit: "cover",
                  }}
                  alt="image"
                  title="product"
                />
                <img
                  className="hover blur-up lazyload"
                  data-src={product.images[1]}
                  src={product.images[1]}
                  alt="image"
                  title="product"
                />
                <div className="product-labels rectangular">
                  {product.status.toUpperCase() == "DEFAULT" ? (
                    ""
                  ) : (
                    <span
                      className={`lbl ${
                        product.status.toUpperCase() == "NEW"
                          ? "pr-label1"
                          : "on-sale"
                      }`}
                    >
                      {product.status}
                    </span>
                  )}
                  {product.discount > 0 ? (
                    <span className="lbl pr-label2">-{product.discount}%</span>
                  ) : (
                    ""
                  )}
                </div>
              </Link>

              <form className="variants add">
                <button
                  className="btn btn-addto-cart"
                  type="button"
                  tabIndex="0"
                  onClick={() => handleAddCart(product)}
                >
                  Add To Cart
                </button>
              </form>
            </div>
            <div className="product-details text-center">
              <div className="product-name">
                <Link
                  to={`/product/${product._id}`}
                  style={{
                    fontWeight: 600,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.name}
                </Link>
              </div>
              <div className="product-price">
                {product.discount == 0 ? (
                  <span
                    className="price"
                    style={{
                      color: "#e95144 ",
                    }}
                  >
                    $ {product.price}
                  </span>
                ) : (
                  <>
                    <span className="old-price">$ {product.price}</span>
                    <span className="price">
                      ${priceDiscount(product.price, product.discount)}
                    </span>
                  </>
                )}
              </div>

              <div className="product-review">
                {countRating(product.rate).map((star, index) => (
                  <i className={star} key={index}></i>
                ))}
              </div>
              <ul className="swatches">
                {product.colors.map((color) => (
                  <li
                    className="swatch medium rounded mx-1"
                    style={{
                      backgroundColor: `${color}`,
                    }}
                    key={color}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ProductSlider;

ProductSlider.propTypes = {
  listProduct: PropTypes.array,
};
