import React, { Component } from 'react';

class CourseList extends Component {
  constructor() {
    super()
  }

  render(){
    const {list, onPress} = this.props;
    return(
      <ul className="table">
        {list.map((quiz, index) => {
        return  <li className="table-row">
          <span  style={{width:'90%', display:'flex', alignItems:'center'}}>
          <b>{quiz.name}</b>
          </span>
          <span  style={{width:'10%'}}>
          <button   onClick={() => onPress(index)}>Join Course</button>
          </span>
        </li>
        
        }
        )}
        
      </ul>
      )
    }
    
}

export default CourseList;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.

