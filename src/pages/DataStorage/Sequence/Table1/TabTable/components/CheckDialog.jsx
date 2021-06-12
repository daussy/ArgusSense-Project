import React,{Component} from 'react'
//antd
import {Button,Modal,Table,InputNumber} from 'antd'
// 导入方法
import {_checkDialog} from './functionList'
// 导入组件
import CreateLineChart from './CreateLineChart'
export default class CheckZip extends Component{
    constructor(props){
        super(props)
        this.state ={
            visible:false,
            column:[],
            dataSource:[],
        }
    }

    CheckZip = ()=>{
        let record =  this.props.onClick()
        this.setState({
            visible:true,
        })
        let dataTable 
        if(record){
            let id = record.id
            dataTable = _checkDialog(id)
            this.setState({
                column:dataTable.column,
                dataSource:dataTable.data
            })
        }
   }

   onClose = ()=>{
       this.setState({
           visible:false,
       })
   }

    render(){
        const {visible,column,dataSource}  = this.state;
        return(
            <div style={styles.checkDialog}>

                <Button
                size="small"
                type="normal"
                onClick={this.CheckZip}
                >
                查看
                </Button>
            <Modal
                destroyOnClose  = {true}
                title="查看数据" 
                visible ={visible}
                width = {1500}
                onCancel = {this.onClose}
                footer={null}
            >
                <CreateLineChart max= {this.state.column.length-1} dataSource={dataSource} ></CreateLineChart>
                <Table columns={column} dataSource={dataSource} scroll={{ x: 1000, y: 400 }} ></Table>
            </Modal>

            </div>
        )
    }

}

const styles = {
    checkDialog: {
      display: 'inline-block',
      marginRight: '5px',
    },
  };
  