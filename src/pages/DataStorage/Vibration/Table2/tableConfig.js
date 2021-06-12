import {Component} from 'react'
import {hostPort} from '@/Common'

// antd
import {Button,Tags,Space,Image,Modal} from 'antd'

// 方法
import {_deleteCsv,_readCsv} from './TabTable/components/functionList'

// 组件
import CreateLine from './TabTable/components/CreateLine'
 const tableColumns = [
    {
      title: '图片文件名',
      dataIndex: 'fileName',
      key: 'fileName',
    //   render: text => <a>{text}</a>,
    },
    {
      title: '所属部件',
      dataIndex: 'nodeName',
      key: 'nodeName',
    },
    {
      title: '所属数据集',
      dataIndex: 'datasetName',
      key: 'datasetName',
    },

    {
      title: '操作',
      // key: 'action',
      render: (text,record) => (
        <Space size="middle">

         <CreateLine 
          onClick={()=>{
            let result = _readCsv(text.id)
            return result;
          }}
        >查看</CreateLine>
 
        <Button 
          type ="danger"
          size = "small"
          onClick={()=>{
          let Arr = []
          Arr.push(text.id)
          _deleteCsv(Arr)
        }}
        className = 'deleteBtn'
        >删除</Button>
</Space>
      ),
    },
  ];
export default tableColumns;

