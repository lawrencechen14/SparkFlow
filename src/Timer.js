import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

/* code stolen from https://reactarmory.com/guides/learn-react-by-itself/component-instances-and-state */

export class Timer {
  constructor(listener) {
    this.listener = listener
    this.startTime = 25*60
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.done = this.done.bind(this)

    this.time = this.startTime
  }

  start() {
    this.time = this.startTime
    this.active = setInterval(() => {
      this.time -= 1
      if (this.listener) this.listener(this.time, this.active)
      if (this.time === 0) this.done()
    }, 1000)
  }

  stop() {
    clearInterval(this.active)
    this.active = null
    if (this.listener) this.listener(this.time, this.active)
  }

  done() {
    clearInterval(this.active)
    this.active = null
    this.time = this.startTime
    if (this.listener) this.listener(this.time, this.active)
  }
}

export class TimerContainer extends Component {
  constructor(props) {
    super(props)
    this.timer = new Timer(() => this.setState({
      time: this.timer.time,
      active: this.timer.active
    }))
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.state = { active: false }
  }

  render() {
    return (
    <div>
      <h1>
        {Math.floor(this.timer.time / 60) + ':' + this.pad(this.timer.time % 60)}
      </h1>
      <Button
        onClick = {!this.state.active ? this.start : this.stop}
        bsSize="large"
      >
        {!this.state.active ? 'Start' : 'Stop'}
      </Button>
    </div>
    )
  }

  pad(seconds) {
    let s = '0' + seconds
    return s.substr(s.length - 2)
  }

  start() {
    this.timer.start()
    this.setState({ active: true, time: this.timer.time })
  }

  stop() {
    this.timer.stop()
    this.setState({ active: false })
  }
}

export default TimerContainer;
