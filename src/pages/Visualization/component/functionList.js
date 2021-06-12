import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'



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
      "pageSize": 6,
      // "queryParameter": {
      //   "setId": trainSetId
      // }
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

/**
 * 获取结果列表
 */
 export function _vibTaskpageonChange(page){
  let returnDataList
  $.ajax({
    type:"post",
    url:hostPort+"equip/vibration/sASP",
    // /POST /equip/vibration/mASP
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify({
      "pageNo": page,
      "pageSize": 10,
    }),
    success:function(res){
      if(res.flag){
        returnDataList=res.data.pageList
       let totalCount = res.data.totalCount

       const action ={
        type:'vibStateValuateList',
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
 * 状态评估结果查看
 */
 export function _vibStateValuateResult(a){
  console.log(a);
  let record = []
  record.push(a)
  const action ={
    type:"vibStateValuateResult",
    record,
  }

  store.dispatch(action)
}





