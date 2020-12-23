import React,{Component} from 'react'
import './AppRouter.scss'
import style from './AppRouter.scss'

//引入router
import {BrowserRouter as Router,Route,Link,NavLink  }  from 'react-router-dom' 

//引入NavUI 
import NavUI from '../layoutComponent/Nav/NavUI'

//引入菜单
import routeConfig from './routeConfig'


//设置规则 传递值  接收值  显示内容
function AppRouter(){

    return(
        <Router> 
            {/* 定义跳转方法 */}
        <div className=" aside-container col-2  ">
            <div className ="title-container">
                <a className="navbar-title" href="#">装备远程运维与健康管理系统</a>
            </div>
            <div className="nav flex-column nav-pills aside" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {
                   routeConfig.map((item,index)=>{
                    return(
                        <NavLink key ={index} to={item.path} className="nav-link "  exact ="true"
                            activeClassName ="active-navlink"
                            // activeStyle={{ " background-color":"#0F1932",
                            // "color":"#fff",
                            // "border-left": "5px solid #fff"}}
                            id="v-pills-home-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-home" >
                              {/* <a className="nav-link " id="v-pills-home-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-home" >  */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d={item.imgPath_d}/>
                                </svg>
                                <span >
                                {item.title}
                                </span>
                            {/* </a>  */}
                        </NavLink>
                
                    );
                })
                }
            </div>

        </div>
        <div className = " col-10 col-10-self">
            {/* 插入导航 */}
            <NavUI></NavUI>
            <div className = "contentContainer">
            {routeConfig.map((item,index)=>{
                return (
                <Route path ={item.path} exact={item.exact} component ={item.component} ></Route>
                )
                })
            }
            </div>
        </div>

        </Router>
    )
}

export default AppRouter
