import {Component} from 'react'
// antd
import {Button,Space} from 'antd'


// style
import '../../style.scss'
import DetailMsg from '../component/DetailMsg'

// 导入方法
import {_vibModelValuate,_vibdeleteModelValuate} from '../component/functionList'
 const tableColumns = [
  {
    title: '模型名称',
    dataIndex: 'modelName',
    key: 'modelName',
  },
  {
    title: '模型ID',
    dataIndex: 'modelId',
    key: 'modelId',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: '评估状态',
    dataIndex: 'evaluateStatus',
    key: 'evaluateStatus',
  },
  {
    title: '评估结果',
    dataIndex: 'result',
    key: 'result',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
           <DetailMsg
             onClick ={ ()=>{
              return record;
            }}
           ></DetailMsg> 
           {
             record.evaluateStatus === '已完成' ?  <Button  className = "normalBtn"   size = "middle" onClick = {()=>{
              _vibModelValuate(record.id) }}  disabled>开始评估</Button> :  <Button  className = "normalBtn"   size = "middle" onClick = {()=>{
              _vibModelValuate(record.id)
            }} >开始评估</Button>
           }
           
            <Button type = "danger"      size = "middle" className ="deleteBtn"
              onClick ={ ()=>{
                _vibdeleteModelValuate(record.id)
              }}
            >删除任务</Button>

       
</Space>
      ),
    },
  ];
export default tableColumns;
