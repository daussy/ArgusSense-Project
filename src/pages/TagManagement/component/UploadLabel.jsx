import React,{Component} from 'react'
// antd
import {Button,Upload  ,Modal} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import {hostPort} from '@/Common'
import store from '@/pages/Store/index'

// style
import '../style.scss'

// 导入方法
import {_message,_checkZip} from './functionList'
class UploadLabel extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
       
        }
    }


  onChange=(info)=> {

    if (info.file.response) {
      let flag = false
        let response = info.file.response
        if(response.flag){
          flag = true
          let id = store.getState().TagManagementreducer.zipMsg.id
          let name = store.getState().TagManagementreducer.zipMsg.name
          _checkZip(1,id,name)
        _message(flag,'上传标签文件')
        }else{
          _message(flag,'上传标签文件')
        }
    }
  }
    render(){
        const{visible} = this.state;
        const props = {
          // name: 'file',
          action: `${hostPort}equip/image/addLabel`,
          onChange:this.onChange,
          showUploadList:false,
          
      }
      let record = this.props.onClick();

        return(
            <div>
                   <Upload {...props}
                            // action={hostPort+"equip/image/uploadImageSets"}
                            data={{
                              imageId:record.id,  //压缩包id
                            }}
                            >
                                
                        <Button 
                        className = "normalBtn"
                        icon={<UploadOutlined />}>上传标签</Button>
                    </Upload>
       
            </div>
          
        )
    }

 
}

export default UploadLabel;

