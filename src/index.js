import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//布局组件
import LayoutUI from './layoutComponent/LayoutUI.jsx'

//路由组件
import AppRouter from './routerComponent/AppRouter'

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   <AppRouter></AppRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <LayoutUI></LayoutUI>,
//  <AppRouter></AppRouter>, 
  document.getElementById('bootstrap-layout')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
