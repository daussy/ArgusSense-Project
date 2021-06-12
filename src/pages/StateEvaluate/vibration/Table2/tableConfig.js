import {Component} from 'react'
// antd
import {Button,Image} from 'antd'

// 方法
import {_deleteCsv,_readCsv} from '../component/functionList'

// 组件
import CreateLine from '../component/CreateLine'
// style
import '../../style.scss'

import {hostPort} from '@/Common'

 const tableColumns = [
  {
    title: '文件名',
    dataIndex: 'fileName',
    key: 'fileName',
  },
 
  {
    title: '上传时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '振动信号图 ',
    key: 'createLine',
    render: (text,record) => (
      <CreateLine 
      onClick={()=>{
        if(text.id){
          let result = _readCsv(text.id)
          return result;
        }
     
      }}
    ></CreateLine>
    ),
  },
  {
    title: '时频图',
    key: 'createImg',
    render: (text,record) => (
      <Image
      width={200}
      src={`${hostPort}equip/vibration/view/?id=${record.id}&type=jpg`}
      // http://192.168.1.173:9001/equip/vibration/view?id=d8980df638f8ca301accd34c37465345&type=jpg
    />
    ),
  },
  {
    title: '结果',
    dataIndex: 'result',
    key: 'result',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
           <Button type = "danger"      size = "middle" className ="deleteBtn"
              onClick ={ ()=>{
                // _vibdeleteModelValuate(record.id)
              }}
            >删除</Button>
      ),
    },
  ];
export default tableColumns;
