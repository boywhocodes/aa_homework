import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';


document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root />, root);
});

const names = ["Aaron", "John", "Bob", "Dylan", "Thomas", "Jacob"];

class Root extends React.Component {

  render() {
    return(
      <div>
        <Clock /><br />
        <Weather /><br />
				<Autocomplete names={names} />
      </div>
    );
  }
}
