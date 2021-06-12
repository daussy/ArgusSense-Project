import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

// 引入方法

/**
 * 获取全部数据处理流程
 */
export function _allCard(){
    let cardArr = []
    $.ajax({
        type:"get",
        url:hostPort+"equip/process/findAll",
        dataType:'JSON',
        async:false,
        success:function(res){
          if(res.flag){
          
            // console.log('07.26 15：08',res.data)
            cardArr=res.data
          }
        },
        error:function(){
          console.log("获取失败")
        }
      })
    const action ={
        type:"allCard",
        cardArr
    }
    store.dispatch(action)
    // return cardArr
}

/**
 * 删除流程卡片
 */
export function _deleteCard(cardId){
    let flag = false
    $.ajax({
      type:"Delete",
      url:hostPort+"equip/process/delete/"+cardId,
      contentType:"application/json;charset=UTF-8",
      dataType:'JSON',
      async:false,
      success:function(res){
        if(res.flag){
            flag = true
           _allCard()
        }
      },
      error:function(){
      }
    })

    return flag;
}

/**
 * 保存模型
 * @param {} cardList 
 */
export function _saveCard(cardList){
    let values  = store.getState().DataProcessingreducer.newListTitle
    // console.log(values)
    let flag = false

    $.ajax({
        type:"POST",
        url:hostPort+"equip/process/save",
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify({
         // "id": 1,
          "name": values,
          "algorithm": "defualt",
          "creator": "admin",
          "cards":cardList ,
          "title": values,
          "description":values,
          }),
        success:function(res){
          if(res.flag){
            flag = true

           _allCard()
          }
        },
        error:function(){
        }
  
      })
    return flag;

}

/**
 * 使用模型
 */
export function _useCard(cards,id){
    const action ={
        type:"useCard",
        cards,
        id,
    }
    store.dispatch(action)
}

