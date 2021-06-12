import React, { Component } from 'react';
import $ from 'jquery'

// antd
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import  {hostPort} from '@/Common'
// store
import store from '@/pages/Store/index'
// 方法
import {_refreshForm  } from "./functionList";

export default class ChooseFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datasetName :this.props.datasetName,
          datasetID: store.getState().DataStoragereducer.imagedata.datasetID,
          treeKey: store.getState().DataStoragereducer.treeKey,
          label: store.getState().DataStoragereducer.label,

        };
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange =()=>{
        this.setState({
          datasetID: store.getState().DataStoragereducer.imagedata.datasetID,
        })
    }
    onChange=(info)=> {
        if (info.file.response) {
            let response = info.file.response
            if(response.flag){
                // console.log(response)
            message.success(`${info.file.name} 上传成功！`);
            _refreshForm(this.state.treeKey,this.state.label)
            }else{
            message.error(`${info.file.name}上传失败！`);
            }
            this.props.onClose()
        }
      }
    


    render() {
        return (
            <div  >
             <Upload {...props}
                    // action={hostPort+"equip/image/uploadImageSets"}
                    onChange = {this.onChange}
                    data = {{
                        setId:this.state.datasetID
                    }}
                    >
                        
                <Button icon={<UploadOutlined />}>选择文件</Button>
            </Upload>,
                    
            </div>);
    }
}
const props = {
    name: 'file',
    action: `${hostPort}equip/image/uploadImageSets`,
    // headers: {
    //   authorization: 'authorization-text',
    // },  //请求头
    showUploadList:false,
}

