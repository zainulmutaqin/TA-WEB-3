import React, { Component } from 'react';

class Team extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <section className="section-padding gray-bg" id="team-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                                <div className="page-title">
                                    <h2>Special team</h2>
                                    <p>Although We are different side, but We always be one</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-row">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="single-team">
                                    <div className="team-photo">
                                        <img src="images/zainul.webp" alt="inizain" aria-label="zain"/>
                                    </div>
                                    <h4>Zainul Mutaqin</h4>
                                    <h6>Co. Founder</h6>
                                    <ul className="social-menu">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="single-team">
                                    <div className="team-photo">
                                        <img src="images/afi.webp" alt="iniafi" aria-label="afi"/>
                                    </div>
                                    <h4>Shafira Putri</h4>
                                    <h6>Founder</h6>
                                    <ul className="social-menu">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="single-team">
                                    <div className="team-photo">
                                        <img src="images/andri.webp" alt="inidri" aria-label="andri"/>
                                    </div>
                                    <h4>Andri Fritzent</h4>
                                    <h6>Editor</h6>
                                    <ul className="social-menu">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="team-row">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="single-team">
                                    <div className="team-photo">
                                        <img src="images/dianing.webp" alt="inidian" aria-label="dian"/>
                                    </div>
                                    <h4>Dianing</h4>
                                    <h6>Editor</h6>
                                    <ul className="social-menu">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="single-team">
                                    <div className="team-photo">
                                        <img src="images/siska.webp" alt="inisis" aria-label="sis"/>
                                    </div>
                                    <h4>Siska Tarigan</h4>
                                    <h6>Founder</h6>
                                    <ul className="social-menu">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="testimonial-area section-padding gray-bg overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                                <div class="page-title">
                                    <h2>About Us</h2>
                                    <p>Sedikit tentang diri kami!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div className="testimonials">
                                    <div className="testimonial">
                                        <div className="testimonial-photo">
                                            <img src="images/zainul-ava.webp" alt="inizainava" aria-label="zainava"/>
                                        </div>
                                        <h3>Muhammad Zainul Mutaqin</h3>
                                        <p>Halo, panggil aku Zainul. Hanyalah seorang manusia biasa sangat simple dan menyukai ketenangan.</p>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial-photo">
                                            <img src="images/afi-ava.webp" alt="iniafiava" aria-label="afiava"/>
                                        </div>
                                        <h3>Shafira Putri A</h3>
                                        <p>Halo, perkenalkan aku Afi. Sering dibilang manusia paling santai dan ga peduli.</p>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial-photo">
                                            <img src="images/andri-ava.webp" alt="inidriava" aria-label="driava"/>
                                        </div>
                                        <h3>Andri Fritzent</h3>
                                        <p>Hai guys, kenalin aku Andre. Lebih suka ngerap dan hanya akulah yang disini.</p>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial-photo">
                                            <img src="images/dianing-ava.webp" alt="inidianava" aria-label="dianava"/>
                                        </div>
                                        <h3>Dianing Putri S</h3>
                                        <p>Halo temen - temen, kenalin aku Puput. Saya orang yang rajin dan aktif mengikuti banyak hal </p>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial-photo">
                                            <img src="images/siska-ava.webp" alt="inisisava" aria-label="sisava"/>
                                        </div>
                                        <h3>Siska Andriani</h3>
                                        <p>Hai sis, kenalin aku Siska. Santai aja sama aku, karena aku sama siapa aja langsung connect! </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Team;