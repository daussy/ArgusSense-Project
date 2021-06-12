import $ from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message ,Image } from 'antd';

// store
import store from '@/pages/Store/index'

// 导入方法
import {_checkZip} from '../../../Table1/TabTable/components/functionList'
  /**
   * 删除图片
   */
 export  function  _deleteImage(idArr){
     let flag = false
    $.ajax({
      type:"DELETE",
      //DELETE /equip/image/deleteOne
      url:hostPort+"equip/image/deleteOne",
      contentType:"application/json;charset=UTF-8",
      dataType:'JSON',
      data:JSON.stringify(
        idArr
      ),
      async:false,
      success:function(res){
        if(res.flag){
        flag = true
        _refresh();
        }
      },
      error:function(){
      }
    })
    return flag;
  }
/**
 * 刷新图片
 */
  export function _refresh(){
    let id = store.getState().DataStoragereducer.fileID
    let datasetName = store.getState().DataStoragereducer.datasetName
    _checkZip(1,id,datasetName)
  }
/**
 * 生成图片
 * @param {*} id                             
 */
  export function _createImg(id){
    // console.log('id',id)
    const ImgDiv = (
        
      <Image
      width={200}
      src={`${hostPort}equip/image/view?imageId=${id}&type=image`}
    />
    )
    const action = {
      type:'ViewImg',
      ImgDiv
    }
    store.dispatch(action)
    
  }


/**
 * 图片列表
 */
  export function _imgList(page){
      let id = store.getState().DataStoragereducer.fileName[0].id
      let datasetName =  store.getState().DataStoragereducer.fileName[0].name
      _checkZip(page,id,datasetName)
  }