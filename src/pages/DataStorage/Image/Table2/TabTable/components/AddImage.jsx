import React,{Component} from 'react'
// antd
import {Upload,Button,Modal,message} from 'antd'
import { UploadOutlined } from '@ant-design/icons';

import {hostPort} from '@/Common'
// store
import store from '@/pages/Store/index'
// 导入方法
import {_refresh} from './functionList'




export default class AddImage extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            zipId:store.getState().DataStoragereducer.fileID,
        }
        store.subscribe(this.handlStoreChange)

    }
    handlStoreChange=()=>{
        this.setState(
            {
            zipId:store.getState().DataStoragereducer.fileID,
            }
        )
    }


    /*关闭弹窗*/
    onClose =()=>{
        this.setState({
            visible:false
        })
    }

   /**
    * 点击添加图片按钮
    */
    onClick = ()=>{
       this.setState({
           visible:true,
       })
    }

    onChange=(info)=> {
        if (info.file.response) {
            let response = info.file.response
            if(response.flag){
            message.success(`${info.file.name} 添加成功！`);
            _refresh();
            this.onClose();

            }else{
            message.error(`${info.file.name}添加失败！`);
            this.onClose();
            
            }
        }
      }
    render(){
        const props = {
            name: 'file',
            action: `${hostPort}equip/image/addOne`,
            onChange:this.onChange,
            showUploadList:false,
            
        }
        const {visible} = this.state;
        return(
            <div style = {{float:'right'}}> 
                <Button className = "normalBtn" onClick = {this.onClick} > 添加图片</Button>
                <Modal
                    title="上传图片" 
                    visible ={visible}
                    width = {320}
                    footer={null}
                    onCancel = {this.onClose}
                    >
                    <Upload {...props}
                            // action={hostPort+"equip/image/uploadImageSets"}
                            data={{
                                setId:this.state.zipId,  //压缩包id
                            }}
                            >
                                
                        <Button icon={<UploadOutlined />}>选择文件</Button>
                    </Upload>
                    </Modal>
            </div>
             
   
        )
    }
}

