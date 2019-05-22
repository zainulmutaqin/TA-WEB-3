import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 

const pages = [
    {
      name : 'Home',
    },    
    {
      name : 'Profile',
    },
    {
      name : 'Team',
    },
  ];

ReactDOM.render(<App pages={pages}/>, document.getElementById('root'));

serviceWorker.register();
