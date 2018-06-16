import React, { Component } from 'react';
import './NewAcount.css';

import { Link } from 'react-router-dom';

class NewAcount extends Component {

  render() {

    const {rutaRegresa} = this.props;

    return(
      <div>Estas en crear nueva cuenta <Link to={rutaRegresa} >Regresa</Link></div>
    )
  }
}

export default NewAcount;