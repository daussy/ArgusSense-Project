import React,{Component} from 'react'
//antd
import {Button} from 'antd'
import { _checkZip } from './functionList';

export default class CheckZip extends Component{
    constructor(props){
        super(props)

    }

    CheckZip = ()=>{
        let record =  this.props.onClick()
        if(record){
            // console.log(record,'record111')
            let datasetName = record.name
            let id = record.id
            _checkZip(1,id,datasetName)
        }
   }

    render(){
        return(
            <div style={styles.CheckZip}>
                 <Button
                //   size="small"
                  onClick = {this.CheckZip}
                >
                  刷新
                </Button>
            </div>
        )
    }

}

const styles = {
    CheckZip: {
      display: 'inline-block',
      marginRight: '5px',
    },
  };
  