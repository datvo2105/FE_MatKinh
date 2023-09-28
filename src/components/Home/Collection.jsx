import { useState, useEffect } from "react";
import Slider from "react-slick";
import { getAllProduct } from "../../services/product.service";
import { Link } from "react-router-dom";

const Collection = ({ title, desc, status }) => {
  const [listNew, setListNew] = useState([]);

  const settingSlider = {
    infinite: listNew.length >= 4 ? true : false,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: listNew.length >= 4 ? 4 : listNew.length,
    slidesToScroll: 1,
    variableWidth: true,
  };

  useEffect(() => {
    getAllProduct()
      .then((res) => res.data.record)
      .then((listProduct) => {
        listProduct.forEach((product) => {
          if (product.status.toUpperCase() === status.toUpperCase())
            setListNew((list) => [...list, product]);
        });
      });
  }, [status]);

  const countRating = (rate) => {
    const rating = [];
    const isStar = "font-13 fa fa-star";
    const nonStar = "font-13 fa fa-star-o";
    let nonRate = 5 - rate;
    for (let star = 5; star >= 1; star--) {
      if (rate > 0) {
        rate--;
        rating.push(isStar);
      } else if (nonRate > 0) {
        nonRate--;
        rating.push(nonStar);
      }
    }
    return rating;
  };

  const priceDiscount = (price, discount) => {
    let newPrice = price;
    return (newPrice = newPrice - (price * discount) / 100);
  };

  return (
    <>
      <div className="tab-slider-product section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-header text-center">
                <h2 className="h2">{title}</h2>
                <p>{desc}</p>
              </div>
              <div className="tabs-listing">
                <div className="tab_container">
                  <div className="tab_content grid-products d-block">
                    <div className="productSlider">
                      <Slider {...settingSlider}>
                        {listNew.map((product) => {
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
                                    {product.status.toUpperCase() ==
                                    "DEFAULT" ? (
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
                                      <span className="lbl pr-label2">
                                        -{product.discount}%
                                      </span>
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
                                    <a
                                      className="wishlist add-to-wishlist"
                                      href="wishlist.html"
                                    >
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
                                      <span className="old-price">
                                        $ {product.price}
                                      </span>
                                      <span className="price">
                                        $
                                        {priceDiscount(
                                          product.price,
                                          product.discount,
                                        )}
                                      </span>
                                    </>
                                  )}
                                </div>

                                <div className="product-review">
                                  {countRating(product.rate).map(
                                    (star, index) => (
                                      <i className={star} key={index}></i>
                                    ),
                                  )}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Collection;
