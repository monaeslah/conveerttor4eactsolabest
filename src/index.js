import React from 'react';
import ReactDOM from 'react-dom';

import 'moment/locale/fa';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/antd/dist/antd.min.css'
import './component/styles/style.css'
import './component/styles/bootstrap.css'
import App from './App'

ReactDOM.render(
    <App/>,
    document.getElementById('root'));

registerServiceWorker(); 
