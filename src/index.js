import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

// router
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import routerConfig from '../src/routerComponent/routeConfig';
ReactDOM.render(

<BrowserRouter>
<div className='app'>
  <Switch>
    {
      //路由表有数据才遍历路由数据
      routerConfig.length > 0 && routerConfig.map((item, index) => {
        if (item.exact) {
          return <Route key={index} exact={item.exact} path={item.path} component={item.component}></Route>
        } else {
        }
      })
    }
  </Switch>
  <Redirect to = "/UserLogin"></Redirect>
</div>
</BrowserRouter>
  ,document.getElementById('bootstrap-layout')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
