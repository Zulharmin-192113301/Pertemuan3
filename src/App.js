//App.js

import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';
import Home from './page/home/home';
import Tentang from './page/tentang/tentang';
import Bantuan from './page/bantuan/bantuan';


class App extends Component {
    constructor(){
      super();
      //inisial state view
      this.state = {lihat : 'beranda'}
    }



  render() {
    //mengatur komponen yang tampil
  const Lihat = ()=> {
    if (this.state.lihat == 'beranda')
    return <Home nama="Kurik sumbawa" />
    else if (this.state.lihat == 'tentang')
    return <Tentang />
    else if (this.state.lihat == 'bantuan')
    return <Bantuan />
  }
  
    
  return(
      <div>
        <nav className='navbar navbar-expand-sm bg-success navbar-dark'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href='#' onClick={()=> this.setState({lihat :'beranda'})}>Index</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href='#' onClick={()=> this.setState({lihat :'tentang'})}>About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href='#' onClick={()=> this.setState({lihat :'bantuan'})}>Help</a>
            </li>

          </ul>
        </nav>

        <Lihat />

      </div>
    );
  }
}

export default App;