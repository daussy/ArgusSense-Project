import React,{Component} from 'react';

// 组件
import TreeIndex from './TreeIndex/index';
import Table1 from './Table1/index'
import Table2 from './Table2/index'

// antd
import { Row, Col } from 'antd';

// 导入方法
import {_treeInitial} from './TreeIndex/functionList'
// style
import './index.scss'
export default class VibrationIndex extends Component{
    constructor(props){
        super(props)

        this.state={
            treeKey: '',  //当前选中的树节点
        }
    }

      componentDidMount(){
        _treeInitial()
      }

    render(){
        return(
        <Row gutter = {16}>
            <Col span={4}>
              <div  className ="treeIndex">
              <TreeIndex ></TreeIndex>
        
              </div>
            </Col>
              <Col span={20}> 
              <div  className = "table1">
              <Table1/>    
              </div>
              <div  className = "table2">
              <Table2></Table2>
                
                </div> 
              </Col>
          </Row>
        )
    }
}