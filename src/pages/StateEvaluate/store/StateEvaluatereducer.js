const dataStorage={
  
    dataType:1 ,
    /**
     * 图像数据  dataType:1
       时序数据  dataType:2  
       振动数据  dataType:3
     */
    zipMsg:{},
    imageStateValuate:{
        task:[],//待检测的任务
        resultList:[], //任务结果
        totalCount:0 ,// 结果数量
    },

    vibStateValuate:{
        taskList:[],
        resultList:[],
        taskTotalCount:0,
    },
  
  }
  //reducer可以接受state，但是不能修改state，所以必须要拷贝一份
  const StateEvaluatereducer = (state=dataStorage,action)=>{    
  
  /**
   * 图像数据
   */
      // 流程按钮
       if(action.type==='imageFileID'){    //当前选择的文件ID
        const newState=JSON.parse(JSON.stringify(state));
        // console.log(action)
        newState.zipMsg = {...action.record}
        newState.dataType = 1
        return newState;
       }
    //    上传检测图片
       if(action.type === 'StateEvaluateImportZip'){
           const newState = JSON.parse(JSON.stringify(state));
        //    console.log(action.response,action.modelName,action.modelID)
        newState.resultSetid  =   action.response.data[0].setId;
           newState.imageStateValuate.task.push({
               modelID:action.modelID,
               operator:"admin",
               detectionStatus:"已完成",
               modelName:action.modelName,
               detectionNum:action.response.data.length,
               updateTime:"",
               setId:action.response.data[0].setId,
           })
           return newState;
       }
           // 获取结果
    if(action.type === 'ImgStateValuateResult'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.imageStateValuate.resultList = action.returnDataList;
        newState.imageStateValuate.totalCount = action.totalCount;
        return newState;
    }

    /**
     * 振动数据
     */

    //  分页查询
    if(action.type === 'vibStateValuateList'){
        const newState = JSON.parse(JSON.stringify(state));
        // console.log(action.response)
        newState.vibStateValuate.taskList = action.returnDataList
        newState.vibStateValuate.taskTotalCount = action.totalCount
        return newState;
    }

    // 获取结果
    if(action.type === 'vibStateValuateResult'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.vibStateValuate.resultList = action.record
        return newState;
    }



  
  
      return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话 
  }
  export default StateEvaluatereducer