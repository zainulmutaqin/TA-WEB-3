import React, { Component } from 'react';

class Blog extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className="section-padding gray-bg" id="blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="single-blog">
                                    <div className="blog-photo">
                                        <img src="images/small1.jpg" alt=""/>
                                    </div>
                                    <div className="blog-content">
                                        <h3><a href="#">Beautiful Place for your Great Journey</a></h3>
                                        <ul className="blog-meta">
                                            <li><span className="ti-user"></span> <a href="#">Admin</a></li>
                                            <li><span className="ti-calendar"></span> <a href="#">Feb 01, 2017</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo eaque expedita aliquid dolorem repellat perferendis, facilis aut fugit, impedit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="single-blog">
                                    <div className="blog-photo">
                                        <img src="images/small2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-content">
                                        <h3><a href="#">Beautiful Place for your Great Journey</a></h3>
                                        <ul className="blog-meta">
                                            <li><span className="ti-user"></span> <a href="#">Admin</a></li>
                                            <li><span className="ti-calendar"></span> <a href="#">Feb 01, 2017</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo eaque expedita aliquid dolorem repellat perferendis, facilis aut fugit, impedit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="single-blog">
                                    <div className="blog-photo">
                                        <img src="images/small3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-content">
                                        <h3><a href="#">Beautiful Place for your Great Journey</a></h3>
                                        <ul className="blog-meta">
                                            <li><span className="ti-user"></span> <a href="#">Admin</a></li>
                                            <li><span className="ti-calendar"></span> <a href="#">Feb 01, 2017</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nemo eaque expedita aliquid dolorem repellat perferendis, facilis aut fugit, impedit.</p>
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
 
export default Blog;