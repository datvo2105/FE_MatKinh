import Slider from "react-slick";

const Category = () => {
  const settingSlider = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="collection-box section">
        <div className="container-fluid">
          <div className="collection-grid">
            <Slider {...settingSlider}>
              <div className="collection-grid-item">
                <div className="collection-grid-item__link">
                  <img
                    data-src="assets/images/collection/fashion.jpg"
                    src="assets/images/collection/fashion.jpg"
                    alt="Fashion"
                    className="blur-up lazyload"
                    style={{
                      height: "356.5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="collection-grid-item">
                <div className="collection-grid-item__link">
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/collection/cosmetic.jpg"
                    src="assets/images/collection/cosmetic.jpg"
                    alt="Cosmetic"
                    style={{
                      height: "356.5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="collection-grid-item blur-up lazyloaded">
                <div className="collection-grid-item__link">
                  <img
                    data-src="assets/images/collection/bag.jpg"
                    src="assets/images/collection/bag.jpg"
                    alt="Bag"
                    className="blur-up lazyload"
                    style={{
                      height: "356.5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="collection-grid-item">
                <div className="collection-grid-item__link">
                  <img
                    data-src="assets/images/collection/accessories.jpg"
                    src="assets/images/collection/accessories.jpg"
                    alt="Accessories"
                    className="blur-up lazyload"
                    style={{
                      height: "356.5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="collection-grid-item">
                <div className="collection-grid-item__link">
                  <img
                    data-src="assets/images/collection/shoes.jpg"
                    src="assets/images/collection/shoes.jpg"
                    alt="Shoes"
                    className="blur-up lazyload"
                    style={{
                      height: "356.5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="collection-grid-item">
                <div className="collection-grid-item__link">
                  <img
                    data-src="assets/images/collection/jewellry.jpg"
                    src="assets/images/collection/jewellry.jpg"
                    alt="Jewellry"
                    className="blur-up lazyload"
                    style={{
                      height: "356.5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="section logo-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="logo-bar d-flex justify-content-around">
                <div className="logo-bar__item">
                  <img
                    src="assets/images/logo/brandlogo1.png"
                    alt=""
                    title=""
                  />
                </div>
                <div className="logo-bar__item">
                  <img
                    src="assets/images/logo/brandlogo2.png"
                    alt=""
                    title=""
                  />
                </div>
                <div className="logo-bar__item">
                  <img
                    src="assets/images/logo/brandlogo3.png"
                    alt=""
                    title=""
                  />
                </div>
                <div className="logo-bar__item">
                  <img
                    src="assets/images/logo/brandlogo4.png"
                    alt=""
                    title=""
                  />
                </div>
                <div className="logo-bar__item">
                  <img
                    src="assets/images/logo/brandlogo5.png"
                    alt=""
                    title=""
                  />
                </div>
                <div className="logo-bar__item">
                  <img
                    src="assets/images/logo/brandlogo6.png"
                    alt=""
                    title=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
