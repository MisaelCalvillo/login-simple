import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const {cerrarSesion} = this.props;

    return(
      <div>Estas en el Dashboard <a href="#login" onClick={cerrarSesion}>return</a></div>
    )
  }
}

export default Dashboard;