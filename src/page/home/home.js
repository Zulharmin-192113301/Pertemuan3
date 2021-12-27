//home.js

import React from 'react';


export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = { nama : this.props.nama}
    }



  render() {

    return(
      <div>
          <h2>Judul Komponen halaman Home</h2>
          <p>Hallo Nama saya adalah {this.state.nama}</p>

          <button onClick={()=> this.setState({nama : 'Yanto Sari'})} > Ganti namanya</button>
 
      </div>
    )
  }
}
