import React, { Component, PureComponent } from 'react';

// 组件
import TreeIndex from './TreeIndex/index';
import Table1 from './Table1/index'

// store
import store from '../../Store/index'

// antd
import { Row, Col } from 'antd';

// style
import './index.scss'

// 导入方法
import {_treeInitial} from './TreeIndex/functionList'


export default class Sequence extends Component {

  static displayName = 'Image';
  static contextTypes = {
  }
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'none',
      dataConfig: store.getState().DataStoragereducer.SequenceDataConfig,
      treeKey: '',  //当前选中的树节点
    };
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange=()=>{
    this.setState({
      dataConfig: store.getState().DataStoragereducer.SequenceDataConfig,
    })
  }

  componentDidMount(){
    _treeInitial()
  }


  render() {
    return (
   <Row gutter = {16}>
    <Col span={4}>
      <div  className ="treeIndex">
      <TreeIndex ></TreeIndex>

      </div>
    </Col>
      <Col span={20}> 
    
      <div  className = "table1">
      <Table1></Table1>
        
        </div> 
      </Col>
  </Row>
    );
    
  }
}

