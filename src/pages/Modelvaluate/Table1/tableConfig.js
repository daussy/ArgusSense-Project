import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'
import ImgValuate from '../component/ImgValuate'
import DetailMsg from '../component/DetailMsg'
import DeleteModel from '../component/DeleteModel'
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
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '评估状态',
    dataIndex: 'evaluateStatus',
    key: 'evaluateStatus',
  }, {
    title: '创建时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '评估指标',
    dataIndex: 'evlResult',
    key: 'evlResult',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => {
        return(
          <Space size="middle">
          <DetailMsg onClick={( )=>{
              return record;}}
          ></DetailMsg>
          <ImgValuate   onClick={( )=>{
              return record;
           }}></ImgValuate>
           <DeleteModel onClick={( )=>{
              return record;
           }}></DeleteModel>
        </Space>
        )
     
       
      }
    },
  ];
export default tableColumns;
