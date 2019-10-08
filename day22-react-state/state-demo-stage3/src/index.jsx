import React from 'react';
import ReactDOM from 'react-dom';
import Week from './week/week.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
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
