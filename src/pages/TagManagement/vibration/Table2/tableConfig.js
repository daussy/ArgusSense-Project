// antd
import {Button,Space,Cascader} from 'antd'

// 导入方法
import {_deleteLabel} from '../component/functionList'
import AddLabel from '../component/AddLabel'
import ViewImg from '../component/ViewImg'
// style
import '../../style.scss'


 const tableColumns = [
  {
    title: '图片名',
    dataIndex: 'fileName',
    key: 'fileName',
  },
  {
    title: "标签名",
    dataIndex: 'label',
    key: 'label',
  },
  {
    title: "类别",
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: "是否标注",
    dataIndex: 'labelOrnot',
    key: 'labelOrnot',
    filters: [
      {
        text: '已标注',
        value:'已标注',
      },
      {
        text: '未标注',
        value: '未标注',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.labelOrnot.indexOf(value) === 0,
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
          <AddLabel onClick={( )=>{
            return record;}}
          ></AddLabel>
            {/* 删除标签 */}
            <Button 
          className = "deleteBtn"
          type ="danger" 
          size = {"small"}

          onClick={()=>{
            let e = []
            e.push(text.id)
          _deleteLabel(e)
          }}
        >删除标签</Button>
      </Space>
      ),
    },
  ];
export default tableColumns;
