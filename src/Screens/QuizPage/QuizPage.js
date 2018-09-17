import React, { Component } from 'react';

class QuizPage extends Component {
  constructor() {
    super()
  }

  render(){
    const {quiz, onBack, quiz1, onPress} = this.props;
    return(
      <div style={{textAlign:'center'}}>
        <h1>{quiz.name}</h1>
        <h3>Total Quizzes {quiz.Quiz.length}</h3>
        <button onClick={onBack}>Back to Quiz List</button>
        <ul className="table">
        {console.log(quiz1)}
        {quiz1.map((quiz, index) => {
        return  <li className="table-row" >
          <span  style={{width:'90%', display:'flex', alignItems:'center'}}>
          <b>{quiz.name}</b>
          </span>
          <span  style={{width:'10%'}}>
          <button   onClick={() => onPress(index)}>Enter Quiz</button>
          </span>
        </li>
        }
        )}
      </ul>
      </div>
      )
    }
    
}

export default QuizPage;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.

