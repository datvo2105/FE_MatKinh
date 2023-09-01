import React from "react";

const Content = () => {
  return (
    <>
      <div className="page section-header text-center mb-0">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Blog Gridview</h1>
          </div>
        </div>
      </div>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="index.html" title="Back to the home page">
            Home
          </a>
          <span aria-hidden="true">›</span>
          <span>Blog Gridview</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar">
            <div className="sidebar_tags">
              <div className="sidebar_widget categories">
                <div className="widget-title">
                  <h2>Category</h2>
                </div>
                <div className="widget-content">
                  <ul className="sidebar_categories">
                    <li className="lvl-1 ">
                      <a
                        href="http://annimexweb.com/"
                        className="site-nav lvl-1"
                      >
                        Beauty
                      </a>
                    </li>
                    <li className="lvl-1  active">
                      <a href="#" className="site-nav lvl-1">
                        fashion
                      </a>
                    </li>
                    <li className="lvl-1 ">
                      <a href="#" className="site-nav lvl-1">
                        summer
                      </a>
                    </li>
                    <li className="lvl-1 ">
                      <a href="#" className="site-nav lvl-1">
                        trend
                      </a>
                    </li>
                    <li className="lvl-1 ">
                      <a href="#" className="site-nav lvl-1">
                        winter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar_widget">
                <div className="widget-title">
                  <h2>Recent Posts</h2>
                </div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/blog/blog-post-sml-1.jpg"
                                src="assets/images/blog/blog-post-sml-1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="details">
                            {" "}
                            <a className="grid-view-item__title" href="#">
                              It's all about how you wear
                            </a>
                            <div className="grid-view-item__meta">
                              <span className="article__date">
                                {" "}
                                <time dateTime="2017-05-02T14:33:00Z">
                                  May 02, 2017
                                </time>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            {" "}
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/blog/blog-post-sml-2.jpg"
                                src="assets/images/blog/blog-post-sml-2.jpg"
                                alt=""
                              />
                            </a>{" "}
                          </div>
                          <div className="details">
                            {" "}
                            <a className="grid-view-item__title" href="#">
                              27 Days of Spring Fashion Recap
                            </a>
                            <div className="grid-view-item__meta">
                              <span className="article__date">
                                {" "}
                                <time dateTime="2017-05-02T14:33:00Z">
                                  May 02, 2017
                                </time>{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            {" "}
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/blog/blog-post-sml-3.jpg"
                                src="assets/images/blog/blog-post-sml-3.jpg"
                                alt=""
                              />
                            </a>{" "}
                          </div>
                          <div className="details">
                            {" "}
                            <a className="grid-view-item__title" href="#">
                              How to Wear The Folds Trend Four Ways
                            </a>
                            <div className="grid-view-item__meta">
                              <span className="article__date">
                                {" "}
                                <time dateTime="2017-05-02T14:14:00Z">
                                  May 02, 2017
                                </time>{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            {" "}
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/blog/blog-post-sml-4.jpg"
                                src="assets/images/blog/blog-post-sml-4.jpg"
                                alt=""
                              />
                            </a>{" "}
                          </div>
                          <div className="details">
                            {" "}
                            <a className="grid-view-item__title" href="#">
                              Accusantium doloremque
                            </a>
                            <div className="grid-view-item__meta">
                              <span className="article__date">
                                {" "}
                                <time dateTime="2017-05-02T14:12:00Z">
                                  May 02, 2017
                                </time>{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar_widget">
                <div className="widget-title">
                  <h2>Recent Comments</h2>
                </div>
                <div className="widget-content">
                  <div className="list list-sidebar-products">
                    <div className="grid">
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/recent-commnet-img.jpg"
                                src="assets/images/recent-commnet-img.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="details">
                            <div className="grid-view-item__meta">
                              <strong>Tim</strong> On{" "}
                              <a href="#">Lorem Ipsum</a>
                            </div>
                            <a className="grid-view-item__title" href="#">
                              On sait depuis longtemps que travailler avec
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            {" "}
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/recent-commnet-img.jpg"
                                src="assets/images/recent-commnet-img.jpg"
                                alt=""
                              />
                            </a>{" "}
                          </div>
                          <div className="details">
                            <div className="grid-view-item__meta">
                              <strong>Joy</strong> On{" "}
                              <a href="#">Lorem Ipsum</a>
                            </div>
                            <a className="grid-view-item__title" href="#">
                              On sait depuis longtemps que travailler avec
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            {" "}
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/recent-commnet-img.jpg"
                                src="assets/images/recent-commnet-img.jpg"
                                alt=""
                              />
                            </a>{" "}
                          </div>
                          <div className="details">
                            <div className="grid-view-item__meta">
                              <strong>Jhon</strong> On{" "}
                              <a href="#">Lorem Ipsum</a>
                            </div>
                            <a className="grid-view-item__title" href="#">
                              On sait depuis longtemps que travailler avec
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid__item">
                        <div className="mini-list-item">
                          <div className="mini-view_image">
                            {" "}
                            <a className="grid-view-item__link" href="#">
                              <img
                                className="grid-view-item__image blur-up lazyload"
                                data-src="assets/images/recent-commnet-img.jpg"
                                src="assets/images/recent-commnet-img.jpg"
                                alt=""
                              />
                            </a>{" "}
                          </div>
                          <div className="details">
                            <div className="grid-view-item__meta">
                              <strong>Tim</strong> On{" "}
                              <a href="#">Lorem Ipsum</a>
                            </div>
                            <a className="grid-view-item__title" href="#">
                              On sait depuis longtemps que travailler avec
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar_widget tags-clouds">
                <div className="widget-title">
                  <h2>Tags Cloud</h2>
                </div>
                <div className="widget-content">
                  <ul>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Clothes</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Furniture</a>
                    </li>
                    <li>
                      <a href="#">Sun Glasses</a>
                    </li>
                    <li>
                      <a href="#">Winter</a>
                    </li>
                    <li>
                      <a href="#">Autoparts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
            <div className="custom-search">
              <form
                action="http://annimexweb.com/search"
                method="get"
                className="input-group search-header search"
                role="search"
                style={{ position: "relative" }}
              >
                <input
                  className="search-header__input search__input input-group__field"
                  type="search"
                  name="q"
                  placeholder="Search"
                  aria-label="Search"
                  autoComplete="off"
                />
                <span className="input-group__btn">
                  <button className="btnSearch" type="submit">
                    {" "}
                    <i className="icon anm anm-search-l"></i>{" "}
                  </button>
                </span>
              </form>
            </div>
            <div className="blog--list-view">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-1.jpg"
                      src="assets/images/blog/blog-post-1.jpg"
                      alt="It's all about how you wear"
                    />
                  </a>
                  <h2 className="h3">
                    <a href="blog-left-sidebar.html">
                      It's all about how you wear
                    </a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      On sait depuis longtemps que travailler avec du texte
                      lisible et contenant du sens est source de distractions,
                      et empêche de se concentrer sur la m...{" "}
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-2.jpg"
                      src="assets/images/blog/blog-post-2.jpg"
                      alt="27 Days of Spring Fashion Recap"
                    />
                  </a>
                  <h2 className="h3">
                    <a href="blog-right-sidebar.html">
                      27 Days of Spring Fashion Recap
                    </a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      On sait depuis longtemps que travailler avec du texte
                      lisible et contenant du sens est source de distractions,
                      et empêche de se concentrer sur la m...{" "}
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-3.jpg"
                      src="assets/images/blog/blog-post-3.jpg"
                      alt="How to Wear The Folds Trend Four Ways"
                    />
                  </a>
                  <h2 className="h3">
                    <a href="#">How to Wear The Folds Trend Four Ways</a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      On sait depuis longtemps que travailler avec du texte
                      lisible et contenant du sens est source de distractions,
                      et empêche de se concentrer sur la m...{" "}
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-4.jpg"
                      src="assets/images/blog/blog-post-4.jpg"
                      alt="Accusantium doloremque"
                    />
                  </a>
                  <h2 className="h3">
                    <a href="#">Accusantium doloremque</a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      On sait depuis longtemps que travailler avec du texte
                      lisible et contenant du sens est source de distractions,
                      et empêche de se concentrer sur la m...{" "}
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-5.jpg"
                      src="assets/images/blog/blog-post-5.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="h3">
                    <a href="#">Neque porro quisquam est</a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-6.jpg"
                      src="assets/images/blog/blog-post-6.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="h3">
                    <a href="#">Contrary to popular belief</a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 article">
                  <a className="article_featured-image" href="#">
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/blog-post-7.jpg"
                      src="assets/images/blog/blog-post-7.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="h3">
                    <a href="#">The standard chunk of Lorem</a>
                  </h2>
                  <ul className="publish-detail">
                    <li>
                      <i className="anm anm-user-al" aria-hidden="true"></i>{" "}
                      User
                    </li>
                    <li>
                      <i className="icon anm anm-clock-r"></i>{" "}
                      <time dateTime="2017-05-02">May 02, 2017</time>
                    </li>
                  </ul>
                  <div className="rte">
                    <p>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum
                    </p>
                  </div>
                  <p>
                    <a href="#" className="btn btn-secondary btn--small">
                      Read more{" "}
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
              <hr />
              <div className="pagination">
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li className="next">
                    <a href="#">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
