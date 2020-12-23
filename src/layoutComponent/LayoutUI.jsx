import React,{Component} from 'react';
import style from './layout.scss'
//导入布局组件
import AsideUI from './Aside/AsideUI'
import NavUI from './Nav/NavUI'
import ClockUI from './component/clock/ClockUI'
import ContentCotainer from './contentContainer/ContentContainer'

import AppRouter from '../routerComponent/AppRouter'

const LayoutUI = (props) =>{
    // var pathname = window.location.pathname;
    // console.log('pathname',pathname)
    
    return(
        <div className ="layout">
            <div className = "row" style = {{"--bs-gutter-x":0}}>
                <AppRouter></AppRouter>
                {
                    // console.log(AppRouter(),'结果')
                }
            </div>
        </div>
        );
}
export default LayoutUI;

