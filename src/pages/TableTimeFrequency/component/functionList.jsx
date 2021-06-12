import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'



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
 * 振动数据
 */
// 时频图像转换
export function _vibtransform(id,record,values){
  let returnData
  let flag = false
  if(id == ''){
    _message(false,'数据预处理')

  }else{
    $.ajax({
      type:"POST",
      url:hostPort+"equip/vibration/transform",
      contentType:"application/json;charset=UTF-8",
      dataType:'JSON',
      async:false,
      data:JSON.stringify({
              frequency:values.frequency,
              function: values.wavelet,
              picNum: values.picNum,
              preprocessId: id,
              windowSize: values.windowSize,
        }),
        success:res=>{
          if(res.flag){
            flag = true
            returnData = res.data
              const action ={
                type:'vibtransform',
                values,
                returnData,
                record,
              }
              store.dispatch(action)
              
            }  
          
        },
        error:function(){
        }
    })
    _message(flag,'时频图像转换')
  }
return flag;
}

