import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

// 导入方法
import {_checkZip} from '../../../Table1/TabTable/components/functionList'
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
        _vibList(1);
        }
      },
      error:function(){
        message.error('删除失败！')
      }
    })
  }
/**
 * 刷新图片
 */
  export function _refresh(){
    _vibList(1)
  }


/**
 * csv列表
 */
  export function _vibList(page){
      let id = store.getState().DataStoragereducer.fileName[0].id
      let datasetName =  store.getState().DataStoragereducer.fileName[0].name
      _checkZip(page,id,datasetName)
  }

  /**
   * 查看csv文件
   */
  export function _readCsv(id){
    console.log(id)
    let data= []
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