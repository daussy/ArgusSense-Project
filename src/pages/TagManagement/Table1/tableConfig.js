import {Component} from 'react'
// antd
import {Button,Space,Cascader} from 'antd'

// 导入方法
import {_deleteLabel} from '../component/functionList'
import UploadLabel from '../component/UploadLabel'
import ViewImg from '../component/ViewImg'
// style
import '../style.scss'


 const tableColumns = [
  {
    title: '图片名',
    dataIndex: 'imageName',
    key: 'imageName',
  },
  {
    title: "标签名",
    dataIndex: 'labelName',
    key: 'labelName',
  },
  {
    title: "是否标注",
    dataIndex: 'tag',
    key: 'tag',
    filters: [
      {
        text: '是',
        value: '是',
      },
      {
        text: '否',
        value: '否',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.tag.indexOf(value) === 0,
    sortDirections: ['descend'],
  
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
          {/* 查看图片 */}
          <ViewImg  onClick={( )=>{
            return record;
         }}></ViewImg>
        <UploadLabel   onClick={( )=>{
            return record;
         }}></UploadLabel>

            {/* 删除标签 */}
            <Button 
          className = "deleteBtn"
          type ="danger" 
          onClick={()=>{
          _deleteLabel(text.id)
          }}
        >删除标签</Button>
      </Space>
      ),
    },
  ];
export default tableColumns;
