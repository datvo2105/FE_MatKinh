import React from "react";

const ListProducts = () => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
        <div className="productList">
          <button
            type="button"
            className="btn btn-filter d-block d-md-none d-lg-none">
            Product Filters
          </button>
          <div className="toolbar">
            <div className="filters-toolbar-wrapper">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                  <a
                    href="shop-left-sidebar.html"
                    title="Grid View"
                    className="change-view change-view--active">
                    <img src="assets/images/grid.jpg" alt="Grid" />
                  </a>
                  <a
                    href="shop-listview.html"
                    title="List View"
                    className="change-view">
                    <img src="assets/images/list.jpg" alt="List" />
                  </a>
                </div>
                <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                  <span className="filters-toolbar__product-count">
                    Showing: 22
                  </span>
                </div>
                <div className="col-4 col-md-4 col-lg-4 text-right">
                  <div className="filters-toolbar__item">
                    <label htmlFor="SortBy" className="hidden">
                      Sort
                    </label>
                    <select
                      name="SortBy"
                      id="SortBy"
                      defaultValue={"title-ascending"}
                      className="filters-toolbar__input filters-toolbar__input--sort">
                      <option value="title-ascending">Sort</option>
                      <option>Best Selling</option>
                      <option>Alphabetically, A-Z</option>
                      <option>Alphabetically, Z-A</option>
                      <option>Price, low to high</option>
                      <option>Price, high to low</option>
                      <option>Date, new to old</option>
                      <option>Date, old to new</option>
                    </select>
                    <input
                      className="collection-header__default-sort"
                      type="hidden"
                      value="manual"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-products grid--view-items">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
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
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Edna Dress</a>
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
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant5.jpg"
                        alt="image"
                      />
                    </li>
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant6.jpg"
                        alt="image"
                      />
                    </li>
                  </ul>
                </div>
                <div className="timermobile">
                  <div
                    className="saleTime desktop"
                    data-countdown="2022/03/01"></div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
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
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Elastic Waist Dress</a>
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
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant2-4.jpg"
                        alt="image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
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
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">3/4 Sleeve Kimono Dress</a>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
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
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add To Cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Cape Dress</a>
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
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant4-4.jpg"
                        alt="image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
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
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Paper Dress</a>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image17.jpg"
                      src="assets/images/product-images/product-image17.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image17-1.jpg"
                      src="assets/images/product-images/product-image17-1.jpg"
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
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add To Cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Buttercup Dress</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$420.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image18.jpg"
                      src="assets/images/product-images/product-image18.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image18-1.jpg"
                      src="assets/images/product-images/product-image18-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add To Cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Lima Shirt</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$698.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                  <ul className="swatches">
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant5-1.jpg"
                        alt="image"
                      />
                    </li>
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant5-1.jpg"
                        alt="image"
                      />
                    </li>
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant5-1.jpg"
                        alt="image"
                      />
                    </li>
                    <li className="swatch medium rounded">
                      <img
                        src="assets/images/product-images/variant5-1.jpg"
                        alt="image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image19.jpg"
                      src="assets/images/product-images/product-image19.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image19-1.jpg"
                      src="assets/images/product-images/product-image19-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
                        <i className="icon anm anm-heart-l"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-details text-center">
                  <div className="product-name">
                    <a href="#">Romary Dress</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$348.60</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image20.jpg"
                      src="assets/images/product-images/product-image20.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image20-1.jpg"
                      src="assets/images/product-images/product-image20-1.jpg"
                      alt="image"
                      title="product"
                    />
                    <div className="product-labels">
                      <span className="lbl pr-label3">Popular</span>
                    </div>
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Floral Sleeveless Dress</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$380.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image21.jpg"
                      src="assets/images/product-images/product-image21.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image21-1.jpg"
                      src="assets/images/product-images/product-image21-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Button Up Dress</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$400.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image22.jpg"
                      src="assets/images/product-images/product-image22.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image22-1.jpg"
                      src="assets/images/product-images/product-image22-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Lexie Shirt</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$200.00</span>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image23.jpg"
                      src="assets/images/product-images/product-image23.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image23-1.jpg"
                      src="assets/images/product-images/product-image23-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">One Shoulder Dress in Navy</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$1,048.60</span>
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
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image24.jpg"
                      src="assets/images/product-images/product-image24.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image24-1.jpg"
                      src="assets/images/product-images/product-image24-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Triangle Sleeveless Dress in Multi</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$684.60</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image25.jpg"
                      src="assets/images/product-images/product-image25.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image25-1.jpg"
                      src="assets/images/product-images/product-image25-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">ACB Top</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$280.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image26.jpg"
                      src="assets/images/product-images/product-image26.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image26-1.jpg"
                      src="assets/images/product-images/product-image26-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">A-Line Jacket</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$698.60</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item grid-view-item--sold-out">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="grid-view-item__image primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image27.jpg"
                      src="assets/images/product-images/product-image27.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="grid-view-item__image hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image27-1.jpg"
                      src="assets/images/product-images/product-image27-1.jpg"
                      alt="image"
                      title="product"
                    />
                    <span className="sold-out">
                      <span>Sold out</span>
                    </span>
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Camelia Reversible Jacket in Navy/Blue</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$488.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image28.jpg"
                      src="assets/images/product-images/product-image28.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image28-1.jpg"
                      src="assets/images/product-images/product-image28-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Wrinkled Tux Shirt in Navy</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$158.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image29.jpg"
                      src="assets/images/product-images/product-image29.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image29-1.jpg"
                      src="assets/images/product-images/product-image29-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">A-Line Mini Dress in Blue</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$348.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image30.jpg"
                      src="assets/images/product-images/product-image30.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image30-1.jpg"
                      src="assets/images/product-images/product-image30-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Asymmetric Dress in Black</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$578.00</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image31.jpg"
                      src="assets/images/product-images/product-image31.jpg"
                      alt="image"
                      title="product"
                    />
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image31-1.jpg"
                      src="assets/images/product-images/product-image31-1.jpg"
                      alt="image"
                      title="product"
                    />
                  </a>

                  <form
                    className="variants add"
                    action="#"
                    onClick={e=> e.preDefault()}
                    method="post">
                    <button className="btn btn-addto-cart" type="button">
                      Add to cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="event.preDefault()"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview">
                      <i className="icon anm anm-search-plus-r"></i>
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist">
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
                    <a href="#">Babydoll Bow Dress</a>
                  </div>
                  <div className="product-price">
                    <span className="price">$313.60</span>
                  </div>

                  <div className="product-review">
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                    <i className="font-13 fa fa-star-o"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="infinitpaginOuter">
          <div className="infinitpagin">
            <a href="#" className="btn loadMore">
              Load More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
