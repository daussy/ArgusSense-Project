import React,{Component} from 'react'
// antd
import {Space} from 'antd'
// 组件
import CreateCard from './component/CreateCard'
import ListCard from './component/ListCard'
// 导入方法
import {_allCard} from './component/functionList'
import store from '@/pages/Store/index'

export default class DataProcessing extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardArr :store.getState().DataProcessingreducer.list,
        }
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount(){
        _allCard()
    }

    handleStoreChange=()=>{
        this.setState({
            cardArr :store.getState().DataProcessingreducer.list,
        }) 
    }
 

    render(){
        const {cardArr} = this.state;
        return(
            <div>
                <CreateCard></CreateCard>
                <Space size ="large" wrap = {true}>
                    {cardArr.map((item,index)=>{
                        return(
                            <ListCard message = {item} ></ListCard>
                        )
                    })}
                </Space>
            </div>
        );
    }
}