import React, { Component } from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

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
            <Link to="/dashboard"><button>login</button></Link>
            <p className="message">Not registered? <Link to='/newAccount'>Create an account</Link></p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;

