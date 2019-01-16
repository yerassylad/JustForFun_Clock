import React, { Component } from "react";

class Com extends Component {
  state = { flicker: true };

  componentDidUpdate = prevProps => {
    if (this.props.time !== prevProps.time)
      this.setState(state => ({ flicker: !state.flicker }));
  };

  render() {
    const { flicker } = this.state;
    const { time } = this.props;
    const [hours, minutes, seconds] = [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    ].map(el => (el < 10 ? "0" + el : el));
    return (
      <div>
        {hours} {flicker ? <b style={{ opacity: 0 }}>:</b> : <b>:</b>} {minutes}{" "}
        {flicker ? <b style={{ opacity: 0 }}>:</b> : <b>:</b>} {seconds}
      </div>
    );
  }
}

export default Com;
