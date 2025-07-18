import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <section className="footerdiv">
                <footer className="footer-section">
                    <div className="container">
                        <div className="footer-cta pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>160055 Mohali, chandigarh</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-phone"></i>
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>+91- 00000-00000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="far fa-envelope-open"></i>
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>jaspreetcafe@info.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <Link to="/"><img src="images/jaspreet-logo.jpg" className="img-fluid"
                                                alt="logo" /></Link>
                                        </div>
                                        <div className="footer-text">
                                            <p style={{marginTop: "-50px !important"}}>Lorem ipsum dolor sit amet, consec tetur
                                                adipisicing
                                                elit, sed do eiusmod tempor
                                                incididuntut consec tetur adipisicing
                                                elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">about</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/services">services</Link></li>
                                            <li><Link to="/contactus">Contact</Link></li>
                                            <li><Link to="/about">About us</Link></li>
                                            <li><Link to="/services">Our Services</Link></li>
                                            <li><Link to="/menu">Expert Team</Link></li>
                                            <li><Link to="/contactus">Contact us</Link></li>
                                            <li><Link to="/">Latest News</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                <button><i className="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div className="copyright-text">
                                        <p>Copyright &copy; 2023, All Right Reserved <span style={{color:"#ff5e14"}}>By
                                            Jaspreet Singh</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/services">Services</Link></li>
                                            <li><Link to="/contactus">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}
