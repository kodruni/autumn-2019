import React from 'react';
import './index.scss';

export default class Day extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    }
  }
  
  handleClick = () => {
    this.setState({ selected: !this.state.selected });
  }
  
  render() {
    const weather = (
      `day-forecast__image weather-${this.props.weather}`
    );
  
    let header = 'day-forecast__header';

    if(this.state.selected) {
      header += ' day-forecast__header--selected';
    }

    return (
      <div className="day-forecast" onClick={this.handleClick}>
        <div className={header}>
          {this.props.weekday}
        </div>
        <div className="day-forecast__body">
          <div className={weather} />
          <div className="day-forecast__temps">
            <span className="temp-day">
              {this.props.tempDay}°
            </span>
            <span className="temp-night">
            {this.props.tempNight}°
            </span>
          </div>
        </div>
      </div>
    );
  }
}
