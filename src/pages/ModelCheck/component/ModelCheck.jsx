import React,{Component} from 'react'
// antd
import {Button,Table  ,Modal,Pagination} from 'antd';

// store
import store from '@/pages/Store/index'
// style
import '../style.scss'
import tableConfig from './ChooseModel/tableConfig'
// 方法
import {_modelList,_modelCheck} from './functionList'

class ModelCheck extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            modelList :store.getState().ModelCheckreducer.modelTrainingTable,
            id :store.getState().ModelTrainingreducer.tableData[0].originID,
            modelID:"",
            modelName:"",

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
    _modelList(page,this.state.id)
  }

  // 选择模型
  selectChange =(selectedRowKeys, selectedRows)=>{
    this.setState({
      modelID:selectedRowKeys,
      modelName:selectedRows[0].name
    })
  }
  // 确认模型校验
  modelCheck =()=>{
    _modelCheck(this.state.modelID,this.state.modelName);
    this.onClose();
  }
    render(){
        const{visible,loading} = this.state;
        const {modelList} = this.state
        const rowSelection = {
          onChange: this.selectChange
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
                选择模型
                </Button>
                <Modal
                    title="模型列表" 
                    visible ={visible}
                    width = {800}
                    onCancel = {this.onClose}
                    footer={null}
                >
                     <Button
                    // size="small"
                    type="normal"
                    className = "normalBtn"
                    onClick={this.modelCheck}
                    >
                    确认选择
                    </Button>
                    <Table  className = "table2" size="middle"  bordered ={true} columns={tableConfig} dataSource={modelList} 
                       pagination = {false}
                       rowKey = {"id"}
                       rowSelection={{
                        type:'radio',
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

export default ModelCheck;

