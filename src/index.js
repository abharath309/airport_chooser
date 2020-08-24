import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AirportChooser from './AirportChooser';
import * as serviceWorker from './serviceWorker';

var displayDropdown = (
  <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}} >
        <AirportChooser />
  </div>
  );

ReactDOM.render(displayDropdown, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
