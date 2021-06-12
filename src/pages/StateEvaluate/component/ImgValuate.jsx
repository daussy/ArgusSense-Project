import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import {  Button } from 'antd';

// style
import '../style.scss'
// 方法
import {_imgModelValuate} from './functionList'
export default class ImgValuate extends Component{
    constructor(props){
        super(props)
        this.state = {
          visible:false,
          loading:false,
          id:""
        //   disabled:false,
        }
        store.subscribe(this.handleStoreChange)


    }
  
    // componentWillReceiveProps(){

    //     this.setState({
    //         disabled :this.props.disabled
    //     })
    // }
    handleStoreChange = ()=>{
            let e = store.getState().ModelTrainingreducer.flag
            if(e){
                this.setState({
                    loading:false,
                })
            }
            // e.map((item,index)=>{
            //     console.log(item.id,this.state.id)
            //     if(item.id === this.state.id){
            //         if(item.evaluateStatus==='已完成'){
            //             console.log(item)
            //             this.setState({
            //                 loading:false,
            //             })
            //         }
            //     }
            // })
    }

    onClick = ()=>{
        let id = this.props.onClick().id

        this.setState({
            loading:true,
            id:id
        },
        ()=>{
            setTimeout(() => {
                _imgModelValuate(id)
            }, 1000);
        }
        )
    }

    render(){
        return(
            <Button 
            // disabled ={this.state.disabled}
            loading ={this.state.loading}
            className = "normalBtn"
           style={{marginLeft:3}}
          onClick={this.onClick}
          >开始评估</Button>
          
        )
    }
} 
