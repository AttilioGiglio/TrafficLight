import React, { Component } from 'react';
import './App.css';

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      lightRed: "off",
      lightYellow: "off",
      lightGreen: "off"
    };
  }
  render() {
    return (
          <div className='app'>
            <div id="bar"></div>
            <div id="trafficLight">
              <div className="red light"  id={this.state.lightRed}
                onClick={() => this.setState({ lightRed: "on", lightYellow: "off", lightGreen: "off" })}>
              </div>
              <div className="yellow light" id={this.state.lightGreen}
                onClick={() => this.setState({ lightRed: "off", lightYellow: "on", lightGreen: "off" })}>
              </div>
              <div className="green light" id={this.state.lightGreen}
                onClick={() => this.setState({ lightRed: "off", lightYellow: "off", lightGreen: "on" })}>
              </div>
            </div>
          </div>
    );
  }
}

export default TrafficLight;
