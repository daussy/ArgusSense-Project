import React,{Component} from 'react';
//导入路由
import routeConfig from '@/routerComponent/routeConfig'
import {NavLink,Link  }  from 'react-router-dom' 

// antd
import { Collapse } from 'antd';

//导入css
import  './style.scss'
const { Panel } = Collapse;

export default class AsideUI extends Component{
    constructor(props){
        super(props)
        this.state ={
            routeType:"",
            routeMenu:routeConfig[3].children,//当前选择的系统应该渲染的Aside元素
            collapseClass:"collapse-nav",
        }
    }

    render(){
        const {routeMenu } = this.state;
        return(
            <div className="asideContainer">
                    <div className="nav flex-column nav-pills aside" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {
                            routeMenu.map((item,index)=>{
                                if(item.children&&item.children.length>0 ){
                                    return(
                                        <div >
                                             <Collapse
                                                bordered={false}
                                                className={this.state.collapseClass}
                                                ghost
                                            >
                                                <Panel header={(
                                                    <div className ="nav-link"> 
                                                            {item.img}
                                                            <span style = {{color:"#ffffff"}}>
                                                            {item.title}
                                                            </span>
                                                    </div>
                                                )} key={index}  
                                                showArrow={false}
                                                className="collapse-panel">
                                                    <div className = "active-panel">
                                                    {
                                                        item.children.map((child,cIndex)=>{
                                                            // console.log(child,'child',child.title)
                                                            return(
                                                                <div>
                                                                <NavLink key ={cIndex} to={child.path} className="nav-link"  exact ={true}
                                                                activeClassName ="active-navlink"
                                                                id="v-pills-home-tab" 
                                                                role="tab" 
                                                                >
                                                                    {child.img}
                                                                    <span >
                                                                    {child.title}
                                                                    </span>
                                                                </NavLink>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </Panel>
                                            </Collapse>
                                        </div>)
                                }else if(item.title !=='可视化系统'){
                                    return(
                                        <Collapse
                                        bordered={false}
                                        className="collapse-nav"
                                        collapsible ={'disabled'}
                                        ghost
                                    >
                                        <Panel header={(
                                            <div>
                                        <NavLink key ={index} to={item.path} className="nav-link"  exact ={true}
                                             activeClassName ="active-navlink"
                                             id="v-pills-home-tab" 
                                             data-toggle="pill"  
                                             role="tab" 
                                             >
                                                      {item.img}
                                                 <span >
                                                 {item.title}
                                                 </span>
                                             </NavLink>
                                            </div>
                                            )}  
                                        showArrow={false}
                                        className="collapse-panel">
                                        </Panel>
                                    </Collapse>
                                    )
                                }
                            })                            
                        }
                          {/* <Collapse
                                        bordered={false}
                                        className="collapse-nav"
                                        collapsible ={'disabled'}
                                        ghost
                                    >
                                        <Panel header={(
                                            <div>
                                            <Link key ={11236} to={"/Visualization"} className="nav-link"  exact ={true}
                                             activeClassName ="active-navlink"
                                             id="v-pills-home-tab" 
                                             data-toggle="pill"  
                                             role="tab" 
                                             >
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cast" viewBox="0 0 16 16">
                                                 <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z"/>
                                                 <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z"/>
                                                </svg>
                                                 <span >
                                                 可视化系统
                                                 </span>
                                             </Link>
                                            </div>
                                            )}  
                                        showArrow={false}
                                        className="collapse-panel">
                                        </Panel>
                                    </Collapse> */}
                    </div>
            </div>
    );
    }
} 

/*
*/

