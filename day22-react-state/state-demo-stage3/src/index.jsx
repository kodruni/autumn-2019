import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Week from './week/week.jsx';

import './index.scss';
import './index.html';

class App extends Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>
        <Week />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
