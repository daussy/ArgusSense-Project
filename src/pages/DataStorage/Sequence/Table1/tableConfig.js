import {Component} from 'react'
// antd
import {Button,Tags,Space} from 'antd'

import { Link } from 'react-router-dom';
// 导入组件
import DeleteBalloon from '../Table1/TabTable/components/DeleteBalloon';
import CheckDialog from './TabTable/components/CheckDialog'

// 导入方法
import {_LinkToList} from './TabTable/components/functionList'

 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'name',
    key: 'name',
  },
    {
      title: '所属部件',
      dataIndex: 'nodeName',
      key: 'nodeName',
    //   render: text => <a>{text}</a>,
    },
    {
      title:"上传时间",
      dataIndex:"uploadTime",
      key:"uploadTime"
    },

    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <CheckDialog
           onClick={( )=>{
            return record;
         }}
        ></CheckDialog>
        <DeleteBalloon
         onClick={( )=>{
            return record;
         }}
        />
        <Link to="/Devproject/DataProcessing" >
        <Button
          size="small"
          type="primary"
          onClick={( )=>{
          _LinkToList(record)
            return record;
         }}
        >
          流程
        </Button>
      </Link>
</Space>
      ),
    },
  ];
export default tableColumns;
