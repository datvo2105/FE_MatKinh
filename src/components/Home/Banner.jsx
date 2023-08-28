import React from 'react'
import Slider from "react-slick"

const Banner = () => {
    const settingSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <div className="slideshow slideshow-wrapper pb-section sliderFull">
                <div className="home-slideshow">
                    <Slider {...settingSlider}>
                        <div className="slide">
                            <div className="blur-up lazyload bg-size">
                                <img className="blur-up lazyload bg-img" data-src="assets/images/slideshow-banners/belle-banner1.jpg" src="assets/images/slideshow-banners/belle-banner1.jpg" alt="Shop Our New Collection" title="Shop Our New Collection" />
                                <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                                    <div className="slideshow__text-content bottom">
                                        <div className="wrap-caption center">
                                            <h2 className="h1 mega-title slideshow__title">Shop Our New Collection</h2>
                                            <span className="mega-subtitle slideshow__subtitle">From Hight to low, classic or modern. We have you covered</span>
                                            <span className="btn">Shop now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="blur-up lazyload bg-size">
                                <img className="blur-up lazyload bg-img" data-src="assets/images/slideshow-banners/belle-banner2.jpg" src="assets/images/slideshow-banners/belle-banner2.jpg" alt="Summer Bikini Collection" title="Summer Bikini Collection" />
                                <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                                    <div className="slideshow__text-content bottom">
                                        <div className="wrap-caption center">
                                            <h2 className="h1 mega-title slideshow__title">Summer Bikini Collection</h2>
                                            <span className="mega-subtitle slideshow__subtitle">Save up to 50% off this weekend only</span>
                                            <span className="btn">Shop now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Banner
