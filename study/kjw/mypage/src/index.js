import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
// import { createStore } from "redux";
// import rootReducer from "./modules";
import { Provider } from "react-redux";

// const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  <Provider >
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// import reportWebVitals from './reportWebVitals';
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
