import React,{Component} from 'react'

// antd
import { Table ,Pagination,Space,Button} from 'antd';
// table
import tableConfig from './Table1/tableConfig'
// style
import './style.scss'
const dataSource =[
    {
        algorithm: 'Faster R-CNN',
        task:  '腐蚀检测',
        modelSize:'108MB',
        inputFormat:'JPG、XML',
        modifiedTime:"2020/08/24",
    },
    {
        algorithm: '双向LSTM',
        task:  '剩余寿命预测',
        modelSize:'50MB',
        inputFormat:'CSV',
        modifiedTime:"2020/08/24",
    },
    {
        algorithm: 'CWT-CNN',
        task:  '故障诊断',
        modelSize:'25MB',
        inputFormat:'CSV',
        modifiedTime:"2020/08/24",
    },
  ]
export default class AlgorithmManagement extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
     
        return(
            <div>
                    <Table 
                    style = {{margin:"0px 5px 0px 5px"}}
                      rowKey = {"id"}
                    className = "table2" size="middle"  bordered ={true} columns={tableConfig} dataSource={dataSource} />
                    
            </div>
        );
    }
}
