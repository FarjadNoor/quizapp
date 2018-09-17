import React, { Component } from 'react';
import logo from './logo.svg';
import QuizInfo from './Screens/QuizInfo/QuizInfo'
import QuizPage from './Screens/QuizPage/QuizPage'
import Login from './Screens/Login/Login'
import CourseList from './Screens/CourseList/CourseList'
import KeyPage from './Screens/KeyPage/KeyPage'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLogin: false,
      quizzes: [
        {
          name: 'AngularJs',
          Quiz: [
            {
              name: 'quiz1', questions: [
                {
                  ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'], correct: 1 }],
                  ques2: [{ ques: 'what is my name?', ans: ['Farjad', 'Noor', 'Eusufi'], correct: 1 }]
                }
              ]
            },
            {
              name: 'quiz2', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'],correct: 1 }] }
              ]
            },
            {
              name: 'quiz3', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'],correct: 1 }] }
              ]
            }
          ]
        },
        {
          name: 'React',
          Quiz: [
            {
              name: 'quiz1', questions: [
                {
                  ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }],
                  ques2: [{ ques: 'what is my name?', ans: ['Farjad', 'Noor', 'Eusufi'] }]
                }
              ]
            },
            {
              name: 'quiz2', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }] }
              ]
            },
            {
              name: 'quiz3', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }] }
              ]
            }
          ]
        },
        {
          name: 'PWA',
          Quiz: [
            {
              name: 'quiz1', questions: [
                {
                  ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }],
                  ques2: [{ ques: 'what is my name?', ans: ['Farjad', 'Noor', 'Eusufi'] }]
                }
              ]
            },
            {
              name: 'quiz2', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }] }
              ]
            },
            {
              name: 'quiz3', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }] }
              ]
            }
          ]
        },
        {
          name: 'HTML',
          Quiz: [
            {
              name: 'quiz1', questions: [
                {
                  ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }],
                  ques2: [{ ques: 'what is my name?', ans: ['Farjad', 'Noor', 'Eusufi'] }]
                }
              ]
            },
            {
              name: 'quiz2', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }] }
              ]
            },
            {
              name: 'quiz3', questions: [
                { ques1: [{ ques: 'what is your name?', ans: ['Farjad', 'Noor', 'Eusufi'] }] }
              ]
            }
          ]
        }
      ]
    };

    this.enterQuiz = this.enterQuiz.bind(this);
    this.enterCourse = this.enterCourse.bind(this);
    this.showList = this.showList.bind(this);
    this.login = this.login.bind(this);

  }

  enterCourse(index) {
    const { quizzes } = this.state;

    this.setState({ quiz: quizzes[index],
    course: true });
  }

  enterQuiz(index) {
    const { quizzes } = this.state;
    this.setState({ quiz: quizzes[index].Quiz[index], test: true });
  }

  showList() {
    this.setState({ quiz: null });
  }

  login() {
    this.setState({ isLogin: true });
    console.log('login**');
  }

  render() {
    const { quizzes, quiz, isLogin, course, prockey, test, startquiz } = this.state;

    return (
      <div className="page">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Quiz Panel</h1>
          </header>
        </div>
        <div>
          {/* <QuizPage quiz={quiz} quiz1={quiz.Quiz} /> */}
          {!isLogin && <Login onLogin={this.login} />}
          {isLogin && !course && <CourseList list={quizzes} onPress={this.enterCourse} />}
          {isLogin && course && !test && <QuizInfo quiz={quiz} quiz1={quiz.Quiz} onPress={this.enterQuiz} onBack={this.showList} />}
          {isLogin && test && course && !prockey && <KeyPage / >}
        </div>
      </div>

    )
  }

}

export default App;