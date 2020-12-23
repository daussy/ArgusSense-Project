import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link  }  from 'react-router-dom' 


import style from './ContentContainer.scss'
import routeConfig from '../../routerComponent/routeConfig'
const ContentContainer = (props) =>(
    <div className = "ContentContainer">
        <div>
        <Router> 
            
            {   
                // routeConfig.map((item,index)=>{
                // return (
                // <Route path ={item.path} exact={item.exact} component ={item.component} ></Route>
                // )
                // })
            }
        </Router>

        </div>
    </div>
);

export default ContentContainer;