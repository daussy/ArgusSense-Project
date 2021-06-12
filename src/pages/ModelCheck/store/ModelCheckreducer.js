const dataStorage={
  tableData:[
    {
      originID:"",//
      preprocessedID:"",//未训练但预处理完的ID
      datasetName:"", //文件名
      resultID:"", //训练完成的ID
      name:"", //模型名称
      accuracy:"", //校验精度

    }
  ],
  modelTrainingTable:[
  ],
  totalCount:'',
  key:'',//当前选中的树节点
  ModelTrainingID:1,//当前选中的处理文件的ID
  fileName: '数据集1', //预处理结束，进行模型训练的文件名

  flag:0,//0表示未处理,1表示正在处理,2表示处理完毕

  dataType:1 


}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const ModelCheckreducer = (state=dataStorage,action)=>{    
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
      return newState
    }
    // 模型校验
       //模型列表
       if(action.type ==='modelCheck'){
        console.log(action,'action');
        const newState = JSON.parse(JSON.stringify(state));
        newState.tableData[0].name = action.modelName
        newState.tableData[0].accuracy = action.returnData
        console.log('    newState.tableData[0]',    newState.tableData[0])
        return newState
      }
  


    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话 
}
export default ModelCheckreducer