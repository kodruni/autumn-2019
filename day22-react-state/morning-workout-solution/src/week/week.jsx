import React from 'react';
import './index.scss';
import Day from '../day/day.jsx';
import forecast from '../forecast';

export default class Week extends React.Component {
  render() {
    return (
      <div className="week-forecast">
        {
          forecast.map(day => (
            <Day 
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