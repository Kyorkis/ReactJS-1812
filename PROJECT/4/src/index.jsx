import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
   <BrowserRouter>
      <MuiThemeProvider>
         <Router />
      </MuiThemeProvider>
   </BrowserRouter>
   , document.getElementById('root'),
);