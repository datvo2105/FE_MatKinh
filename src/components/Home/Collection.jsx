import React from "react";
import Slider from "react-slick";

const Collection = () => {
  const settingSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <>
      <div className="tab-slider-product section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-header text-center">
                <h2 className="h2">New Arrivals</h2>
                <p>Browse the huge variety of our products</p>
              </div>
              <div className="tabs-listing">
                <ul className="tabs clearfix">
                  <li className="active" rel="tab1">
                    Glasses
                  </li>
                  <li rel="tab2">Lenes</li>
                  <li rel="tab3">Sale</li>
                </ul>
                <div className="tab_container">
                  {/* display block  */}
                  <div id="tab1" className="tab_content grid-products d-block">
                    <div className="productSlider">
                      <Slider {...settingSlider}>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload "
                                style={{
                                  height: "392px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                                data-src="assets/images/product-images/product-image1.jpg"
                                src="assets/images/product-images/product-image1.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image1-1.jpg"
                                src="assets/images/product-images/product-image1-1.jpg"
                                alt="image"
                                title="product"
                              />
                              <div className="product-labels rectangular">
                                <span className="lbl on-sale">-16%</span>
                                <span className="lbl pr-label1">new</span>
                              </div>
                            </a>

                            <div
                              className="saleTime desktop"
                              data-countdown="2022/03/01"></div>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Edna Dress</a>
                            </div>
                            <div className="product-price">
                              <span className="old-price">$500.00</span>
                              <span className="price">$600.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                            <ul className="swatches">
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant1.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant2.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant4.jpg"
                                  alt="image"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                style={{
                                  height: "392px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                                data-src="assets/images/product-images/product-image2.jpg"
                                src="assets/images/product-images/product-image2.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image2-1.jpg"
                                src="assets/images/product-images/product-image2-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Select Options
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Elastic Waist Dress
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$748.00</span>
                            </div>
                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                            </div>
                            <ul className="swatches">
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant2-1.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant2-2.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant2-3.jpg"
                                  alt="image"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                style={{
                                  height: "392px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                                data-src="assets/images/product-images/product-image3.jpg"
                                src="assets/images/product-images/product-image3.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image3-1.jpg"
                                src="assets/images/product-images/product-image3-1.jpg"
                                alt="image"
                                title="product"
                              />
                              <div className="product-labels rectangular">
                                <span className="lbl pr-label2">Hot</span>
                              </div>
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                3/4 Sleeve Kimono Dress
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$550.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                            <ul className="swatches">
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-1.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-2.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-3.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-4.jpg"
                                  alt="image"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                style={{
                                  height: "392px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                                data-src="assets/images/product-images/product-image4.jpg"
                                src="assets/images/product-images/product-image4.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image4-1.jpg"
                                src="assets/images/product-images/product-image4-1.jpg"
                                alt="image"
                                title="product"
                              />
                              <div className="product-labels">
                                <span className="lbl on-sale">Sale</span>
                              </div>
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Cape Dress</a>
                            </div>
                            <div className="product-price">
                              <span className="old-price">$900.00</span>
                              <span className="price">$788.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                            <ul className="swatches">
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant4-1.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant4-2.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant4-3.jpg"
                                  alt="image"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                style={{
                                  height: "392px",
                                  width: "100%",
                                  objectFit: "cover",
                                }}
                                data-src="assets/images/product-images/product-image5.jpg"
                                src="assets/images/product-images/product-image5.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image5-1.jpg"
                                src="assets/images/product-images/product-image5-1.jpg"
                                alt="image"
                                title="product"
                              />
                              <div className="product-labels">
                                <span className="lbl on-sale">Sale</span>
                              </div>
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Select Options
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Paper Dress</a>
                            </div>
                            <div className="product-price">
                              <span className="price">$550.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                            </div>
                            <ul className="swatches">
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-1.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-2.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-3.jpg"
                                  alt="image"
                                />
                              </li>
                              <li className="swatch medium rounded">
                                <img
                                  src="assets/images/product-images/variant3-4.jpg"
                                  alt="image"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                  <div id="tab2" className="tab_content grid-products">
                    <div className="productSlider">
                      <Slider {...settingSlider}>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image6.jpg"
                                src="assets/images/product-images/product-image6.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image6-1.jpg"
                                src="assets/images/product-images/product-image6-1.jpg"
                                alt="image"
                                title="product"
                              />
                              <div className="product-labels rectangular">
                                <span className="lbl on-sale">-16%</span>
                                <span className="lbl pr-label1">new</span>
                              </div>
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Zipper Jacket</a>
                            </div>
                            <div className="product-price">
                              <span className="price">$788.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image7.jpg"
                                src="assets/images/product-images/product-image7.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image7-1.jpg"
                                src="assets/images/product-images/product-image7-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Select Options
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Zipper Jacket</a>
                            </div>
                            <div className="product-price">
                              <span className="price">$748.00</span>
                            </div>
                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image8.jpg"
                                src="assets/images/product-images/product-image8.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image8-1.jpg"
                                src="assets/images/product-images/product-image8-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Workers Shirt Jacket
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$238.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image9.jpg"
                                src="assets/images/product-images/product-image9.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image9-1.jpg"
                                src="assets/images/product-images/product-image9-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Watercolor Sport Jacket in Brown/Blue
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$348.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image10.jpg"
                                src="assets/images/product-images/product-image10.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image10-1.jpg"
                                src="assets/images/product-images/product-image10-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Washed Wool Blazer
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$1,078.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                  <div id="tab3" className="tab_content grid-products">
                    <div className="productSlider">
                      <Slider {...settingSlider}>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image11.jpg"
                                src="assets/images/product-images/product-image11.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image11-1.jpg"
                                src="assets/images/product-images/product-image11-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Azur Bracelet in Blue Azurite
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$168.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image12.jpg"
                                src="assets/images/product-images/product-image12.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image12-1.jpg"
                                src="assets/images/product-images/product-image12-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Select Options
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Bi-Goutte Earrings
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$58.00</span>
                            </div>
                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image13.jpg"
                                src="assets/images/product-images/product-image13.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image13-1.jpg"
                                src="assets/images/product-images/product-image13-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">
                                Ashton Necklace
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$228.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image14.jpg"
                                src="assets/images/product-images/product-image14.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image14-1.jpg"
                                src="assets/images/product-images/product-image14-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Ara Ring</a>
                            </div>
                            <div className="product-price">
                              <span className="price">$198.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star-o"></i>
                              <i className="font-13 fa fa-star-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 item">
                          <div className="product-image">
                            <a href="short-description.html">
                              <img
                                className="primary blur-up lazyload"
                                data-src="assets/images/product-images/product-image15.jpg"
                                src="assets/images/product-images/product-image15.jpg"
                                alt="image"
                                title="product"
                              />
                              <img
                                className="hover blur-up lazyload"
                                data-src="assets/images/product-images/product-image15-1.jpg"
                                src="assets/images/product-images/product-image15-1.jpg"
                                alt="image"
                                title="product"
                              />
                            </a>

                            <form
                              className="variants add"
                              action="#"
                              onClick={(e) => e.preventDefault()}
                              method="post">
                              <button
                                className="btn btn-addto-cart"
                                type="button"
                                tabIndex="0">
                                Add To Cart
                              </button>
                            </form>
                            <div className="button-set">
                              <a
                                href="event.preventDefault()"
                                title="Quick View"
                                className="quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview">
                                <i className="icon anm anm-search-plus-r"></i>
                              </a>
                              <div className="wishlist-btn">
                                <a
                                  className="wishlist add-to-wishlist"
                                  href="wishlist.html">
                                  <i className="icon anm anm-heart-l"></i>
                                </a>
                              </div>
                              <div className="compare-btn">
                                <a
                                  className="compare add-to-compare"
                                  href="compare.html"
                                  title="Add to Compare">
                                  <i className="icon anm anm-random-r"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="product-details text-center">
                            <div className="product-name">
                              <a href="short-description.html">Ara Ring</a>
                            </div>
                            <div className="product-price">
                              <span className="price">$198.00</span>
                            </div>

                            <div className="product-review">
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                              <i className="font-13 fa fa-star"></i>
                            </div>
                          </div>
                        </div>
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
