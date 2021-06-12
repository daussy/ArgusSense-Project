import React,{Component} from 'react'

// antd
import { Button } from "antd";

// store
import store from '@/pages/Store/index'


export default class ModelTrainning extends Component{
    constructor(props){
        super(props)

        this.state={
            loading:false,
        }
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange=()=>{
        
    }

    
}