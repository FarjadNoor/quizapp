import React, { Component } from 'react';

class QuizInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailtxt: '',
      pwdtxt: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }


  render(){
    const { emailtxt, pwdtxt } = this.state;
    return(
      <div style={{textAlign:'center'}}>
        <h1>Login</h1>
        <input
        type="email"
        name="emailtxt"
        placeholder="admin@domain.com"
        value={emailtxt}
        onChange={this.handleChange}
      />

      <input
        type="password"
        name="pwdtxt"
        placeholder="admin"
        value={pwdtxt}
        onChange={this.handleChange}
      />
        <button onClick={this.props.onLogin}>Login</button>      
      </div>
      )
    }
    
}

export default QuizInfo;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.

