import React, { Component } from 'react';

class FAQ extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className="gray-bg section-padding" id="faq-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                                <div className="page-title">
                                    <h2>Frequently Asked Questions</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus at, facere harum fugiat!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div className="panel-group" id="accordion">
                                    <div className="panel">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">Sedeiusmod tempor inccsetetur aliquatraiy?</a>
                                        </h4>
                                        <div id="collapse1" className="panel-collapse collapse in">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.</p>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Tempor inccsetetur aliquatraiy?</a>
                                        </h4>
                                        <div id="collapse2" className="panel-collapse collapse">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.</p>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Lorem ipsum dolor amet, consectetur adipisicing ?</a>
                                        </h4>
                                        <div id="collapse3" className="panel-collapse collapse">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.</p>
                                        </div>
                                    </div>
                                    <div className="panel">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Lorem ipsum dolor amet, consectetur adipisicing ?</a>
                                        </h4>
                                        <div id="collapse4" className="panel-collapse collapse">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding overlay client-area overlay" id="client-page">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-xs-12">
                                <div className="clients">
                                    <div className="item">
                                        <img src="images/themeforest.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/coadcanyon.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/graphicriver.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/docean.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/audiojungle.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/actividen.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/photodone.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/videgub.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/themeforest.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/coadcanyon.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/graphicriver.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/docean.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/audiojungle.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/actividen.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/photodone.gif" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/videgub.gif" alt=""/>
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
 
export default FAQ;