import { useEffect, useState } from "react";
import { getOneProduct } from "../../services/product.service";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../../layouts/ProductSlider";
import Slider from "react-slick";
import { priceDiscount, countRating } from "../../hooks/Func";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  const settingSlider = {
    infinite: true,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  return (
    product && (
      <>
        <div id="MainContent" className="main-content" role="main">
          <div className="bredcrumbWrap">
            <div className="p-2 mt-5"></div>
            <div className="container breadcrumbs">
              <Link to="/" title="Back to the home page">
                Trang Chủ
              </Link>
              <span aria-hidden="true">›</span>
              <span>
                <Link to="/product" title="Back to the home page">
                  Cửa Hàng
                </Link>
                <span aria-hidden="true">›</span>
                <span>
                  <Link to={`/product/${id}`} title="Back to the home page">
                    {product.name}
                  </Link>
                </span>
              </span>
            </div>
          </div>

          <div
            id="ProductSection-product-template"
            className="product-template__container prstyle1 container"
          >
            <div className="product-single" style={{ height: 740 }}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-details-img">
                    <div className="product-thumb">
                      <div
                        id="gallery"
                        className="product-dec-slider-2 product-tab-left"
                      >
                        <Slider {...settingSlider}>
                          {product.images.map((image, index) => {
                            if (index != 0)
                              return (
                                <Link
                                  key={index}
                                  data-image={image}
                                  data-zoom-image={image}
                                  className="slick-slide slick-cloned"
                                  data-slick-index={index}
                                  aria-hidden="true"
                                  tabIndex="-1"
                                >
                                  <img
                                    className="blur-up lazyload"
                                    src={image}
                                    style={{
                                      width: "100%",
                                      height: 90,
                                      objectFit: "contain",
                                    }}
                                    alt=""
                                  />
                                </Link>
                              );
                          })}
                        </Slider>
                      </div>
                    </div>
                    <div className="zoompro-wrap product-zoom-right pl-20">
                      <div className="zoompro-span">
                        <img
                          className="blur-up lazyload zoompro"
                          data-zoom-image={product.images[0]}
                          alt=""
                          style={{
                            width: 500,
                            height: 730,
                            objectFit: "contain",
                          }}
                          src={product.images[0]}
                        />
                      </div>
                      <div className="product-labels">
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
                          <span className="lbl pr-label2">
                            -{product.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-single__meta">
                    <h1 className="product-single__title">{product.name}</h1>
                    <div className="product-nav clearfix"></div>
                    <div className="prInfoRow">
                      <div className="product-stock">
                        <span className="instock">In Stock</span>
                        <span className="outstock hide">Unavailable</span>
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
                      <span className="visually-hidden">Regular price</span>
                      {product.discount > 0 ? (
                        <>
                          <s id="ComparePrice-product-template">
                            <span className="money mr-1">
                              $ {product.price}
                            </span>
                          </s>
                          <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                            <span id="ProductPrice-product-template">
                              <span className="money">
                                ${" "}
                                {priceDiscount(product.price, product.discount)}
                              </span>
                            </span>
                          </span>
                          <span className="discount-badge">
                            <span className="devider">|</span>&nbsp;
                            <span>You Save</span>
                            <span
                              id="SaveAmount-product-template"
                              className="ml-1 product-single__save-amount"
                            >
                              <span className="money">
                                $
                                {product.price -
                                  priceDiscount(
                                    product.price,
                                    product.discount,
                                  )}
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
                              <span className="money">$ {product.price}</span>
                            </span>
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="product-single__description rte">
                    <span>{product.desc}</span>
                  </div>
                  <div id="quantity_message">
                    <span className="items">{product.quantity}</span> in stock.
                  </div>
                  <form
                    method="post"
                    action="http://annimexweb.com/cart/add"
                    id="product_form_10508262282"
                    acceptCharset="UTF-8"
                    className="product-form product-form-product-template hidedropdown"
                    encType="multipart/form-data"
                  >
                    <div
                      className="swatch clearfix swatch-0 option1"
                      data-option-index="0"
                    >
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
                            ></label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="swatch clearfix swatch-1 option2"
                      data-option-index="1"
                    >
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
                            >
                              {size}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="infolinks">
                      <a href="#sizechart" className="sizelink btn">
                        {" "}
                        Size Guide
                      </a>
                    </p>
                    <div className="product-action clearfix">
                      <div className="product-form__item--quantity">
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <a
                              className="qtyBtn minus"
                              href="event.preDefault();"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              defaultValue="1"
                              className="product-form__input qty"
                            />
                            <a
                              className="qtyBtn plus"
                              href="event.preDefault();"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-form__item--submit">
                        <button
                          type="button"
                          name="add"
                          className="btn product-form__cart-submit"
                        >
                          <span>Add to cart</span>
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
                          Buy it now
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="display-table shareRow">
                    <div className="display-table-cell text-right">
                      <div className="social-sharing">
                        <a
                          target="_blank"
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-facebook"
                          title="Share on Facebook"
                        >
                          <i
                            className="fa fa-facebook-square"
                            aria-hidden="true"
                          ></i>
                          <span className="share-title" aria-hidden="true">
                            Share
                          </span>
                        </a>
                        <a
                          target="_blank"
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-twitter"
                          title="Tweet on Twitter"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true">
                            Tweet
                          </span>
                        </a>
                        <a
                          href="#"
                          title="Share on google+"
                          className="btn btn--small btn--secondary btn--share"
                        >
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                          <span className="share-title" aria-hidden="true">
                            Google+
                          </span>
                        </a>
                        <a
                          target="_blank"
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-pinterest"
                          title="Pin on Pinterest"
                        >
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true">
                            Pin it
                          </span>
                        </a>
                        <a
                          href="#"
                          className="btn btn--small btn--secondary btn--share share-pinterest"
                          title="Share by Email"
                          target="_blank"
                        >
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <span className="share-title" aria-hidden="true">
                            Email
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <p id="freeShipMsg" className="freeShipMsg" data-price="199">
                    <i className="fa fa-truck" aria-hidden="true"></i> GETTING
                    CLOSER! ONLY
                    <b className="freeShip">
                      <span
                        className="money"
                        data-currency-usd="$199.00"
                        data-currency="USD"
                      >
                        $199.00
                      </span>
                    </b>
                    AWAY FROM <b>FREE SHIPPING!</b>
                  </p>
                  <p className="shippingMsg">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                    ESTIMATED DELIVERY BETWEEN <b id="fromDate">Wed. May 1</b>{" "}
                    and
                    <b id="toDate">Tue. May 7</b>.
                  </p>
                  <div className="userViewMsg" data-user="20" data-time="11000">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <strong className="uersView">14</strong> PEOPLE ARE LOOKING
                    FOR THIS PRODUCT
                  </div>
                </div>
              </div>
            </div>

            <div className="related-product grid-products">
              <header className="section-header">
                <h2 className="section-header__title text-center h2">
                  <span>New</span>
                </h2>
              </header>
              <div className="productPageSlider">
                <ProductSlider status="new" />
              </div>
            </div>
            <div className="prFeatures">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/credit-card.png"
                    alt="Safe Payment"
                    title="Safe Payment"
                  />
                  <div className="details">
                    <h3>Safe Payment</h3>
                    Pay with the world's most payment methods.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/shield.png"
                    alt="Confidence"
                    title="Confidence"
                  />
                  <div className="details">
                    <h3>Confidence</h3>
                    Protection covers your purchase and personal data.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/worldwide.png"
                    alt="Worldwide Delivery"
                    title="Worldwide Delivery"
                  />
                  <div className="details">
                    <h3>Worldwide Delivery</h3>
                    FREE &amp; fast shipping to over 200+ countries &amp;
                    regions.
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
                  <img
                    src="../../../public/assets/images/phone-call.png"
                    alt="Hotline"
                    title="Hotline"
                  />
                  <div className="details">
                    <h3>Hotline</h3>
                    Talk to help line for your question on 4141 456 789, 4125
                    666 888
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Product;
