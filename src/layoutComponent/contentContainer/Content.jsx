import {Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
//导入footer
import Footer from './Footer'

// 导入组件
import ProcessingSteps from '../../pages/DataProcessing/ProcessingSteps/index'
import CreateProcess from '../../pages/DataProcessing/CreateProcess/CreateProcess'
export default class  Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            routeMenu:this.props.data
        }
    }

    render(){
        // console.log(this.state.routeMenu);
        const {routeMenu} = this.state;
        return (
            <div className = "content">
    
                <Switch>
                    {
                    //路由表有数据才遍历路由数据
                    routeMenu.length > 0 && routeMenu.map((childitem, index) => {
                        if (childitem.children&&childitem.children.length>0) {
                            // 有子组件
                            return( childitem.children.map((item,childIndex)=>{
                                return <Route key={index+10+childIndex} exact={item.exact} path={item.path} component={item.component}></Route>
                            }))
                        } else {
                            // 没有子组件
                                return <Route key={index} exact={childitem.exact} path={childitem.path} component={childitem.component}></Route>
                        }
                    })
                    }
                    <Route key={333} exact={true} path={"/Devproject/ProcessingSteps"} component={ProcessingSteps}></Route>
                    <Route key={744} exact={true} path={"/Devproject/CreateProcess"} component={CreateProcess}></Route>
                </Switch>
                <Redirect to = "/Devproject/DataStorage"></Redirect>
                <Footer></Footer>
    
            </div>
        )
    }
}
