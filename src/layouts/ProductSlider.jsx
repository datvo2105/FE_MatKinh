import Slider from "react-slick";
import { Link } from "react-router-dom";
import { priceDiscount, countRating, formatPrice } from "../hooks/Func";
import PropTypes from "prop-types";

const ProductSlider = ({ listProduct }) => {
  const settingSlider = {
    infinite: listProduct.length >= 4 ? true : false,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: listProduct.length >= 4 ? 4 : listProduct.length,
    slidesToScroll: 1,
    variableWidth: true,
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
                    {formatPrice.format(product.price)}
                  </span>
                ) : (
                  <>
                    <span className="old-price">
                      {formatPrice.format(product.price)}
                    </span>
                    <span className="price">
                      {formatPrice.format(
                        priceDiscount(product.price, product.discount),
                      )}
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
