import {Component} from 'react';
// antd
import { Card, Avatar,Space,message } from 'antd';
import {CheckCircleTwoTone, EditTwoTone,DeleteTwoTone } from '@ant-design/icons';

import store from '@/pages/Store/index'
import { Link } from 'react-router-dom';

// style
import   './style.scss'

// 导入方法
import {_deleteCard,_useCard} from './functionList'


/**
 * message
 */
function _message(flag,mes){
  if(flag){
      message.success(`${mes}成功`)

  }else{
      message.error(`${mes}失败`)
  }
}
const { Meta } = Card;
export default  class  ListCard extends Component{
  constructor(props){
    super(props)
    this.state ={
      id:this.props.message.id,
      title:this.props.message.title,
      cards:this.props.message.cards,
      description:this.props.message.description,

    }
  }

  edit = ()=>{
    const  {id,cards,title} = this.state;
    const action ={
      type:"editCard",
      id,
      cards,
      title
  }
  store.dispatch(action)
  }

  delete = ()=>{
    let flag = _deleteCard(this.state.id)
    _message(flag,'删除')
  }
  use = ()=>{
    _useCard(this.state.cards,this.state.id)
  }

  render(){
    const {title,id,cards} = this.state;
    return(
      <div className= "card">
            <Card
              style={{ width: 300 }}
            
              actions={[
              
                <Link to='/Devproject/ProcessingSteps' onClick = {this.use}
                ><CheckCircleTwoTone key = "use" twoToneColor="#52c41a" className = 'cardIcon' style = {{fontSize:"20px"}} onClick  ={this.use} />
                </Link>,
                <Link to='/Devproject/CreateProcess' onClick = {this.edit}
                ><EditTwoTone key="edit" twoToneColor="#284978" className = 'cardIcon' style = {{fontSize:"20px"}}  />
                </Link>,
                <DeleteTwoTone key = 'delete' twoToneColor="#ff7875" className = 'cardIcon' style = {{fontSize:"20px"}}  onClick = {this.delete}/>,
              ]}
            >
              <div className = "content-container">
              <Space  direction="vertical">

              {
               
                cards.map((item,index)=>{
                  return(
                    <p className='card-span' id ={item.id} >{item.title}</p>
                  )
                })
              }
                </Space>
              </div>
           
              <Meta 
               
                title={(
                  <div className = "card-title-container">
                    <span className = "card-title">{title}</span>
                    
                  </div>
                )}
                description={`${title}模板处理流程`}
              />
            </Card>

        </div>
    )
  }
}