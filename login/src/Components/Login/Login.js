import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  
  render(){

    const { signIn } = this.props;
    
    return(
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? </p>
          </form>
          <a
            >Sign In</a>
          <form className="login-form">
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="Contraseña"/>
            <button onClick={signIn}>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;

