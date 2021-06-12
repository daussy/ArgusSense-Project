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
    src={`${hostPort}equip/image/view?imageId=${record.id}&type=image`}
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
