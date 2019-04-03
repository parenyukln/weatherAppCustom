import React, { Component } from 'react';
import './App.css';
import './components/WeatherDisplay';
import WeatherDisplay from './components/WeatherDisplay';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }

  render() {
    const activePlace = this.state.activePlace;

    return (
      <div className="App">
        <div className="header">
          Приложение погоды на Reactjs
        </div>
        <div className="content">
          <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip}/>
          <div className="menu">
            {PLACES.map((place, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({ activePlace: index });
                }}
              >
                {place.name}
              </button>
            ))}
          </div> 
        </div> 
      </div>
    );
  }
}

export default App;
