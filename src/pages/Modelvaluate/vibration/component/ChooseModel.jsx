import React,{Component} from 'react';

// antd
import {Button,Space,Modal,Table ,Pagination} from 'antd';

// 方法
import {_vibCreateModelValuate,_vibmodelList,_message} from './functionList';

// store
import store from '@/pages/Store/index'
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
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys,selectedRows });
  };

  createModelValuate=()=>{
      if(this.state.selectedRowKeys.length === 0){
        _message(false,'选择模型')
      }else{
        _vibCreateModelValuate(this.state.selectedRows)
      }
      this.onClose()
  }

    render(){
        const {vibData,vibtotalCount,visible,selectedRowKeys} = this.state;

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
                size = "large"
                >选择模型</Button>
                <Modal
                    title="模型选择" 
                    visible ={visible}
                    width = {1000}
                    destroyOnClose= {true}
                    onCancel = {this.onClose}
                    footer={ <Button onClick ={this.createModelValuate} style= {{marginBottom:"10px"}}>确认创建模型评估任务</Button>
                  }
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
      }
]
