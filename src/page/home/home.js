//home.js

import React from 'react';


export default class Home extends React.Component{


  render() {

    return(
      <div>
          <h2>Judul Komponen halaman Home</h2>
          <p>Hallo Nama saya adalah {this.props.nama}</p>
 
      </div>
    )
  }
}
