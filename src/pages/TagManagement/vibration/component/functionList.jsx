import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message,Image  } from 'antd';

// store
import store from '@/pages/Store/index'

/**
 * 查看压缩包
 */
export function _vibPngSelectPage(page){
  let pageList = []
  let totalCount = ""
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 

  $.ajax({
      type:"post",
      url:hostPort+"equip/vibration/vibPngSelectPage",
      dataType:'JSON',
      contentType:"application/json;charset=UTF-8",
      async:false,
      data:JSON.stringify(
          {
              "pageNo": page,
              "pageSize": 10,
              "queryParameter": {
                "transformId": transformedID
              }
            }
        ),
      success:function(res){
        if(res.flag){ 
         pageList = res.data.pageList
         totalCount = res.data.totalCount
         const action = {
          type:'vibPngSelectPage',
          pageList,
          totalCount
          }
          store.dispatch(action)
        }
        // console.log('10:53',dataConfig10)
      },
      error:function(){
      }
  })
}
/**
 * 删除标签
 */
export function _deleteLabel(idArr){
  // console.log(idArr);
  // let e  =  []
  // e.push(imageID.toString())
  let flag = false
  $.ajax({
    type:"DELETE",
    url:hostPort+"equip/vibration/deleteLabel",
    // POST /equip/vibration/deleteLabel
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify(
      idArr
    ),
    async:false,
    success:res=>{
      if(res.flag){
          //要刷新
          flag =  true
          _vibPngSelectPage(1)
      }
    },
    error:function(){
    }
  })
  _message(flag,'删除标签')
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

/**
 * 打标签
 */
export function _viblabel(labelVal,pngId){
  let flag = false
  $.ajax({
    type:"post",
    url:hostPort+"equip/vibration/label?pngId="+pngId+"&labelVal="+labelVal,
    //  http://192.168.1.173:9001/equip/vibration/label?pngId=0003778303968b77434fa10cb288a9a3&labelVal=000
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify(
        data
    ),
    success:res=>{
      flag =  true
      _vibPngSelectPage(1)
    },
    error:function(){
    }
  })
  _message(flag,'标注')

}
