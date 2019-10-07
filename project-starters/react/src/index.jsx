import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <Contact 
        firstName="Homer" 
        lastName="Simpson"
        email="homer@springmail.com" 
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
