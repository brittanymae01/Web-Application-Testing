import React from 'react';
import Display from './components/Display'

import './App.css';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  hitBall = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  foulBall = () => {
    this.setState(prevState => {
      if (prevState.strikes >= 2) {
        return { strikes: this.state.strikes }
      }
      return { ...prevState, strikes: this.state.strikes + 1 }
    })
  }

  addBalls = () => {
    this.setState(prevState => {
      if (prevState.balls >= 4) {
        return { balls: 0 }
      }
      return { ...prevState, balls: prevState.balls + 1 }
    })
  }

  addStrikes = () => {
    this.setState(prevState => {
      if (prevState.strikes >= 3) {
        return { strikes: 0 }
      }
      return { ...prevState, strikes: prevState.strikes + 1 }
    })
  }

  render() {
    return (
      <div className="container">

        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard balls={this.state.balls} strikes={this.state.strikes} addBalls={this.addBalls} addStrikes={this.addStrikes} foulBall={this.foulBall} hitBall={this.hitBall} />
      </div>
    );
  }

}

export default App;
