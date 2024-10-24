import React from 'react'
import { getImages } from '../const'

const Footer = () => {
  return (
    <>
        <footer className='footer-wrap'>
          <div className='container'>
            <div className='d-flex justify-content-between footer-block'>
              <div>
                <div className='fb-logo mb-4'>
                  <img src={getImages('logo-silver-svg.png')}/>
                </div>
                <div className='text-white mb-5'>3201 S. Federal Hwy Delray Beach, FL 33483</div>
                <div className='fb-contact-info'>
                  <a href='tel:5612660009'>(561) 266-0009</a><br/>
                  <a href='mailto:sales@prezauto1.com' className='text-orange mt-1 d-inline-block'>sales@prezauto1.com</a>
                </div>
              </div>
              <div className='d-none d-md-block'>
                <div className='footer-title'>Navigation</div>
                <ul className='footer-menu'>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Inventory</a>
                  </li>
                  <li>
                    <a href='#'>Services</a>
                  </li>
                  <li>
                    <a href='#'>FAQ</a>
                  </li>
                </ul>
              </div>
              <div className='d-none d-md-block'>
                <div className='footer-title'>About</div>
                <ul className='footer-menu'>
                  <li>
                    <a href='#'>The Team</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                  <li>
                    <a href='#'>Privacy & Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <div className='footer-title d-none d-md-block'>Stay Connected</div>
                <ul className='footer-menu'>
                  <li>
                    <a href='#'><span className='social-icon'><img src={getImages('ico-facebook.svg')}/></span> <span className='d-none d-md-inline-block'>Facebook</span></a>
                  </li>
                  <li>
                    <a href='#'><span className='social-icon'><img src={getImages('ico-twitter.svg')}/></span> <span className='d-none d-md-inline-block'>Twtiter</span></a>
                  </li>
                  <li>
                    <a href='#'><span className='social-icon'><img src={getImages('ico-instagram.svg')}/></span> <span className='d-none d-md-inline-block'>Instagram</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer