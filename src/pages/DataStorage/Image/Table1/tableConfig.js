import {Component} from 'react'
// antd
import {Button,Tags,Space} from 'antd'

import { Link } from 'react-router-dom';
// 导入组件
import EditDialog from '../Table1/TabTable/components/EditDialog';
import DeleteBalloon from '../Table1/TabTable/components/DeleteBalloon';
import CheckZip from './TabTable/components/CheckZip'

// 导入方法
import {_LinkToList} from './TabTable/components/functionList'


 const tableColumns = [
    {
      title: '所属部件',
      dataIndex: 'nodeName',
      key: 'nodeName',
    //   render: text => <a>{text}</a>,
    },
    {
      title: '数据集名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '录入时间',
      dataIndex: 'uploadTime',
      key: 'uploadTime',
    },
    {
        title: '最近修改时间',
        dataIndex: 'modifiedTime',
        key: 'modifiedTime',
      },
      {
        title: '操作人员',
        dataIndex: 'importer',
        key: 'importer',
      },

    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <CheckZip
           onClick={( )=>{
             console.log('调用')
            return record;
         }}
        ></CheckZip>
        <EditDialog
            onClick={( )=>{
                return record;
             }}
          />
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
