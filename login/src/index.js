import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Netflix from './Netflix';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <Netflix />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
