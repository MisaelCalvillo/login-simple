import React, { Component } from 'react';
import './Netflix.css';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import NewAcount from './Components/NewAcount/NewAcount';

// Componentes de React Router
import { Route } from 'react-router-dom';

class Netflix extends Component {

  render() {
    return(
      <div>
       <Route exact path="/login" render={() => (
         <Login />
       )}/>

       <Route exact path="/dashboard" component={Dashboard} />
      
       <Route exact path='/newAccount' render={() => (
         <NewAcount rutaRegresa="/login" />
       )} />

      </div>
    )
  }
}

export default Netflix;