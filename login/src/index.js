import React from 'react';
import ReactDOM from 'react-dom';

import Netflix from './Netflix';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Netflix />, document.getElementById('root'));
registerServiceWorker();
