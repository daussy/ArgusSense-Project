import React,{Component} from 'react';

// antd
import {Button,Upload,Modal,Table ,Pagination} from 'antd';
import { UploadOutlined } from '@ant-design/icons'

// 方法
import {_vibmodelList,_message,_vibTaskpageonChange} from './functionList';

// store
import store from '@/pages/Store/index'
import {hostPort} from '@/Common'
// style
import '../../style.scss'
export default class ChooseModel extends Component{
    constructor(props){
        super(props)


        this.state={
            selectedRowKeys:"",
            selectedRows:"",
            vibData:store.getState().ModelTrainingreducer.vibModelTraining.modelList,
            vibtotalCount:store.getState().ModelTrainingreducer.vibModelTraining.totalCount,
            visible:false,
            modelID:"",
            disabled:true
        }
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange = ()=>{
        this.setState({
            vibData:store.getState().ModelTrainingreducer.vibModelTraining.modelList,
            vibtotalCount:store.getState().ModelTrainingreducer.vibModelTraining.totalCount,
        })
    }

         // 打开编辑弹窗
         onOpen = () => {    
            this.setState({
            visible: true,
            }
            );
       
        };
    
        // 关闭弹窗
        onClose = () => {
            this.setState({
            visible: false,
            });
        };

        vibpageonChange=(page,pageSize)=>{
            _vibmodelList(page)
          }

          /**
   * 表格选择
   */
  onSelectChange = (selectedRowKeys,selectedRows) => {
    this.setState({ selectedRowKeys,selectedRows });
    if(selectedRowKeys.length === 1){
      this.setState({
        disabled:false
      })
    }
  };


      // 上传文件
      upload=(info)=> {
        let flag = false
        if (info.file.response) {
            let response = info.file.response
            if(response.flag){
            flag = true
            _vibTaskpageonChange(1)
            this.onClose()
            }
        _message(flag,'上传csv文件')
        }
      } 
  

    render(){
        const {vibData,vibtotalCount,visible,selectedRowKeys,disabled} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            type:"radio",
          };
        return(
            <div>
                 <Button
                type="normal"
                className = "normalBtn"
                onClick={this.onOpen}
                // size = "middle"
                >进行状态评估</Button>
                <Modal
                    title="模型选择" 
                    visible ={visible}
                    width = {1000}
                    destroyOnClose= {true}
                    onCancel = {this.onClose}
                    footer={[
                      <Upload 
                      showUploadList ={false}
                      name = 'file'
                      onChange = {this.upload}
                      action={hostPort+"equip/vibration/sASOU?modelId="+this.state.selectedRowKeys[0]}
                    >
                      <Button icon={<UploadOutlined />}  
                      disabled ={disabled}   type="normal"className = "normalBtn">上传csv文件</Button>
                    </Upload>
                    ]}
                >
                    <div className = "table2" >
                        <Table  bordered ={true} columns={tableConfig} dataSource={vibData} 
                                pagination = {false}
                                rowSelection={{
                                    ...rowSelection,
                                  }}
                                  rowKey = {"id"}
                            />
                        
                    </div>
                    <Pagination
                                style = {{marginTop:"10px"}}
                                onChange = {this.vibpageonChange}
                                showSizeChanger
                                defaultCurrent={1}
                                total={vibtotalCount}
                                />
                </Modal>
            </div>
        )
    }
}


const tableConfig =[
    {
        title: '模型',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '训练批次',
        dataIndex: 'minNum',
        key: 'minNum',
      },
      {
        title: '学习率',
        dataIndex: 'lr',
        key: 'lr',
      },
      {
        title: '迭代次数',
        dataIndex: 'iterNum',
        key: 'iterNum',
      },
      {
        title: '训练状态',
        dataIndex: 'state',
        key: 'state',
      },
]
