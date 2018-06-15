import React, { Component } from 'react';
import './Netflix.css';

import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import NewAcount from './Components/NewAcount/NewAcount';

class Netflix extends Component {

  state = {
    lugar: "login"
  }

  render() {
    return(
      <div>
       {this.state.lugar === "login" && <Login signIn={() => {
         this.setState(() => (
           {
             lugar: "dash"
           }
         ))}
       }

       nuevaCuenta={() => {
         this.setState(() => ({
           lugar: "new"
         }))
       }}

        />}
       {this.state.lugar === "dash" && <Dashboard cerrarSesion={() => {
         this.setState(() => (
           {
            lugar: "login"
           }  
         ))
       }}/>}

       {this.state.lugar === "new" && <NewAcount regresa={() => {
         this.setState(() => ({
           lugar: "login"
         }))
       }}/>}
      </div>
    )
  }
}

export default Netflix;