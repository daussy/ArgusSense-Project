import React,{Component} from 'react';
import style from './style.scss'


import {NavLink,Redirect} from 'react-router-dom'
import routeConfig from '@/routerComponent/routeConfig.js'

export default class ServiceChoose extends Component{
    constructor(props){
        super(props)

    }

    // onClick =(e)=>{
    //     console.log(e,'e')
    // }
  
    render(){
         return(
        <ul class="nav nav-tabs narbar-nav-self1" id="myTab" role="tablist">
            {
                routeConfig.map((item,index)=>{
                    if(item.children&&item.children.length>0){
                        return(
                            <NavLink key ={index} to={item.path}  exact ={true} 
                            className="nav-link link-container "
                                activeClassName ="active-navlink"
                                id="v-pills-home-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-home" >
                                    <li className="nav-item" role="presentation">
                                        <span >
                                            {item.title}</span>
                                    </li>
                            </NavLink>
        
                            )
                    }
                
                })
            }
            {/* <Redirect to={"/Devproject"}></Redirect> */}

  
        </ul>
         );
    }
}