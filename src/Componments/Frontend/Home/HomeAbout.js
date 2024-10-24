import React, { useEffect, useState } from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { getImages } from '../const';

const HomeAbout = () => {
    const [isLoaded, setIsLoaded] = useState(true);
   
  return (
    <>
    {isLoaded && (
        <div className='hm-about-block'>
            <Controller>
                <Scene key="scene1" triggerHook="onLeave" duration="300%" pin>
                    <Timeline
                     key="scene2"
                        wrapper={<div id="pinContainer" />}
                    >
                        <Tween
                            from={{ y: '0%' }}
                            to={{ y: '0%' }}
                        >
                            <section className='panel'>
                                <div className='panel-inner about-wrap d-flex align-items-center'>
                                    <div className='about-left w-50 wow fadeInLeft' data-wow-duration="1s" data-wow-delay="0.5s">
                                        <img src={getImages('about-slide-1.png')} alt='about' style={{height:'100vh'}} />
                                        <div className="hd-pos">
                                            <span className='px-5'>About Us</span>
                                        </div>
                                    </div>
                                    <div className='about-right w-50 wow fadeInRight' data-wow-duration="1s" data-wow-delay="1s">
                                        <div className='mxw-540'>
                                            <div className='about-count mb-5'>01</div>
                                            <p>Explore our curated selection of the world’s finest luxury vehicles, where cutting-edge innovation meets timeless craftsmanship. From sleek sedans to high-performance SUVs, discover the car that complements your lifestyle.</p>
                                            <div className='text-end mt-120'>
                                                <a href='#' className='btn-black-theme md-btn d-inline-block'>View Inventory</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                        <Tween
                            from={{ x: '100%' }}
                            to={{ x: '0%' }}
                        >
                            <section className='panel'>
                                <div className='panel-inner about-wrap d-flex align-items-center'>
                                    <div className='about-left w-50'>
                                        <img src={getImages('about-slide-2.png')} alt='about' style={{height:'100vh'}} />
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
                                </div>
                            </section>
                        </Tween>
                        <Tween
                            from={{ x: '100%' }}
                            to={{ x: '0%' }}
                        >
                            <section className='panel'>
                                <div className='panel-inner about-wrap d-flex align-items-center'>
                                    <div className='about-left w-50'>
                                        <img src={getImages('about-slide-3.png')} alt='about' style={{height:'100vh'}} />
                                        <div className="hd-pos">
                                            <span className='px-5'>About Us</span>
                                        </div>
                                    </div>
                                    <div className='about-right w-50'>
                                        <div className='mxw-540'>
                                            <div className='about-count mb-5'>03</div>
                                            <p>Explore our curated selection of the world’s finest luxury vehicles, where cutting-edge innovation meets timeless craftsmanship. From sleek sedans to high-performance SUVs, discover the car that complements your lifestyle.</p>
                                            <div className='text-end mt-120'>
                                                <a href='#' className='btn-black-theme md-btn'>View Inventory</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                        <Tween
                            from={{ x: '100%' }}
                            to={{ x: '0%' }}
                        >
                            <section className='panel'>
                                <div className='panel-inner about-wrap d-flex align-items-center'>
                                    <div className='about-left w-50'>
                                        <img src={getImages('about-slide-4.png')} alt='about' style={{height:'100vh'}} />
                                        <div className="hd-pos">
                                            <span className='px-5'>About Us</span>
                                        </div>
                                    </div>
                                    <div className='about-right w-50'>
                                        <div className='mxw-540'>
                                            <div className='about-count mb-5'>04</div>
                                            <p>Explore our curated selection of the world’s finest luxury vehicles, where cutting-edge innovation meets timeless craftsmanship. From sleek sedans to high-performance SUVs, discover the car that complements your lifestyle.</p>
                                            <div className='text-end mt-120'>
                                                <a href='#' className='btn-black-theme md-btn'>View Inventory</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
        </div>
    )}
    </>
  )
}

export default HomeAbout