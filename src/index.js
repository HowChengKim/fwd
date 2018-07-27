import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import './assets/styles/reset.styl';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
