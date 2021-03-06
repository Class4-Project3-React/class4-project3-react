import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Test from "./components/pages/Test"; // 권원현 aws 테스트용 지우지 말 것


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Test />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

