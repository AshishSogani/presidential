import React, { useState } from 'react'
import { getImages } from '../const'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [isMob, setisMob] = useState(false);
    const onChangeBodyClass = (value) => {
        setisMob(value);
        value
            ? document.body.classList.add('overflow-active')
            : document.body.removeAttribute('class');
    };
    const [openSubMneu,  setOpenSubMenu] = useState(false)
    const handleSubMenu = (menu) => {
        setOpenSubMenu((prevMenu) => (prevMenu === menu ? null : menu));
    }
    const closeMenu = () => {
        setisMob(false); 
        setOpenSubMenu(false);
        document.body.classList.remove('overflow-active');
    }
  return (
    <>
        <section className='home-top-wrap'>
            <header className="header-wrap">
                <div className="container mxw-1366">
                    <div className="header-block d-flex align-items-center justify-content-between">
                        <div className="header-left">
                            <Link to="/" className="main-logo d-block">
                                <img src={getImages('logo-silver-svg.png')} alt='logo' />
                            </Link>
                        </div>
                        <div className="header-right d-flex align-items-center justify-content-between">
                            <div className={`d-flex w-100 align-items-center justify-content-between menu-block ${isMob ? 'active' : ''}`}>
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" onClick={closeMenu}>Specials</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" onClick={closeMenu}>Sell or Trade</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" onClick={closeMenu}>Service</NavLink>
                                        </li>
                                        <li className={`sub-menu ${openSubMneu === 'service' ? 'open' : ''}`}>
                                            <NavLink to="/service" onClick={closeMenu} className="d-none d-lg-block">Service <span className='menu-arrow-icon'></span></NavLink>
                                            <a href="#" onClick={() => handleSubMenu('service')} className='d-lg-none'>Service <span className='menu-arrow-icon'></span></a>
                                            <ul className='sub-mega-menu service-m-menu'>
                                                <li className='w-100'>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='smm-col'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon-img'>
                                                                    {/* <img src={getImages('icon-service1.svg')}/> */}
                                                                </div>
                                                                <div className='d-none d-lg-block md-title ps-3 fw-400'>Service</div>
                                                                <NavLink to="/" onClick={closeMenu} className="d-lg-none md-title fw-400 text-white">Service</NavLink>
                                                            </div>
                                                            <ul className='inside-menu'>
                                                                <li>
                                                                    <Link to='/' onClick={closeMenu}>Service 1</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/" onClick={closeMenu}>Service 2</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/" onClick={closeMenu}>Financing</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" onClick={closeMenu}>Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className='ms-3'>
                                    <button className='btn-black-theme' type='button'>Contact Us</button>
                                </div>
                            </div>
                            <div className={`overflow-bg ${isMob ? 'active' : ''
                                }`} onClick={() => onChangeBodyClass(!isMob)}></div>
                            <div
                                className={`mobile-inner-header ${isMob ? 'active' : ''}`}
                                onClick={() => onChangeBodyClass(!isMob)}
                            >
                                <div
                                    className={`mobile-inner-header-icon mobile-inner-header-icon-out ${isMob ? 'active' : ''
                                        }`}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    </>
  )
}

export default Header