import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';

class Main extends Component {
render(){
    return (
        <HashRouter>
            <div class="mainmenu-area" data-spy="affix" data-offset-top="100">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-menu">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand logo">
                      <h2>Websiteku</h2>
                  </a>
              </div>
                <nav className="collapse navbar-collapse" id="primary-menu">
                <ul className="nav navbar-nav navbar-right">{
                  this.props.pages.map((menu,index) => {
                    let style = '';
                    if(this.state.name === menu.name){
                      style = `active`;
                    }
                    return <li                      
                      className = { style }
                      onClick = {this.clicked.bind(this,menu)} 
                      key = {index}
                    ><NavLink exact to="/">
                      {menu.name}
                    </NavLink></li>;
                  }
                )}
              </ul>
            </nav>
          </div>
        </div> 

            <div>
                <Route exact path="/" component={this.info(this.state.name)}/>
            </div> 
        </HashRouter>
      );
    }
}

export default Main;
