import React, { useEffect, useRef } from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { getImages } from '../../Componments/Frontend/const';
const carData = [
    {
        image: 'fv-img1.jpg',
        title: '2024 Audi S5 Cabriolet',
        price: '$64,995',
        mileage: '575mi',
    },
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
    {
        image: 'fv-img6.jpg',
        title: '2019 Chevrolet Corvette',
        price: '$99,995',
        mileage: '3,026mi',
    },
]
const Home = () => {
    const marqueeRef = useRef(null);
    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = marqueeRef.current;

        if (marqueeContent) {
            root.style.setProperty("--marquee-elements", marqueeContent.children.length);

            for (let i = 0; i < marqueeElementsDisplayed; i++) {
                marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
            }
        }
    }, []);
    return (
        <>
            <section className="banner-wrap home-banner py-0">
                <div className='video-block'>
                    <div className='video-container'>
                        <iframe width="100%" height="750" src="https://www.youtube.com/embed/2_lpbI6f7X8?si=RvEAIWU9fWN4HmPA&autoplay=1&mute=1&loop=1&playlist=2_lpbI6f7X8&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='banner-pos'>
                    <div className='banner-title'><span className='text-theme'>Experience & Excellence</span> <br />Over 100 Cars in Stock</div>
                    <div className='mt-50 text-center'>
                        <button className='btn-black-theme' type='button'>View Inventory</button>
                    </div>
                </div>
            </section>
            <section className='services-wrap'>
                <div className='container'>
                    <div className='row mlr-40'>
                        <div className='col-md-6'>
                            <a href="#" className='service-box d-inline-block'>
                                <img src={getImages('slide-1.png')} alt='' />
                                <div className='service-pos'><span>View Inventory</span></div>
                            </a>
                        </div>
                        <div className='col-md-6'>
                            <a href="#" className='service-box d-inline-block'>
                                <img src={getImages('slide-2.png')} alt='' />
                                <div className='service-pos'><span>Sell or Trade</span></div>
                            </a>
                        </div>
                        <div className='col-md-6'>
                            <a href="#" className='service-box d-inline-block'>
                                <img src={getImages('slide-3.png')} alt='' />
                                <div className='service-pos'><span>Service Center</span></div>
                            </a>
                        </div>
                        <div className='col-md-6'>
                            <a href="#" className='service-box d-inline-block'>
                                <img src={getImages('slide-4.png')} alt='' />
                                <div className='service-pos'><span>Specials</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='service-center-wrap'>
                <div className='container'>
                    <div className='service-center-box d-flex align-items-center'>
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
            <section className='logos-wrap'>
                <div className='container'>
                    <div className='marquee'>
                        <ul ref={marqueeRef} className="marquee-content">
                            <li>
                                <img src={getImages('logo-benz.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('porsche-logo.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('maserati-logo.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('ferrari-logo.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('bmw-logo.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('audi.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('logo-lambo.webp')} alt='' />
                            </li>
                            <li>
                                <img src={getImages('landrover-logo.webp')} alt='' />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='parallax-wrap'>
                <Controller>
                    <Scene
                        triggerHook="onLeave"
                        duration="100%"
                        pin
                    >
                        <Timeline
                            wrapper={<div id="pinContainer" />}
                        >
                            <Tween
                                from={{ y: '0%' }}
                                to={{ y: '0%' }}
                            >
                                <section className='panel'>
                                    <div className='panel-inner'>
                                        <section className='about-wrap d-flex align-items-center'>
                                            <div className='about-left w-50'>
                                                <img src={getImages('about-bg.webp')} alt='about' />
                                                <div className="hd-pos">
                                                    <span className='px-5'>About Us</span>
                                                </div>
                                            </div>
                                            <div className='about-right w-50'>
                                                <div className='mxw-540'>
                                                    <div className='about-count mb-5'>01</div>
                                                    <p>Explore our curated selection of the world’s finest luxury vehicles, where cutting-edge innovation meets timeless craftsmanship. From sleek sedans to high-performance SUVs, discover the car that complements your lifestyle.</p>
                                                    <div className='text-end mt-120'>
                                                        <a href='#' className='btn-black-theme md-btn'>View Inventory</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </section>
                            </Tween>
                            <Tween
                                from={{ x: '100%' }}
                                to={{ x: '0%' }}
                            >
                                <section className='panel'>
                                    <div className='panel-inner'>
                                        <section className='about-wrap d-flex align-items-center'>
                                            <div className='about-left w-50'>
                                                <img src={getImages('about-bg.webp')} alt='about' />
                                                <div className="hd-pos">
                                                    <span className='px-5'>About Us</span>
                                                </div>
                                            </div>
                                            <div className='about-right w-50'>
                                                <div className='mxw-540'>
                                                    <div className='about-count mb-5'>02</div>
                                                    <p>Explore our curated selection of the world’s finest luxury vehicles, where cutting-edge innovation meets timeless craftsmanship. From sleek sedans to high-performance SUVs, discover the car that complements your lifestyle.</p>
                                                    <div className='text-end mt-120'>
                                                        <a href='#' className='btn-black-theme md-btn'>View Inventory</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </section>
                            </Tween>
                        </Timeline>
                    </Scene>
                </Controller>
            </section>
            <section className='featured-vehicles-wrap'>
                <div className='container'>
                    <div className='main-title tex-center'>
                        <span className='position-relative add-before-border add-after-border'>Featured Vehicles</span>
                    </div>
                    <div className='d-flex mlr-35 marquee-content2' ref={marqueeRef}>
                        {carData.map((car, index) => (
                            <div className="col-md-4" key={index}>
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
                        ))}
                    </div>
                    <div className='d-flex mlr-35 marquee-content' ref={marqueeRef}>
                        {carData.map((car, index) => (
                            <div className="col-md-4" key={index}>
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
                        ))}
                    </div>
                </div>
            </section>
            <section className='getin-touch-wrap'>
                <div className='container'>
                    <div className='main-title tex-center'>
                        <span className='position-relative add-before-border add-after-border'>Get in Touch</span>
                    </div>
                    <div className='mt-5 row mlr-40'>
                        <div className='col-md-6 pt-2'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.9641580392713!2d-80.0727677!3d26.4246332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e041ac09b827%3A0xe449141e674b46fc!2s3201%20S%20Federal%20Hwy%2C%20Delray%20Beach%2C%20FL%2033483%2C%20USA!5e0!3m2!1sen!2sin!4v1729681912393!5m2!1sen!2sin" width="100%" height="465" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className='gt-info mt-5'>
                                <div className='gt-address'>3201 S. Federal Hwy Delray Beach, FL 33483</div>
                                <div className='gt-phone mt-2'>(561) 266-000</div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='custom-form'>
                                <div className='form-group'>
                                    <label>Full Name</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Comments</label>
                                    <textarea className='form-control h-150'></textarea>
                                </div>
                                <div className='mt-5 pt-3'>
                                    <button type='submit' className='btn-black-theme w-100'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home