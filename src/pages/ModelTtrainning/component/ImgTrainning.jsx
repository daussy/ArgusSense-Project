import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import {  Button } from 'antd';

// style
import '../style.scss'
// 方法
import {_imgModelTrainning} from './functionList'
export default class ImgTrainning extends Component{
    constructor(props){
        super(props)
        this.state = {
          visible:false,
          loading:false,
          flag:0 , //0未开始，1训练中，2训练完成
        }
        store.subscribe(this.handleStoreChange)


    }
    handleStoreChange = ()=>{
        
            let e = store.getState().ModelTrainingreducer.imageModelTraining.tableData
            if(e[0].trainStatus ==='已完成'){
                this.setState({
                    loading:false,
                })
            }
    }

    onClick = ()=>{
        let record = this.props.onClick()
        this.setState({
            loading:true,
        },
        ()=>{
            setTimeout(() => {
             _imgModelTrainning(record.modelName,record.id,record.numEpochs,record.epochLength)
            }, 1000);
        }
        )
    }

    render(){
        return(
            <Button 
            loading ={this.state.loading}
            className = "normalBtn"
           style={{marginLeft:3}}
          onClick={this.onClick}
          >开始训练</Button>
          
        )
    }
} 
