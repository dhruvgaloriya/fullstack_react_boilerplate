import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<App initialData = {window.initialData.contests}/>,
  document.getElementById('root')
);