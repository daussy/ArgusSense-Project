import React,{Component} from 'react';
import style from './style.scss'
import ClockUI from '../component/clock/ClockUI'

//导入微服务选择布局
import ServiceChoose from './ServiceChoose'
//导入UserNav
import UserNav from './UserNav'
const NavUI = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav-self">
        <div className="collapse navbar-collapse  " id="navbarNavDropdown">
            <ServiceChoose></ServiceChoose>
            <UserNav></UserNav>
        </div>
        </nav>
);
}
export default NavUI;