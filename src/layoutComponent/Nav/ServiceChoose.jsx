import React,{Component} from 'react';
import style from './style.scss'

const NavConfig = [
    {
        title:'装备远程运维与健康管理系统',
        key:'microservice1',
    },
    {
        title:'微服务2',
        key:'microservice2',
    },
    {
        title:'微服务3',
        key:'microservice3',
    },

]

export default class ServiceChoose extends Component{
    constructor(props){
        super(props)

    }

    onClick =(e)=>{
        console.log(e,'e')
    }

    render(){
         return(
        <ul class="nav nav-tabs narbar-nav-self1" id="myTab" role="tablist">
            {
                NavConfig.map((item,index)=>{
                    return(
                    <li class="nav-item" role="presentation">
                        <a class="nav-link link-container " id="home-tab" data-toggle="tab" href="#home" 
                        role="tab" aria-controls="home" aria-selected="true" onClick = {this.onClick.bind(item.key)}>
                            {item.title}</a>
                    </li>
                    )
                })
            }
  
        </ul>
         );
    }
}