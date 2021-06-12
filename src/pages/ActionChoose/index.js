import {Component} from 'react';
import {Link} from 'react-router-dom'
import Footer from '../../layoutComponent/contentContainer/Footer'

// antd
import {Space,Image,Tooltip} from 'antd'
import './style.scss'
export default class ActionIndex extends Component{
    constructor(props){
        super(props)

        this.state={
            src:["images/item01.jpg","images/item02.jpg"],
            width:[400,200]
        }
    }

    widthChange =(value)=>{
        if(value == 0){
            this.setState({
                width:[400,200]
            })
        }else{
            this.setState({
                width:[200,400]
            })
        }
     
    }

    render(){
        return(
            <div className = "actionChoose-container">
                <div className = "action-container">
            <ul>
                 <li className = "systemImg" id = "systemImg01"><Link  to = "/Devproject"><div style ={{width:"100%",height:"100%"}}>
                     </div></Link></li>
                     <li className = "systemImg" id = "systemImg02"><Link  to = "/Visualization"><div style ={{width:"100%",height:"100%"}}>
                     </div></Link></li>
            </ul>
                        
              
                </div>
                
                {/* <br/> */}

                <Footer></Footer>
            </div>
        )
    }
}