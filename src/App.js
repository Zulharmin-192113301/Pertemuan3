//App.js

import React, { Component } from 'react';
import './App.css';
import Home from './page/home/home';


function Message(props) {
  return <p>Hai {props.nama}</p>
}

class App extends Component {

  render() {

    return(
      <div>
          <Message nama="Tono"/>
          <Home nama="Budi"/>
 
      </div>
    );
  }
}

export default App;