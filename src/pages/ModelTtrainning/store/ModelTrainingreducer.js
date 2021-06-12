const dataStorage={
  taskList:[],
  tableData:[
    {
      originID:"",//
      preprocessedID:"",//未训练但预处理完的ID
      datasetName:"", //文件名
      resultID:"", //训练完成的ID
    }
  ],
  modelTrainingTable:[{
    modelName:'模型1',
    algorithm:'长短时记忆循环神经网络',
    neuronsNumber:'32',
    netNum:'2',
    Dropout:'5',
    learningRate:'0.001',
    numEpochs:'2',
    trainingTime:'2.8min',
    id:1
  },{
    modelName:'模型2',
    id:2
  }
  ],
  totalCount:'',
  key:'',//当前选中的树节点
  ModelTrainingID:1,//当前选中的处理文件的ID
  fileName: '数据集1', //预处理结束，进行模型训练的文件名
 
 
  

  imageModelTraining:{
    modelTrainingTable:[],
    /**
     * {
  "classifierLr": "string",
  "convolutionalLayers": "string",
  "dropOut": "string",
  "epochLength": "string",
  "id": "string",
  "learningRate": "string",
  "method": 0,
  "modelFileId": "string",
  "name": "string",
  "netNum": "string",
  "neuronsNumber": "string",
  "numEpochs": "string",
  "outPutConfPath": "string",
  "outPutModelPath": "string",
  "poolingLayers": "string",
  "resultFile": "string",
  "rpnLr": "string",
  "setId": "string",
  "sourceFile": "string"
}
     */
    tableData:[
       
    ],
    chooseDataset:[
      {
        "filename":"455",
        "time":"555",
        "device":"555",
        "unit":"555",
        "method":"555",
        "code":"555"
      },  
      ]
  },

  vibModelTraining:{
    taskTable:[
      {
        id:"",
        name:"",
        minNum:"",
        lr:"",
        iterNum:"", 
        status:"", 
      }
    ],
    modelList:[
      {
        id:"",
        name:"",
        minNum:"",
        lr:"",
        iterNum:"", 
        status:"", 
      }
    ],
    totalCount:0
  },

  flag:0,//0表示未处理,1表示正在处理,2表示处理完毕

  modelConstructorValue:null,

  dataType:1 
  /**
   * 图像数据  dataType:1
时序数据  dataType:2
振动数据  dataType:3
   */
 

}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const ModelTrainingreducer = (state=dataStorage,action)=>{    
/**
 * 时序数据
 */
  //初始化加载
  if(action.type==='preProcessing'){  
    const newState=JSON.parse(JSON.stringify(state));
    newState.tableData[0].datasetName = action.record.datasetName
    newState.tableData[0].originID = action.id 
    newState.tableData[0].preprocessedID = action.returnData.resultFileId //预处理结束的id
    newState.dataType = 2
    return newState; 
  }
  //模型列表
  if(action.type ==='sequenceModelList'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.modelTrainingTable = action.returnData.pageList
    // console.log(  newState.modelTrainingTable,'  newState.modelTrainingTable')
    return newState
  }

/**
 * 图像数据
 */
// 初始化
  if(action.type ==='modelConstruct'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.imageModelTraining.tableData[0]=action.dataset 
    newState.dataType = 1
    return newState
  }
// 提交模型训练
if(action.type === 'ImagemodelTrainingSubmit'){
  const newState = JSON.parse(JSON.stringify(state));
  newState.imageModelTraining.tableData[0].trainStatus = '已完成'
  return newState;
}
// 刷新模型列表
if(action.type === 'ImagemodelList'){
  const newState = JSON.parse(JSON.stringify(state));
  newState.imageModelTraining.modelTrainingTable=action.returnDataList
  return newState;
}

/**
 * 振动数据
 */
// 模型创建
if(action.type === 'vibModelCreate'){
  const newState = JSON.parse(JSON.stringify(state));
  newState.dataType = 3
  let e =action.res.data
  newState.vibModelTraining.taskTable[0] = {
    id:e.id,
    name:e.name,
    iterNum:e.iterNum,
    minNum:e.minNum,
    lr:e.lr,
    setId:e.setId,
    status:e.status,
  }
  return newState;
}

if(action.type === 'vibModelList'){
  const newState = JSON.parse(JSON.stringify(state));
  newState.dataType = 3
  newState.vibModelTraining.modelList = []
  action.returnData.map((item,index)=>{
    if(item.fileLocation){
      newState.vibModelTraining.modelList.push(
        {
          ...item,
          state:"已训练"
        }
      )
    }else{
      newState.vibModelTraining.modelList.push(
        {
          ...item,
          state:"未训练"
        }
      )
    }
  })
  // newState.vibModelTraining.modelList = action.returnData
  newState.vibModelTraining.totalCount = action.totalCount 
  return newState;
}


    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话 
}
export default ModelTrainingreducer