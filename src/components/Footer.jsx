import React from 'react';
import "../styles/Footer.css";
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <div className='container-fluid footer pt-5'>
                <div className="row justify-content-around">
                    <div className="col-md-2 col-sm-5 py-4">
                        <h3>Company</h3>
                        <ul>
                            <li><NavLink className="navItem" to="/">Home</NavLink></li>
                            <li><NavLink className="navItem" to="/service">Service</NavLink></li>
                            <li><NavLink className="navItem" to="/about">About</NavLink></li>
                            <li><NavLink className="navItem" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-5 py-4">
                        <h3>Support</h3>
                        <ul>
                            <li><NavLink className="navItem" to="/">Home</NavLink></li>
                            <li><NavLink className="navItem" to="/service">Service</NavLink></li>
                            <li><NavLink className="navItem" to="/about">About</NavLink></li>
                            <li><NavLink className="navItem" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-3 col-5 py-4">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink className="navItem" to="/">Home</NavLink></li>
                            <li><NavLink className="navItem" to="/service">Service</NavLink></li>
                            <li><NavLink className="navItem" to="/about">About</NavLink></li>
                            <li><NavLink className="navItem" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-3 py-4">
                        <h3>Follow US</h3>
                        <div className="row justify-content-center">
                            <div className="col-lg-2 px-2 py-2 py-xl-0 mx-2">
                                <a href="">
                                    <i className='fab fa-linkedin'></i>
                                </a>
                            </div>
                            <div className="col-lg-2 px-2 py-2 py-xl-0 mx-2">
                                <a href="">
                                    <i className='fab fa-github'></i>
                                </a>
                            </div>
                            <div className="col-lg-2 px-2 py-2 py-xl-0 mx-2">
                                <a href="">
                                    <i className='fab fa-instagram'></i>
                                </a>
                            </div>
                            <div className="col-lg-2 px-2 py-2 py-xl-0 mx-2">
                                <a href="">
                                    <i className='fab fa-twitter'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
