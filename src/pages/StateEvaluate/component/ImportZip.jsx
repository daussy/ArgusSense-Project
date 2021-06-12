import React,{Component} from 'react'
// antd
import {Button,Table ,Upload ,Modal,Pagination,Space,Input} from 'antd';
import { UploadOutlined } from '@ant-design/icons'
// store
import store from '@/pages/Store/index'
// style
import '../style.scss'
import tableConfig from './ChooseModel/tableConfig'
// 方法
import {_imgModelList,_message} from './functionList'
import {hostPort} from '@/Common'

class ImportZip extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            modelList :store.getState().Modelvaluatereducer.imageModelTraining.modelTrainingTable,
            id :store.getState().ModelTrainingreducer.tableData[0].originID,
            modelID:"",
            modelName:"",
            step:"",
            disabled:false,
            datasetName:"",//上传的文件名

        }
    store.subscribe(this.handleStoreChange)
    }

    handleStoreChange = ()=>{
      this.setState({
          dataType:store.getState().ModelTrainingreducer.dataType,
          modelList :store.getState().Modelvaluatereducer.imageModelTraining.modelTrainingTable,
      })
  }


  // 打开编辑弹窗
  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  // 关闭弹窗
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  pageonChange=(page, pageSize)=>{
    // console.log(page, pageSize,'page, pageSize')
    _imgModelList(page)
  }

  // 选择模型
  selectChange =(selectedRowKeys, selectedRows)=>{
    // console.log('selectedRowKeys changed: ', selectedRows);
    this.setState({
      modelID:selectedRowKeys,
      modelName:selectedRows[0].name
    })
  }


    // 上传文件
    upload=(info)=> {
      let flag = false
      if (info.file.response) {
          let response = info.file.response
          if(response.flag){
            const {modelID,modelName} = this.state;
            const action = {
              type:"StateEvaluateImportZip",
              response,
              modelID,
              modelName
            }
            store.dispatch(action)
          
          flag = true
          }
      _message(flag,'上传文件')
      }
    } 

    
    render(){
        const{visible,loading} = this.state;
        const {modelList} = this.state
        const rowSelection = {
          onChange: this.selectChange,
        };
        // console.log("modelList",modelList)
        return(
            <div>
                  {/* <Spin  spinning = {loading} tip="模型训练中...">
                </Spin> */}
                <Button
                // size="small"
                type="normal"
                className = "normalBtn"
                onClick={this.onOpen}
                >
                导入检测图片
                </Button>
                <Modal
                    title="模型列表" 
                    visible ={visible}
                    width = {800}
                    onCancel = {this.onClose}
                    destroyOnClose  = {true}
                    footer={[
                      <Upload 
                      showUploadList ={false}
                      name = 'file'
                      onChange = {this.upload}
                      action={hostPort+"equip/image/test?modelId="+this.state.modelID}
                      // data={{
                      //   dataType:2
                      // }}
                    >
                      {this.state.modelID === ''? <Button icon={<UploadOutlined />}  
                      disabled   type="normal"
                    className = "normalBtn">上传文件</Button> : <Button icon={<UploadOutlined />}  
                    type="normal"
                    className = "normalBtn">上传文件</Button>} 
                      
                     
                    </Upload>
                    ]}
                >

                 

                    <Table  className = "table2" size="middle"  bordered ={true} columns={tableConfig} dataSource={modelList} 
                       pagination = {false}
                       rowKey = {"id"}
                       rowSelection={{
                        type:'checkbox',
                        ...rowSelection,
                      }}
                    />
                      <Pagination
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={100}
                    />

           
              
                    
                </Modal>
        
            </div>
          
        )
    }

 
}

export default ImportZip;

