import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Test from "./components/pages/Test"; // 권원현 aws 테스트용 지우지 말 것
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
      {/* <Test /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

