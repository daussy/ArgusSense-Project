import React,{Component} from 'react';

import routeConfig from '../../routerComponent/routeConfig';
//导入内容组件
import Content from './Content';
//导入导航组件
import AsideUI from '../Aside/AsideUI';
// antd
import { Row, Col } from 'antd';
// router
import {BrowserRouter} from 'react-router-dom';
export default class ContentContainer extends Component{
    constructor(props){
        super(props)    
        this.state ={
        }
    }

 

    render(){
        return(
            <div className = "ContentContainer"  style = {{"--bs-gutter-x":0}}>
                  <Row>
                    <BrowserRouter>
                        <Col span={4}>
                                <AsideUI  data ={routeConfig[3].children}></AsideUI>
                        </Col>
                        <Col span={20}> 
                            <Content  data ={routeConfig[3].children}></Content>
                        </Col>
                    </BrowserRouter>
                  </Row>
             
            </div>
            );
    }
}
