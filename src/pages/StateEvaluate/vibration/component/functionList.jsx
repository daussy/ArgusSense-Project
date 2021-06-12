import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

/**
 * 振动数据
 */



// 状态评估
export function _vibModelValuate(id){
  let flag = false 
  $.ajax({
    type:"POST",
    // POST /equip/vibration/sAssess
    //POST /equip/vibration/modelAssessDo
    url:hostPort+"equip/vibration/sAssess?said="+id,
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    success : res=>{
      if(res.flag){
        console.log(res);
        flag = true
        _vibTaskpageonChange(1)
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
export function _vibdeleteStateValuate(id){
  // let originID = store.getState().ModelCheckreducer.tableData[0].originID
  let arr = []
  arr.push(id)
  let flag
  $.ajax({
    type:"delete",
    url:hostPort+"equip/vibration/sAD",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify(
      arr),
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        _vibTaskpageonChange(1)
      }
    },
    error:function(){
    }
  })
  _message(flag,'删除模型')

}

/**
 * 获取状态评估任务（结果）分页查询
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
  // console.log(a);
  let record = []
  record.push(a)
  const action ={
    type:"vibStateValuateResult",
    record,
  }

  store.dispatch(action)
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



  /**
   * 查看csv文件
   */
  export function _readCsv(id){
    console.log(id)
    let data= []
    if(id !=undefined){
      $.ajax({
        type:"GET",
        url:hostPort+"equip/vibration/readCSV/"+id,
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        success:function(res){
          if(res.flag){
          data = res.data
          }
        },
        error:function(){
        }
      })
      return _createData(data)
    }else{
      _message(false,'获取数据id')
    }
  }


  /**
   * 生成用于画图的数据
   */
function _createData(a){
    let max = [a[0]['第1列']]
    let min =[a[0]['第1列']]
    let data = []
    a.map((item,index)=>{
      let a = `${index}`
      data.push([
        a,item['第1列']
      ])
      if(item['第1列']>max){
        max = item['第1列']
      }else if(item['第1列']<min){
        min = item['第1列']
      }
    })
    // console.log(data,'data')
    // console.log(max,'max')
    // console.log(min ,'min')
    let e = []
    e.push(
      data
    )
    e.push(max)
    e.push(min)
    return e
  }

    /**
   * 删除csv
   */
 export  function  _deleteCsv(idArr){
  let flag = false
 $.ajax({
   type:"DELETE",
   //DELETE /equip/image/deleteOne
   url:hostPort+"equip/vibration/deleteList",
   contentType:"application/json;charset=UTF-8",
   dataType:'JSON',
   data:JSON.stringify(
     idArr
 ),
   async:false,
   success:function(res){
     if(res.flag){
     flag = true
     message.success('删除成功！')
    //  _vibList(1);
     }
   },
   error:function(){
     message.error('删除失败！')
   }
 })
}


