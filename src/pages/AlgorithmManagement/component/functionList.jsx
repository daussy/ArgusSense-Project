import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message,Image  } from 'antd';

// store
import store from '@/pages/Store/index'

export function _modelConstruct(values){
    let zipMsg = store.getState().TagManagementreducer.zipMsg
    let dataset = {...zipMsg,...values}
    // console.log(dataset)
    const action = {
        type:"modelConstruct",
        dataset,
        // zipMsg,
    }
    store.dispatch(action)
}

export function _vibcreateModel(values){
  console.log(values)
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 
  let trainSetId = store.getState().DatasetConstructReducer.trainSetId
    let flag = false
    $.ajax({
        type:"post",
        // POST /equip/vibration/createModel
        url:hostPort+"equip/vibration/createModel",
        contentType:"application/json",
        dataType:'JSON',
        data:JSON.stringify(
          {
         
            iterNum: values.iter_num, 
            lr: values.lr, 
            minNum: values.min_num, 
            name: values.name,
            setId: trainSetId, 
          }
        ),
        async:false,
        success:res=>{
          flag =  true
          const action = {
            type:"vibModelCreate",
            values,
            res,
          }
          store.dispatch(action)
        },
        error:function(){
        }
      })
  _message(flag,'模型创建')

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

