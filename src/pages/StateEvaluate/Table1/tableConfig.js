import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'
import GetResult from '../component/GetResult'
// style
import '../style.scss'
 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },  {
    title: '操作人',
    dataIndex: 'operator',
    key: 'operator',
  },  {
    title: '检测状态',
    dataIndex: 'detectionStatus',
    key: 'detectionStatus',
  },  {
    title: '评估模型',
    dataIndex: 'modelName',
    key: 'modelName',
  },
  {
    title: '识别数量',
    dataIndex: 'detectionNum',
    key: 'detectionNum',
  },
  {
    title: '操作时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  }, 
 
    {
      title: '操作',
      key: 'action',
      render: (text,record) => {
        return(
          <Space size="middle">
   
          <GetResult
          onClick={( )=>{
            return record;}}
          ></GetResult>
       
        </Space>
        )
     
       
      }
    },
  ];
export default tableColumns;
