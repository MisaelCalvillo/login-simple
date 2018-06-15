import React, { Component } from 'react';
import './NewAcount.css';

class NewAcount extends Component {

  render() {

    const {regresa} = this.props;

    return(
      <div>Estas en crear nueva cuenta <a href="#login" onClick={regresa}>Regresaaaaaaaaaaaaa</a></div>
    )
  }
}

export default NewAcount;