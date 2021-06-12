import {Component} from 'react';

// antd 
import { Drawer, Button ,Descriptions,Space } from 'antd';

// style
import './style.scss'

// 数据
import {basicMsg , basicParameter,errorMsg} from './dataConfig'

export default class DeviceMsg  extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
        }
    }

    onClose =()=>{
        this.setState({
            visible:false,
        })
    }

    onOpen =()=>{
        this.setState({
            visible:true,
        })
    }

    render(){
        const {visible} = this.state;
        return(
            <>
            <Space>
            <Descriptions className = "dev-des" title={<span className = "dev-des-title">{basicMsg.title} </span> } size = {"small"}  column ={1}>
              {
                  basicMsg.data.map((item,index)=>{
                      return(
                          <Descriptions.item label = { <span style = {{color:"#fff",fontWeight:"bolder"}}>{item[0]}</span>}>
                              <span style = {{color:"#fff"}}>{item[1]}</span>
                          </Descriptions.item>
                      )
                  })
              }
              </Descriptions>
              {/* <br/> */}
              <Descriptions   className = "dev-des" title={<span className = "dev-des-title">{basicParameter.title} </span> }  size = {"small"}  column ={1}>
              {
                  basicParameter.data.map((item,index)=>{
                      return(
                          <Descriptions.item label = { <span style = {{color:"#fff",fontWeight:"bolder"}}>{item[0]}</span>}>
                                                            <span style = {{color:"#fff"}}>{item[1]}</span>
                          </Descriptions.item>
                      )
                  })
              }
              </Descriptions>
              <Descriptions   className = "dev-des" title={<span className = "dev-des-title">{errorMsg.title} </span> }  size = {"small"}  column ={1}>
              {
                  errorMsg.data.map((item,index)=>{
                      return(
                          <Descriptions.item label = { <span style = {{color:"#fff",fontWeight:"bolder"}}>{item[0]}</span>}>
                                                            <span style = {{color:"#fff"}}>{item[1]}</span>
                          </Descriptions.item>
                      )
                  })
              }
              </Descriptions>
            </Space>
      
            {/* </Drawer> */}
          </>
        )
    }
}

