import React, { Component } from 'react';
import './App.css';
import Gambar from './logo.svg'

class App extends Component {

  render() {

    var judul = <u>Johny</u>;
    const vsubjudul =  "Praktek App Website";
    this.tulisan = "tes paragraf lagi boleh lah ya";

    return(
      <div className='isi'>
          <img src={Gambar}/>
          <h1 style={{textAlign:'center', color:'rgb(252, 150, 120)'}}> Hai, {judul} </h1>
          <h2 className='subjudul'>  {'Hello ' + vsubjudul} </h2>
          <p className='paragraf'> {this.tulisan} </p>
      </div>
    );
  }
}

export default App;