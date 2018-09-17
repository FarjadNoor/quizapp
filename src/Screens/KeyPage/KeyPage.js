import React, { Component } from 'react';

class KeyPage extends Component {
  constructor() {
    super()
  }

  render() {
    const { list, onPress } = this.props;
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Proctoring Key</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        

          <input style={{ width: '60%' }} type='password'
            value=''
            placeholder='Enter The Quiz Proctoring Key'
          />
          <button>Submit</button>
        </div>
      </div>
    )
  }

}

export default KeyPage;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.

