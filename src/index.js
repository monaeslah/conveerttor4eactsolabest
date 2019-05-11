import React from 'react';
import ReactDOM from 'react-dom';
import 'moment/locale/fa';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/src/jquery';
import '../node_modules/antd/dist/antd.min.css'
import './component/styles/style.css'
import './component/styles/bootstrap.css' 
import './component/styles/animate.min.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js'


import App from './App'

ReactDOM.render(
    <App/>,
    document.getElementById('root'));

registerServiceWorker(); 
