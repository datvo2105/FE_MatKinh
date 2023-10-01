import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { getAllProduct } from "../services/product.service";
import { priceDiscount, countRating } from "../hooks/Func";

const ProductSlider = ({ status }) => {
  const [listProduct, setListProduct] = useState([]);
  const params = {};

  const settingSlider = {
    infinite: listProduct.length >= 4 ? true : false,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: listProduct.length >= 4 ? 4 : listProduct.length,
    slidesToScroll: 1,
    variableWidth: true,
  };

  useEffect(() => {
    getAllProduct(params)
      .then((res) => res.record)
      .then((products) => {
        products.forEach((product) => {
          if (product.status.toUpperCase() === status.toUpperCase())
            setListProduct((list) => [...list, product]);
        });
      });
  }, [status]);

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

              <div
                className="saleTime desktop"
                data-countdown="2022/03/01"
              ></div>

              <form
                className="variants add"
                action="#"
                onClick={(e) => e.preventDefault()}
                method="post"
              >
                <button
                  className="btn btn-addto-cart"
                  type="button"
                  tabIndex="0"
                >
                  Add To Cart
                </button>
              </form>
              <div className="button-set">
                <a
                  href="event.preventDefault()"
                  title="Quick View"
                  className="quick-view-popup quick-view"
                  data-toggle="modal"
                  data-target="#content_quickview"
                >
                  <i className="icon anm anm-search-plus-r"></i>
                </a>
                <div className="wishlist-btn">
                  <a className="wishlist add-to-wishlist" href="wishlist.html">
                    <i className="icon anm anm-heart-l"></i>
                  </a>
                </div>
                <div className="compare-btn">
                  <a
                    className="compare add-to-compare"
                    href="compare.html"
                    title="Add to Compare"
                  >
                    <i className="icon anm anm-random-r"></i>
                  </a>
                </div>
              </div>
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
