import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
import './index.html';

const contacts = [
  {
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@springmail.com',
  },
  {
    firstName: 'Marge',
    lastName: 'Simpson',
    email: 'marge@springmail.com',
  },
  {
    firstName: 'Abe',
    lastName: 'Simpson',
    email: 'abe@springmail.com',
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        {
          contacts.map(contact => (
            <Contact 
              firstName={contact.firstName} 
              lastName={contact.lastName}
              email={contact.email} 
            />
          ))
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
