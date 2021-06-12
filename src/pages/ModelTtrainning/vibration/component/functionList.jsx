import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

/**
 * 振动数据
 */
export function _vibmodelTraining(modelID){
  let flag = false
  $.ajax({
    type:"POST",
    url:hostPort+"equip/vibration/trainModel?modelId="+modelID,
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    success : res=>{
      if(res.flag){
        // console.log(res);
        flag = true
        _vibmodelList(1)
        }
    },
    error:function(){
      
    }
  })
  // return flag;
  _message(flag,'模型训练')
}
/**
 * 删除模型
 */
export function _vibdeleteModel(id){
  // let originID = store.getState().ModelCheckreducer.tableData[0].originID
  let arr = []
  arr.push(id)
  let flag
  $.ajax({
    type:"delete",
    url:hostPort+"equip/vibration/deleteModel",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify(
      arr),
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        _vibmodelList(1)
      }
    },
    error:function(){
    }
  })
  _message(flag,'删除模型')

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
function _message(flag,text){
  if(flag){
    message.success(`${text}成功！`)
  }else{
    message.error(`${text}失败！`)
  }
}



