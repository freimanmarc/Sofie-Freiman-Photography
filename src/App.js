import React, { Component } from 'react';
import './App.css';

import Main from './components/nav';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div >
        <div className="mother-grid">
              <Link style={{color: 'white', marginRight: '2em', marginLeft: '2em'}} to="/" className="header">Sofie Freiman</Link>
              <Link style={{color: 'white', marginRight: '2em'}} to="/gallery" className="header">Gallery</Link>
              <Link style={{color: 'white', marginRight: '2em'}}to="/contact" className="header">Contact</Link>
        </div>
            <div className='content-div'>
              <Main />
           </div>
      </div>

    );
  }
}



export default App;
