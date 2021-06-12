
import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import { Table } from 'antd';
// table
 import tableConfig from './component/tableConfig'

// style
import './style.scss'
import {_modelList} from './component/functionList'
export default class LifePrediction extends Component{
    constructor(props){
        super(props)
        this.state ={
            dataSource:store.getState().LifePredictionreducer.tableData,
        }
        store.subscribe(this.handleStoreChange)
    }


    handleStoreChange = ()=>{
        this.setState({
            dataSource:store.getState().LifePredictionreducer.tableData,
            dataType:store.getState().ModelTrainingreducer.dataType,
        })
    }

    render(){
        const {dataSource} = this.state
        const  data  =[
            {
                fileID:"1390281874382786562",//上传的文件id
                datasetName:"数据.csv", //文件名
                name:"test", //模型名称
                step:"2",
                id:"1390282229141213186" , //结果文件id
            }
        ]
        return(
            <div>
                    <Table  className = "table1" size="small"  bordered ={true} columns={tableConfig} dataSource={data} 
                    pagination = {false}
                    />
            </div>
        );
    }
}