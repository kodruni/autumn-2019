import React from 'react';
import Day from '../day/day.jsx';

import './index.scss';

export default class Week extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: null,
      forecast: [],
    };
  }
  
  componentDidMount() {
    fetch('http://bootcamp.podlomar.org/api/weather')
      .then(resp => resp.json())
      .then(forecast => this.setState({ forecast: forecast }));
  }

  handleSelect = (selectedDay) => {
    this.setState({ selectedDay: selectedDay });
  }

  render() {
    if (this.state.forecast.length === 0) {
      return (
        <div className="week-forecast">
          <div className="spinner" />
        </div>
      );    
    }

    return (
      <div className="week-forecast">
        {
          this.state.forecast.map(day => (
            <Day
              key={day.weekday}
              onSelect={this.handleSelect}
              selected={day.weekday === this.state.selectedDay}
              weekday={day.weekday} 
              weather={day.weather} 
              tempDay={day.tempDay} 
              tempNight={day.tempNight}
            />
          ))
        }
      </div>
    );
  }
}