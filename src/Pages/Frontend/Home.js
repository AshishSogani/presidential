import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import { getImages } from '../../Componments/Frontend/const';
import HomeAbout from '../../Componments/Frontend/Home/HomeAbout';
import ContactForm from '../../Componments/Frontend/Common/ContactForm';
import ScrollMagicSlider from '../../Componments/Frontend/Home/ScrollMagicSlider';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const carData = [
    {
        image: 'fv-img2.jpg',
        title: '2023 Bentley Bentayga',
        price: '$199,995',
        mileage: '3,767mi',
    },
    {
        image: 'fv-img3.jpg',
        title: '2016 Bentley Continental GT',
        price: '$109,995',
        mileage: '11,682mi',
    },
    {
        image: 'fv-img6.jpg',
        title: '2019 Chevrolet Corvette',
        price: '$99,995',
        mileage: '3,026mi',
    },
]
const carData1 = [
    {
        image: 'fv-img1.jpg',
        title: '2024 Audi S5 Cabriolet',
        price: '$64,995',
        mileage: '575mi',
    },
    {
        image: 'fv-img4.jpg',
        title: '1969 Chevrolet Camaro SS',
        price: '$69,995',
        mileage: '7,194mi',
    },
    {
        image: 'fv-img5.jpg',
        title: '2021 Chevrolet Corvette',
        price: '$71,995',
        mileage: '8,030mi',
    },
]
const Home = () => {
    const marqueeRef = useRef(null);
    // useEffect(() => {
    //     const root = document.documentElement;
    //     const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    //     const marqueeContent = marqueeRef.current;

    //     if (marqueeContent) {
    //         root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    //         for (let i = 0; i < marqueeElementsDisplayed; i++) {
    //             marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    //         }
    //     }
    // }, []);
    var slSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 8,
                    speed: 12000,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }]
    };
    var featuredSettings1 = {
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        rtl: true
    };
    var featuredSettings2 = {
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
    };
    const [isMobileView, setIsMobileView] = useState(false);
    const updateView = () => {
        setIsMobileView(window.innerWidth <= 991);
    };
    useEffect(() => {
        updateView();
    }, []);
    return (
        <>
            <div className='parallax-wrap'>
                <section className="banner-wrap home-banner py-0">
                    <div className='video-block'>
                        <div className='video-container'>
                            <iframe width="100%" height="750" src="https://www.youtube.com/embed/2_lpbI6f7X8?si=RvEAIWU9fWN4HmPA&autoplay=1&mute=1&loop=1&playlist=2_lpbI6f7X8&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='banner-pos'>
                        <div className='banner-title wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s"><span className='text-theme'>Experience Excellence</span> <br />Family Owned & Operated</div>
                        <div className='mt-50 text-center wow fadeInUp' data-wow-duration="1s" data-wow-delay="1s">
                            <button className='btn-black-theme' type='button'>View Inventory</button>
                        </div>
                    </div>
                </section>
                <section className='services-wrap'>
                    <div className='container'>
                        <div className='row mlr-40'>
                            <div className='col-md-6 wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">
                                <a href="#" className='service-box d-inline-block'>
                                    <img src={getImages('slide-1.png')} alt='' />
                                    <div className='service-pos'><span>View Inventory</span></div>
                                </a>
                            </div>
                            <div className='col-md-6 wow fadeInUp' data-wow-duration="1s" data-wow-delay="1s">
                                <a href="#" className='service-box d-inline-block'>
                                    <img src={getImages('slide-2.png')} alt='' />
                                    <div className='service-pos'><span>Sell or Trade</span></div>
                                </a>
                            </div>
                            <div className='col-md-6 wow fadeInUp' data-wow-duration="1s" data-wow-delay="1.5s">
                                <a href="#" className='service-box d-inline-block'>
                                    <img src={getImages('slide-3.png')} alt='' />
                                    <div className='service-pos'><span>Service Center</span></div>
                                </a>
                            </div>
                            <div className='col-md-6 wow fadeInUp' data-wow-duration="1s" data-wow-delay="2s">
                                <a href="#" className='service-box d-inline-block'>
                                    <img src={getImages('slide-4.png')} alt='' />
                                    <div className='service-pos'><span>Specials</span></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='featured-vehicles-wrap'>
                    <div className='container'>
                        <div className='main-title tex-center'>
                            <span className='position-relative add-before-border add-after-border'>Featured Vehicles</span>
                        </div>
                        <div className='featured-vehicles-block'>
                            <Slider {...featuredSettings1}>
                                {carData.map((car, index) => (
                                    <div key={index}>
                                        <div className='inner'>
                                            <article className="cs-card cs-card--2 fv-box">
                                                <div className="cs-card__img fv-top"
                                                    style={{
                                                        backgroundImage: `url(${getImages(car.image)})`,
                                                    }}
                                                ></div>
                                                <a href="#" className="cs-card_link">
                                                    <div className="cs-card__img--hover fv-top"
                                                        style={{
                                                            backgroundImage: `url(${getImages(car.image)})`,
                                                        }}></div>
                                                </a>
                                                <div className="fv-bottom">
                                                    <div className="sm-title text-orange font-bold">{car.title}</div>
                                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                                        <div className="sm-title">{car.price}</div>
                                                        <div className="sm-title opacity-0-4">{car.mileage}</div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <Slider {...featuredSettings2}>
                                {carData1.map((car, index) => (
                                    <div key={index}>
                                        <div className='inner'>
                                            <article className="cs-card cs-card--2 fv-box">
                                                <div className="cs-card__img fv-top"
                                                    style={{
                                                        backgroundImage: `url(${getImages(car.image)})`,
                                                    }}
                                                ></div>
                                                <a href="#" className="cs-card_link">
                                                    <div className="cs-card__img--hover fv-top"
                                                        style={{
                                                            backgroundImage: `url(${getImages(car.image)})`,
                                                        }}></div>
                                                </a>
                                                <div className="fv-bottom">
                                                    <div className="sm-title text-orange font-bold">{car.title}</div>
                                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                                        <div className="sm-title">{car.price}</div>
                                                        <div className="sm-title opacity-0-4">{car.mileage}</div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
                <section className='service-center-wrap'>
                    <div className='container'>
                        <div className='service-center-box d-flex align-items-center wow fadeIn' data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className='sc-left'>
                                <div className='lg-title'>Service Center</div>
                                <ul className='common-list'>
                                    <li>Full Service Department</li>
                                    <li>Body Shop</li>
                                    <li>Free Estimates</li>
                                    <li>Free Loaner & Shuttle</li>
                                </ul>
                            </div>
                            <div className='sc-right'>
                                <a href='#' className='btn-white-theme'>Schedule Service</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='logos-wrap wow fadeIn' data-wow-duration="1s" data-wow-delay="0.5s">
                    <Slider {...slSettings}>
                        <div>
                            <div className='inner'>
                                <img src={getImages('logo-benz.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('porsche-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('maserati-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('ferrari-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('bmw-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('audi.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('logo-lambo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('landrover-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('logo-benz.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('porsche-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('maserati-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('ferrari-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('bmw-logo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('audi.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('logo-lambo.webp')} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='inner'>
                                <img src={getImages('landrover-logo.webp')} alt='' />
                            </div>
                        </div>
                    </Slider>
                </section>
                <HomeAbout />
                {/* <ScrollMagicSlider/> */}
                <section className='getin-touch-wrap'>
                    <div className='container'>
                        <div className='main-title tex-center'>
                            <span className='position-relative add-before-border add-after-border'>Get in Touch</span>
                        </div>
                        <div className='mt-5 row mlr-40'>
                            <div className='col-md-6 pt-2 wow fadeInLeft' data-wow-duration="1s" data-wow-delay="0.5s">
                                <iframe src="https://snazzymaps.com/embed/654124" width="100%" height="465" style={{ border: 'none' }}></iframe>

                                <div className='gt-info mt-5'>
                                    <div className='gt-address'>3201 S. Federal Hwy Delray Beach, FL 33483</div>
                                    <div className='gt-phone mt-2'><a href='tel:561266000' className='text-white'>(561) 266-000</a></div>
                                </div>
                            </div>
                            <div className='col-md-6 wow fadeInRight' data-wow-duration="1s" data-wow-delay="1s">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home