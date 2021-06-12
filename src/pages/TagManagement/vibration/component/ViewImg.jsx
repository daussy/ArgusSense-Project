// antd
import {Button,Image,Modal} from 'antd'
import {hostPort} from '@/Common'

import React, { useState,Component  } from 'react';
export default class ViewImg extends Component{
  constructor(props){
    super(props)

    this.state={
      visible:false,
      content:null,
    }
  }

  onOpen =()=>{
    let record = this.props.onClick()
    // console.log('record',record)
    let content = (
    <Image
    width={200}
    src={`${hostPort}equip/vibration/view/?id=${record.id}&type=png`}
    // http://192.168.1.173:9001/equip/vibration/view?id=004fbc15b30e6130dbfafa1baa2bd03e&type=png
  />
    )
    this.setState({
      visible:true,
      content:content,
    })
  }
  onClose=()=>{
    this.setState({
      visible:false,
    })
  }

  render(){
    const {visible} = this.state;
    return(
      <div>
      <Button 
       onClick={this.onOpen}
       size = {"small"}
 
      >查看图片</Button>
      
      <Modal
        title="查看图片" 
        visible={visible}
        onCancel={this.onClose}
        width = {320}
        footer={null}
      >
       {this.state.content}

      </Modal>
      </div>
  )
  }
}
