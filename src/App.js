import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Team from './pages/Team';
import Contact from './pages/Contact';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name : "Home",
    };
  }
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }
  clicked(menu){
    this.setState({
      name : menu.name,
    });
  }
  info(name){    
    if(name === 'Profile'){
      return (
        <Profile/>
      );
    } else if(name === 'Team'){
      return (
        <Team/>
      );
    } else if(name === 'Contact'){
      return (
        <Contact/>
      );
    } else {
      //display default
      return (
        <Home/>
      );
    }
  }
  render() { 
    return ( 
      <React.Fragment>
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
                    ><a>
                      {menu.name}
                    </a></li>;
                  }
                )}
              </ul>
            </nav>
          </div>
        </div>        

        <div>
            {this.info(this.state.name)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
