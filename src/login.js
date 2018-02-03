import React, { Component } from 'react';

export default class Login extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }


  render() {
    return (
      <div className="Login">
      	<h1>Garbougie</h1>
        <form >
            <input type="text" placeholder="Username" ref="loginInput"></input>
            <button></button>
            <br></br>
            <input type="text" placeholder="Password" ref="passwordInput"></input>
        	<button></button>
        </form>
      </div>
    );
  }
}

