import React, { useEffect, useState } from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { getImages } from '../const';

const HomeAbout = () => {
    const [isLoaded, setIsLoaded] = useState(true);
   
  return (
    <>
    {isLoaded && (
        <Controller>
                <Scene triggerHook="onLeave" duration="250%" pin>
                    <Timeline wrapper={<div id="pinContainer" />}>
                        <Tween
                            from={{ y: '0%' }}
                            to={{ y: '0%' }}
                            stagger={0.5}
                        >
                            <div className='panel'>
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
                            </div>
                        </Tween>
                        <Tween
                            from={{ x: '100%' }}
                            to={{ x: '0%' }}
                            stagger={0.5}
                        >
                            <div className='panel'>
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
                            </div>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>
    )}
    </>
  )
}

export default HomeAbout