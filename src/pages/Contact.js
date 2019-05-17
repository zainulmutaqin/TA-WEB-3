import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <footer className="footer-area relative sky-bg" id="contact-page">
                    <div className="absolute footer-bg"></div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                                    <div className="page-title">
                                        <h2>Contact with us</h2>
                                        <h3>Be near with us for more sensation</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <address className="side-icon-boxes">
                                        <div className="side-icon-box">
                                            <div className="side-icon">
                                                <img src="images/location-arrow.png" alt=""/>
                                            </div>
                                            <p><strong>Address: </strong> Blimbingsari CT IV / 44 <br />YOGYAKARTA</p>
                                        </div>
                                        <div className="side-icon-box">
                                            <div className="side-icon">
                                                <img src="images/phone-arrow.png" alt=""/>
                                            </div>
                                            <p><strong>Telephone: </strong>
                                                <a href="callto:8801812726495">085229199209</a> <br />
                                                <a href="callto:8801687420471">082160370668</a>
                                            </p>
                                        </div>
                                        <div className="side-icon-box">
                                            <div className="side-icon">
                                                <img src="images/mail-arrow.png" alt=""/>
                                            </div>
                                            <p><strong>E-mail: </strong>
                                                <a href="mailto:youremail@example.com">andryfritzent05@gmail.com</a> <br />
                                                <a href="mailto:youremail@example.com">siskaandriani346@gmail.com</a>
                                            </p>
                                        </div>
                                    </address>
                                </div>
                                <div className="col-xs-12 col-md-8">
                                    <form action="process.php" id="contact-form" method="post" className="contact-form">
                                        <div className="form-double">
                                            <input type="text" id="form-name" name="form-name" placeholder="Your name" className="form-control" required="required"/>
                                            <input type="email" id="form-email" name="form-email" className="form-control" placeholder="E-mail address" required="required"/>
                                        </div>
                                        <input type="text" id="form-subject" name="form-subject" className="form-control" placeholder="Message topic"/>
                                        <textarea name="message" id="form-message" name="form-message" rows="5" className="form-control" placeholder="Your message" required="required"/>
                                        <button type="sibmit" className="button">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 pull-right">
                                    <ul className="social-menu text-right x-left">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-google"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-github"></i></a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id corrupti architecto consequuntur, laborum quaerat sed nemo temporibus unde, beatae vel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 text-center">
                                    <p>&copy;Copyright 2018 All right resurved.  This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
 
export default Contact;