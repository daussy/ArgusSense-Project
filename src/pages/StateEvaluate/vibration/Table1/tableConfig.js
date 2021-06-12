import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

// 导入方法
import {_vibModelValuate,_vibdeleteStateValuate,_vibStateValuateResult} from '../component/functionList'
// style
import '../../style.scss'

const tableColumns = [
  {
    title: '文件名',
    dataIndex: 'fileName',
    key: 'fileName',
  },
  {
    title: '创建时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '评估状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '结果',
    dataIndex: 'result',
    key: 'result',
  },
  

    {
      title: '操作',
      key: 'action',
      render:(text,record)=>{
        return(
          <Space size="middle">
            {
              record.status === '未开始' ?  (
                <Button  className = "normalBtn" onClick = {()=>{
                _vibModelValuate(record.id)
              }} >开始评估</Button>
              ) :(
                <Button  className = "normalBtn" onClick = {()=>{
                _vibModelValuate(record.id)
              }}  disabled>开始评估</Button>
              ) 
            }
        
          {
            record.status === '未开始' ? null:<Button  className = "normalBtn" onClick = {()=>{
              _vibStateValuateResult(record)              
            }} >查看结果</Button>
          }
         
           <Button  className = "deleteBtn" type = {"danger"} onClick = {()=>{
            _vibdeleteStateValuate(record.id)
          }} >删除</Button>
        </Space>
        )
       
      }
    }
  ];
export default tableColumns;
