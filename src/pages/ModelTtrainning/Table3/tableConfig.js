import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'
import ImgTrainning from '../component/ImgTrainning'
import DetailMsg from '../component/DetailMsg'
// style
import '../style.scss'
 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },
  {
    title: '输出模型名称',
    dataIndex: 'modelName',
    key: 'modelName',
  },
  {
    title: '训练状态',
    dataIndex: 'trainStatus',
    key: 'trainStatus',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <DetailMsg
        ></DetailMsg>
        <ImgTrainning   onClick={( )=>{
            return record;
         }}></ImgTrainning>
      </Space>
      ),
    },
  ];
export default tableColumns;
