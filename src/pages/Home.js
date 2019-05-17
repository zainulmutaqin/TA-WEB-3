import React, { Component } from 'react'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <header class="header-area overlay full-height relative v-center" id="home-page">
                    <div class="container">
                        <div class="row v-center">
                            <div class="col-xs-12 col-md-7 header-text">
                                <h2>Selamat Datang di Website</h2>
                                <p>Website yang dirancang oleh team yang tidak ada apa-apanya</p>
                            </div>
                            <div class="hidden-xs hidden-sm col-md-5 text-right">
                                <div class="screen-box screen-slider">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Home;