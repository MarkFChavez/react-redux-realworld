import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// setup dotenv
import { config } from 'dotenv';
config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
