import React, { Component } from 'react';

class Features extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <section className="gray-bg section-padding" id="feature-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                                <div className="page-title">
                                    <img className="img-fluid mb-5 d-block mx-auto" src="images/dianing.jpeg" width="240" height="320" />
                                    <h1 className="text-uppercase mb-0">Dianing Sukmapilia</h1>
                                    <h5 className="font-weight-light mb-0">Cewek yang selalu senyum dan bahagia</h5>                   
                                </div>
                            </div>
                        </div>
                        <hr className="star-dark mb-5"/>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 bottoom">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 bottoom">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/cake.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 bottoom">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/circus.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 bottoom">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/circus.png" alt=""/>
                                </a>                            
                            </div>
                            <div className="col-md-6 col-lg-4 bottoom">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/cake.png" alt=""/>
                                </a>                            
                            </div>
                            <div className="col-md-6 col-lg-4 bottoom">
                               <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fas fa-search-plus fa-3x"></i>
                                    </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
    <div className="portfolio-modal-dialog bg-white">
      <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
        <i className="fa fa-3x fa-times"></i>
      </a>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
            <hr className="star-dark mb-5"/>
            <img className="img-fluid mb-5" src="img/portfolio/cabin.png" alt=""/>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
              <i className="fa fa-close"></i>
              Close Project</a>
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
 
export default Features;