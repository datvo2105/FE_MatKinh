import Slider from "react-slick";

const Banner = () => {
  const settingSlider = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      id: 0,
      title: "Shop Our New Collection",
      subtitle: "From Hight to low, classic or modern. We have you covered",
      img: "assets/images/slideshow-banners/home-mk-1.jpg",
    },
    {
      id: 1,
      title: "Summer Bikini Collection",
      subtitle: "Save up to 50% off this weekend only",
      img: "assets/images/slideshow-banners/home-mk-2.jpg",
    },
  ];

  return (
    <>
      <div className="slideshow slideshow-wrapper sliderFull">
        <div className="home-slideshow">
          <Slider {...settingSlider}>
            {slides.map((slide) => {
              return (
                <div className="slide" key={slide.id}>
                  <div className="blur-up lazyload bg-size">
                    <img
                      className="blur-up lazyload bg-img object-fit-cover"
                      data-src={slide.img}
                      src={slide.img}
                      alt={slide.title}
                      title={slide.title}
                    />
                    <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                      <div className="slideshow__text-content bottom">
                        <div className="wrap-caption center">
                          <h2 className="h1 mega-title slideshow__title">
                            {slide.title}
                          </h2>
                          <span className="mega-subtitle slideshow__subtitle">
                            {slide.subtitle}
                          </span>
                          <span className="btn">Shop now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
