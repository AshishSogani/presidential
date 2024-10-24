import React, { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';
import { TimelineMax } from 'gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

const ScrollMagicSlider = () => {
  const pinContainerRef = useRef(null);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    // Define movement of panels
    const wipeAnimation = new TimelineMax()
      .to(slideContainerRef.current, 0.5, { z: -150 })
      .to(slideContainerRef.current, 1, { x: '-25%' })
      .to(slideContainerRef.current, 0.5, { z: 0 })
      .to(slideContainerRef.current, 0.5, { z: -150, delay: 1 })
      .to(slideContainerRef.current, 1, { x: '-50%' })
      .to(slideContainerRef.current, 0.5, { z: 0 })
      .to(slideContainerRef.current, 0.5, { z: -150, delay: 1 })
      .to(slideContainerRef.current, 1, { x: '-75%' })
      .to(slideContainerRef.current, 0.5, { z: 0 });

    // Create ScrollMagic scene
    new ScrollMagic.Scene({
      triggerElement: pinContainerRef.current,
      triggerHook: 'onLeave',
      duration: '500%',
    })
      .setPin(pinContainerRef.current)
      .setTween(wipeAnimation)
      .addIndicators() // Optional: Remove if not needed
      .addTo(controller);

    // Cleanup function to remove controller
    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <div id="pinContainer" ref={pinContainerRef} style={{ position: 'relative' }}>
      <div id="slideContainer" ref={slideContainerRef} style={{ display: 'flex' }}>
        <section className="panel" style={{background:'#ff0000'}}>Panel 1</section>
        <section className="panel" style={{background:'#fff'}}>Panel 2</section>
        <section className="panel" style={{background:'#ff0000'}}>Panel 3</section>
        <section className="panel" style={{background:'#fff'}}>Panel 4</section>
      </div>
    </div>
  );
};

export default ScrollMagicSlider;
