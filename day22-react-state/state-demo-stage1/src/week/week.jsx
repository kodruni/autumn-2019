import React from 'react';
import Day from '../day/day.jsx';

import './index.scss';

export default class Week extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [
        {
          weekday: 'Mon',
          weather: 'cloudy',
          tempDay: 18,
          tempNight: 11,
        },
        {  
          weekday: 'Tue',
          weather: 'partly-cloudy',
          tempDay: 21,
          tempNight: 15,
        },
        {  
          weekday: 'Wed',
          weather: 'rainy',
          tempDay: 8,
          tempNight: 1,
        },
        {  
          weekday: 'Thu',
          weather: 'snowy',
          tempDay: -2,
          tempNight: -7,
        },
        {  
          weekday: 'Fri',
          weather: 'stormy-rain',
          tempDay: 28,
          tempNight: 21,
        },
        {  
          weekday: 'Sat',
          weather: 'stormy',
          tempDay: 35,
          tempNight: 27,
        },
        {  
          weekday: 'Sun',
          weather: 'sunny',
          tempDay: 28,
          tempNight: 22,
        },
      ]
    };
  }
  
  render() {
    return (
      <div className="week-forecast">
        {
          this.state.forecast.map(day => (
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