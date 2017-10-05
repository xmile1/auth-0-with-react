import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserHistory} from 'react-router-dom'

ReactDOM.render(
  <BrowserHistory>
    <App/>
  </BrowserHistory>
  , document.getElementById('root'));
registerServiceWorker();
