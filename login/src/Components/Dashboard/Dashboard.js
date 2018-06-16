import React, { Component } from 'react';
import './Dashboard.css';

import { Link } from 'react-router-dom';



class Dashboard extends Component {
  render() {

    return(
      <div>Estas en el Dashboard <Link to="/login">return</Link></div>
    )
  }
}

export default Dashboard;