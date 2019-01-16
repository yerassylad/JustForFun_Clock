import React, { Component } from "react";
import Com from "./Com";
import Com2 from "./Com2";

class Con extends Component {
  state = { time: new Date() };

  render() {
    return (
      <div>
        <Com time={this.state.time} />
        <Com2 time={this.state.time} />
      </div>
    );
  }

  componentDidMount = () => {
    this._updater = setInterval(this._getTime, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this._updater);
  };

  _getTime = () => {
    this.setState({ time: new Date() });
  };
}

export default Con;
