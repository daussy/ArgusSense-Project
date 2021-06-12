import {Component} from 'react'
import {hostPort} from '@/Common'

// antd
import {Button,Tags,Space,Image,Modal} from 'antd'

// 方法
import {_createImg,_deleteImage} from './TabTable/components/functionList'
import store from '../../../Store';

 const tableColumns = [
    {
      title: '图片文件名',
      dataIndex: 'imageName',
      key: 'imageName',
    //   render: text => <a>{text}</a>,
    },
    {
      title: '所属部件',
      dataIndex: 'nodeName',
      key: 'nodeName',
    },
    {
      title: '所属数据集',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: '操作',
      // key: 'action',
      render: (text,record) => (
        <Space size="middle">

         <Button 
          onClick={()=>{
          // console.log("查看",text)  
          _createImg(text.id)
          }}
        >查看</Button>
 
        <Button 
          type ="danger"
          onClick={()=>{
          let Arr = []
          Arr.push(text.id)
          _deleteImage(Arr)

        }}
        className = 'deleteBtn'
        >删除</Button>
</Space>
      ),
    },
  ];
export default tableColumns;

