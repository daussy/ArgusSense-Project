const dataStorage={
  preProcessingTable:[
    {
      datasetName: '',
      algorithm: '',
      originID:'',
      resultID:"", //结果id
      prestate:"未处理",
      time:"",
      nodeName:"", //节点名字
      menuId:"",//节点id
      importer:"",//处理人
      resultFile:"" , //结果文件名
    }
  ],
  key:'',//当前选中的树节点
  preProcessingID:'',//当前选中的处理文件的ID
  fileName:'',   //当前处理的原始文件名
  preprocessedfileID:'',//当前已经预处理结束的文件id
  resultFileId:'',//结果文件ID
  flag:0 ,//未处理时为0，正在处理为1，处理完成为2
  dataType:2 ,//
}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const Preprocessingreducer = (state=dataStorage,action)=>{
  /**
   * 图像数据
   */
    /**
      * 流程按钮
      */
     if(action.type==='imageFileID'){    //当前选择的文件ID
      const newState=JSON.parse(JSON.stringify(state));
      newState.dataType = 1
      return newState;
     }
  /**
   * 时序数据
   */
  if(action.type==='sequenceFileID'){  //数据预处理表格初始化
    const newState=JSON.parse(JSON.stringify(state));
    newState.dataType = 2
    newState.preProcessingTable[0].datasetName=action.record.name
    newState.preProcessingTable[0].originID = action.id
    newState.preProcessingTable[0].prestate = '未处理'
    newState.fileName=action.record.name
    return newState;
   }

  if(action.type==='preProcessing'){  //数据预处理后的结果  
    const newState=JSON.parse(JSON.stringify(state));
    newState.resultFileId = action.returnData.resultFileId
    newState.preProcessingTable[0].resultID = action.returnData.resultFileId
    newState.preProcessingTable[0].algorithm =action.algorithm
    newState.preProcessingTable[0].prestate = '已完成'
    
    return newState;
   }

  /**
   * 振动数据
   */
  // 数据初始化
  if(action.type === 'VibrationFileID'){
    const newState=JSON.parse(JSON.stringify(state));
    newState.dataType = 3
    newState.preProcessingTable[0] = {
      ...action.record,
      datasetName:action.record.name,
      prestate:"未处理"
    }
    newState.fileName=action.record.name
   return newState;
  }
  // 预处理完成
  if(action.type==='vibpreProcessing'){  //数据预处理后的结果  
    const newState=JSON.parse(JSON.stringify(state));
    newState.resultFileId = action.returnData.resultFileId
    newState.preProcessingTable[0].algorithm =action.algorithm
    newState.preProcessingTable[0].prestate = '已完成'
    newState.preProcessingTable[0].time = action.returnData.operatTime
    newState.preProcessingTable[0].resultID = action.returnData.id
    newState.preProcessingTable[0].resultFile = action.returnData.fileName  
    return newState;
   }
   

    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话
   
}
export default Preprocessingreducer