import React, { Component } from "react";
import Numbers from "./numbers";
import delimter from "./assets/delimter.svg";

const Delimter = props => <img {...props} src={delimter} alt="delimter" />;

const Flicker = props => {
  return <Delimter style={{ opacity: Number(props.flicker) }} />;
};

class Com2 extends Component {
  state = { hours: null, minutes: null, seconds: null, flicker: false };

  componentDidUpdate = prevProps => {
    if (this.props.time !== prevProps.time) {
      const time = this._prettier(this.props.time);
      this.setState(state => ({
        hours: this._converter(time[0]),
        minutes: this._converter(time[1]),
        seconds: this._converter(time[2]),
        flicker: !state.flicker
      }));
    }
  };

  _prettier = time => {
    return [time.getHours(), time.getMinutes(), time.getSeconds()].map(
      el => (el < 10 ? "0" + el : el.toString())
    );
  };

  _converter = str => {
    return str.split("").map(el => Numbers[el]);
  };

  render() {
    const { hours, minutes, seconds, flicker } = this.state;
    return (
      <div>
        {hours} <Flicker flicker={flicker} /> {minutes}{" "}
        <Flicker flicker={flicker} /> {seconds}
      </div>
    );
  }
}

export default Com2;
