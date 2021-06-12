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
import {_modelList,_message,_lifePrediction} from './functionList'
import {hostPort} from '@/Common'

class LifePrediction extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            modelList :store.getState().ModelCheckreducer.modelTrainingTable,
            id :store.getState().ModelTrainingreducer.tableData[0].originID,
            modelID:"",
            modelName:"",
            step:"",
            disabled:false,
            datasetName:"",//上传的文件名

        }
    store.subscribe(this.handleStoreChange)
    }

    componentDidMount(){
      _modelList(1,this.state.id)
    }


    handleStoreChange = ()=>{
      this.setState({
          dataType:store.getState().ModelTrainingreducer.dataType,
          modelList :store.getState().ModelCheckreducer.modelTrainingTable,
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
    _modelList(page)
  }

  // 选择模型
  selectChange =(selectedRowKeys, selectedRows)=>{
    this.setState({
      modelID:selectedRowKeys[0],
      modelName:selectedRows.name
    })
  }

    /**
   * 输入框
   * @param {*} e 
   */
  onChange =(e)=>{
    let inputValue = e.target.value
    // console.log(inputValue)
    this.setState({
      step:inputValue
    })
  }

    // 上传文件
    upload=(info)=> {
      let flag = false
      if (info.file.response) {
          let response = info.file.response
          if(response.flag){
            this.setState({
              fileID:response.data.id,
              datasetName:response.data.name,
            })
          flag = true
          }
      _message(flag,'上传文件')
      }
    } 
    // 寿命预测
    lifePrediction =()=>{
      const {fileID,modelID,step,datasetName,modelName}  = this.state;
      _lifePrediction(fileID,modelID,step,datasetName,modelName);
      this.onClose();
    }
    inputSubmit=()=>{
      this.setState({
        disabled:true
      })
    }
    
    render(){
        const{visible,loading} = this.state;
        const {modelList} = this.state
        const rowSelection = {
          onChange: this.selectChange,
          type:"radio"
        };
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
                寿命预测
                </Button>
                <Modal
                    title="模型列表" 
                    visible ={visible}
                    width = {800}
                    onCancel = {this.onClose}
                    destroyOnClose  = {true}
                    footer={[
                      <Button key="submit" type="primary" onClick={this.lifePrediction}>寿命预测</Button>
                    ]}
                >
                    <Space >
                      <Input disabled ={this.state.disabled} placeholder ="请输入步长" onChange = {this.onChange}/> 
                      <Button    className = {"ModelBtn"}  onClick = {this.inputSubmit}>确认步长</Button>
                    </Space>
                    <Space >

                      <Upload 
                        showUploadList ={false}
                        name = 'file'
                        onChange = {this.upload}
                        action={hostPort+"equip/file/upload"}
                        data={{
                          dataType:2
                        }}
                      >
                        <Button icon={<UploadOutlined />}      type="normal"
                      className = "normalBtn">上传文件</Button>
                      </Upload>
                    </Space>

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

export default LifePrediction;

