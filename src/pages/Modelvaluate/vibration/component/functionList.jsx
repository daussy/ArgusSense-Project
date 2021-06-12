import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

/**
 * 振动数据
 */
// 创建模型评估
export function _vibCreateModelValuate(values){
  let flag = false
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 
  let testSetId = store.getState().DatasetConstructReducer.testSetId

  $.ajax({
    type:"POST",
    // POST /equip/vibration/modelAssessSave
    url:hostPort+"equip/vibration/modelAssessSave",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify({
        "modelId": values[0].id,

        "startTime": new Date(),
        "transformId": testSetId

    }),
    async:false,
    success : res=>{
      if(res.flag){
        flag = true
        _vibModelValuateList(1)
        }
    },
    error:function(){
      
    }
  })
  // return flag;
  _message(flag,'创建模型评估')
}


// 模型评估
export function _vibModelValuate(id){
  let flag = false 
  $.ajax({
    type:"POST",
    //POST /equip/vibration/modelAssessDo
    url:hostPort+"equip/vibration/modelAssessDo?id="+id,
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    success : res=>{
      if(res.flag){
        flag = true
        _vibModelValuateList(1)
        }
    },
    error:function(){
    }
  })
  // return flag;
  _message(flag,'模型评估')
}
/**
 * 删除模型评估
 */
export function _vibdeleteModelValuate(id){
  // let originID = store.getState().ModelCheckreducer.tableData[0].originID
  let arr = []
  arr.push(id)
  let flag
  $.ajax({
    type:"delete",
    url:hostPort+"equip/vibration/mAD",
    // equip/vibration/mAD
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify(
      arr),
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        _vibModelValuateList(1)
      }
    },
    error:function(){
    }
  })
  _message(flag,'删除模型')

}

/**
 * 获取模型评估分页查询
 */
export function _vibModelValuateList(page){
  let returnDataList
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 

  $.ajax({
    type:"post",
    url:hostPort+"equip/vibration/mASP",
    // /POST /equip/vibration/mASP
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify({
      "pageNo": page,
      "pageSize": 10,
      "queryParameter": {
        "transformId": transformedID
      }
    }),
    success:function(res){
      if(res.flag){
        returnDataList=res.data.pageList
       let totalCount = res.data.totalCount
       const action ={
        type:'vibModelValuateList',
        returnDataList,
        totalCount
      }
    store.dispatch(action)
      }
    },
    error:function(){
    }
  })
}

/**
 * 获取模型列表
 */
export function _vibmodelList(page){
  let returnData
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 
  let trainSetId = store.getState().DatasetConstructReducer.trainSetId

  $.ajax({
    type:"post",
    url:hostPort+"equip/vibration/modelSelectPage",
    // /POST /equip/vibration/modelSelectPage
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify({
      "pageNo": page,
      "pageSize": 10,
      "queryParameter": {
        "setId": trainSetId
      }
    }),
    success:function(res){
      if(res.flag){
       returnData=res.data.pageList
       let totalCount = res.data.totalCount
       const action ={
        type:'vibModelList',
        returnData,
        totalCount
      }
    store.dispatch(action)
      }
    },
    error:function(){
    }
  })
}


/**
 * message
 */
export function _message(flag,text){
  if(flag){
    message.success(`${text}成功！`)
  }else{
    message.error(`${text}失败！`)
  }
}



