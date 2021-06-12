import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'
import ModelTraining from '../component/ModelTraining'
// style
import '../style.scss'
 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <ModelTraining   onClick={( )=>{
            return record;
         }}></ModelTraining>
      </Space>
      ),
    },
  ];
export default tableColumns;
