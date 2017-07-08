import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };

    this.update = this.update.bind(this);
    // this.selectName = this.selectName.bind(this);
  }

  update(e) {
    const inputVal = e.target.value ? e.target.value : "";
    this.setState({ inputVal });
  }
  //
  // selectName(e) {
  //   const inputVal = this.props.names[e.target.key] ? this.props.names[e.target.key] : "";
  //   this.setState({ inputVal });
  // }

  render() {

    const filtered = this.props.names.filter((el) => {
      return el.toLowerCase().startsWith(this.state.inputVal.toLowerCase());
    });

    const mapping = filtered.map( function(el, idx) {
      return (<li className="autocomplete-item" key={idx}>{el}</li>);
    });
    return (
    <div className="autocomplete-box">
      <h1>Our Hella Fancy Autocomplete</h1>
      <input onChange={this.update} type="text" value={this.state.inputVal}></input>
      <ul className="autocomplete-container">
        {mapping}
      </ul>
    </div>
    )
  }



  //
  // componentDidMount () {
  //   if (navigator.geolocation) {
  //     // debugger;
  //     navigator.geolocation.getCurrentPosition(
  //       this.getWeather
  //       // API call to: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
  //       // example: api.openweathermap.org/data/2.5/weather?lat=35&lon=139
  //     );
  //   }
  // }
}

export default Autocomplete;
