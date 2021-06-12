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
            totalCount,
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
 * 批量划分
 */
export function _vibbatchDivide(idArr,divideVal){
  
  let flag = false
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 
//   let idList = '%5B%22'
//   idArr  = idArr.join('%22%2C%20%22')
//   idList = idList+idArr +'%22%5D'
//  console.log(idArr)
  if(transformedID  == ''){
    _message(false,'数据集时频图像转换')
  }else{
      $.ajax({
        type:"post",
        // url:hostPort+"equip/vibration/dividePng?transformId="+transformedID+'&idList='+idArr+"&divideVal="+divideVal,
        url:hostPort+"equip/vibration/dividePng?transformId="+transformedID+"&divideVal="+divideVal,
        // POST http://192.168.1.173:9001/equip/vibration/dividePng?transformId=vedrf&idList=%5B%2200010c8dc5e0287a562850b4f75e0338%22%2C%20%220003778303968b77434fa10cb288a9a3%22%5D&divideVal=%E6%B5%8B%E8%AF%95%E9%9B%86
        // ["00010c8dc5e0287a562850b4f75e0338", "0003778303968b77434fa10cb288a9a3"]
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify(
            // {
              // "transformId":transformedID,
              idArr,
              // "divideVal":divideVal
            // }
        ),
        success:res=>{
          if(res.flag ){
            flag =  true
            _vibPngSelectPage(1)
          }
        },
        error:function(){
        }
      })
    }
  _message(flag,'批量划分')

}

/**
 * 自动划分
 */
export function _vibautoDivide(trainingNum){
  let flag = false
  let transformedID = store.getState().TagManagementreducer.vibTable.taskTable[0].transformedID 
  let  testSet = []
  let trainSet = []
  let testSetId //放测试集id
  let trainSetId //放训练集id
  if(transformedID  === ''){
    _message(false,'数据集时频图像转换')
  }else{
    $.ajax({
      type:"post",
      //Request URL: http://192.168.1.173:9001/equip/vibration/autoDivide?transformId=fwef&trainNum=121212
      url:hostPort+"equip/vibration/autoDivide?transformId="+transformedID+'&trainNum='+trainingNum,
      contentType:"application/json",
      dataType:'JSON',
      async:false,
      success:res=>{
        flag =  true
        // _vibPngSelectPage(1)
        _vibPngSelectPage(1)
              //划分后自动刷新
              testSetId = res.data[1].id
              testSet = res.data[1].pngs
              trainSetId = res.data[0].id
              trainSet = res.data[0].pngs
              const action = {
                type:'vibAutodivide',
                testSetId,
                trainSetId,
                }
                store.dispatch(action)
      },
      error:function(){
      }
    })
    _message(flag,'自动划分')

  }
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

