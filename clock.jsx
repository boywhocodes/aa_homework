import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
    this.id;
  }


  render() {
    return (
    <div className="clock-box">
      <h1>Our Hella Fancy Clock</h1>
      <ul className="clock-container">
        <li className="clock-item">Today's Date:</li>  <li className="clock-item">{this.state.date.toDateString()}</li>
      </ul>

      <ul className="clock-container"> <li className="clock-item">Current time:</li>
        <li className="clock-item">{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}</li>
      </ul>
    </div>

    )
  }

  tick () {
    this.setState( { date: new Date() });
  }

  componentDidMount () {
    this.id = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
    this.id = 0;
  }
}


export default Clock;
