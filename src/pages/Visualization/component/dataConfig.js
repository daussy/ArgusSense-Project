import {Tag,Button} from 'antd'
import DetailMsg from '../../ModelTtrainning/vibration/component/DetailMsg';

// 方法
import {_vibStateValuateResult} from './functionList'
const basicMsg = {
    title:"基本信息",
    data:[
        ["名称","浆轴传动系统"],
        ["编号","001"],
        ["型号","ML0023"],
        ["位置","xxx地区"]
    ]
}

const basicParameter = {
    title:"基本参数",
    data:[
        ["长","xxx m "],
        ["宽","xxx m "],
        ["质量","xxx kg "],
        ["转轴直径","xxx mm "],
        ["临界转速","1000r/min"],
        ["转速","1000"],
    ]
}

const errorMsg ={
    title:"故障信息",
    data:[
        ["故障A","转子不平衡"],
        ["故障B","碰磨"],
        ["故障C","油膜涡动"],
        ["故障D","不对中"],
    ]
};

const detectAnomalies = {
    columns:[
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            render: tags => {
                let color
                if (tags === '异常') {
                    color = 'red';
                  }else{
                      color = 'green'
                  }
                  return (
                    <Tag color={color} key={tags}>
                      {tags}
                    </Tag>
                  );
            }
        },
    ],
    data:[
        {
            name:"SN039",
            time:"2020-10-2",
            state:"异常"
        },
        {
            name:"FJE1238",
            time:"2020-09-03",
            state:"健康"
        },
        {
            name:"轴系",
            time:"2019-03-04",
            state:"健康"
        },
        {
            name:"发动机",
            time:"2020-08-10",
            state:"异常"
        }
    ]
}
    
const tableColumns = [
    {
      title: '模型',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '训练批次',
      dataIndex: 'minNum',
      key: 'minNum',
    },
    {
      title: '学习率',
      dataIndex: 'lr',
      key: 'lr',
    },
    {
      title: '迭代次数',
      dataIndex: 'iterNum',
      key: 'iterNum',
    },
    {
      title: '训练状态',
      dataIndex: 'state',
      key: 'state',
      render:(text,record)=>{
      if(record.status === '未训练'){
          return <Tag color="warning" >未训练</Tag>;
      }else{
          return <Tag color="success" >已训练</Tag>;
      }
  }
    },
      {
        title: '操作',
        key: 'action',
        render: (text,record) => {
            return(
                  <DetailMsg buttonType={"dashed"} buttonGhost = {true} onClick = {
                    ()=>{
                      return record;
                    }
                  }></DetailMsg>
            )
      },
      },
    ];

const resultColumns = [
        {
          title: '结果文件名',
          dataIndex: 'fileName',
          key: 'fileName',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          render:(text,record)=>{
            if(record.status === '未开始'){
                return <Tag color="warning" >未开始</Tag>;
            }else{
                return <Tag color="success" >已完成</Tag>;
            }
        }
        },
        {
          title: '结果',
          dataIndex: 'result',
          key: 'result',
        },
        {
            title: '操作',
            key: 'action',
            render:(text,record)=>{
                if(record.status === '未开始'){
                    return null;
                }else{
                    return(
                        <Button type="dashed" size="small" ghost onClick = {()=>{
                            _vibStateValuateResult(record)              
                        }} >查看结果</Button>
                    )
                       
                }
            }
          }
        ];




const resultArr = [
    0.3,0.5,0.6,0.12,0.26,0.335,0.698,0.2559,0.244,0.458,0.336,0.07,0.078,0.595,
    // {
    //     result : <Tag color="success">正常</Tag>,
    //     probability:"0%",
    // },
    // {
    //     result : <Tag color="success">正常</Tag>,
    //     probability:"0.5%",
    // },
    // {
    //     result : <Tag color="warning">警告</Tag>,
    //     probability:"22.3%",
    // },
    // {
    //     result : <Tag color="success">正常</Tag>,
    //     probability:"0.8%",
    // },
    // {
    //     result : <Tag color="warning">警告</Tag>,
    //     probability:"35.2%",
    // },   {
    //     result : <Tag color="warning">警告</Tag>,
    //     probability:"19.2%",
    // },
    // {
    //     result : <Tag color="error">故障</Tag>,
    //     probability:"70.33%",
    // },
    // {
    //     result : <Tag color="success">正常</Tag>,
    //     probability:"1.3%",
    // },
    // {
    //     result : <Tag color="success">正常</Tag>,
    //     probability:"2.9%",
    // },
    // {
    //     result : <Tag color="success">正常</Tag>,
    //     probability:"0.595%",
    // },
    // {
    //     result : <Tag color="error">故障</Tag>,
    //     probability:"87.33%",
    // },
    // {
    //     result : <Tag color="error">故障</Tag>,
    //     probability:"75.3%",
    // },
    // {
    //     result : <Tag color="error">故障</Tag>,
    //     probability:"56.2%",
    // },
]
export  {basicMsg , basicParameter, errorMsg,detectAnomalies,tableColumns,resultColumns,resultArr};