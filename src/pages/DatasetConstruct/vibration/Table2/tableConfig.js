// antd
import {Space} from 'antd'

// 导入方法
import ViewImg from '../component/ViewImg'

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
    title: "是否标注",
    dataIndex: 'labelOrnot',
    key: 'labelOrnot',
  },
  {
    title: "划分类别",
    dataIndex: 'divideOrnot',
    key: 'divideOrnot',
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
    onFilter: (value, record) => record.divideOrnot.indexOf(value) === 0,
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
