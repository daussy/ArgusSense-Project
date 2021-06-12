import {Component} from 'react'
import {hostPort} from '@/Common'

// antd
import {Button,Tags,Space,Image,Modal} from 'antd'

const str = `${hostPort}equip/image/view?imageId=`
 const tableColumns = [
    {
      title: '文件名',
      dataIndex: 'imageName',
      key: 'imageName',
    //   render: text => <a>{text}</a>,
    },
    {
      title: '原始图片',
      dataIndex: 'preImg',
      key: 'preImg',
      render: (text,record) => {
      
        return (
          <Image src = {`${str}${record.id}&type=in`} width = {200} height= {200}></Image>
        )
      },
    },
    {
      title: '处理后的图片',
      dataIndex: 'resultImg',
      key: 'resultImg',
      render: (text,record) => {
        return (
          <Image src = {`${str}${record.id}&type=out`} width = {200} height= {200}></Image>
        )
      },
    },   
    {
      title: '腐蚀占比',
      dataIndex: 'corrosionRate',
      key: 'corrosionRate',
    },

    {
      title: '操作',
      // key: 'action',
      render: (text,record) => (
        <Space size="middle">

         <Button 
         size="small"
          onClick={()=>{
          }}
        >详细信息</Button>
 
        <Button 
         size="small"

          type ="danger"
          onClick={()=>{
        }}
        className = 'deleteBtn'
        >删除</Button>
</Space>
      ),
    },
  ];
export default tableColumns;

