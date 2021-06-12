import {Component} from 'react'
// antd
import {Space} from 'antd'

// 导入方法
import {_deleteLabel} from '../component/functionList'
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
  },
  {
    title: "划分类别",
    dataIndex: 'setType',
    key: 'setType',
    filters: [
      {
        text: '未划分',
        value: '未划分',
      },
      {
        text: '测试集',
        value: '测试集',
      },
      {
        text: '训练集',
        value: '训练集',
      },
    ],
    onFilter: (value, record) => record.setType.indexOf(value) === 0,
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
      </Space>
      ),
    },
  ];
export default tableColumns;
