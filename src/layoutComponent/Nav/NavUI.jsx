import React,{Component} from 'react';
import style from './style.scss'
import ClockUI from '../component/clock/ClockUI'


//导入Logo
import Logo from './Logo'
import Title from './Title'
//导入UserNav
import UserNav from './UserNav'
const NavUI = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav-self ">
            <div className="collapse navbar-collapse  " id="navbarNavDropdown">
                    <div className = "col-1">
                    <Logo></Logo>
                    </div>
                    <div className = "col-8">
                    <Title></Title>
                    </div>
                    
                    <div className = "col-3">
                    <UserNav></UserNav>

                    </div>
            
            </div>
            </nav>
       
);
}
export default NavUI;