import {Component} from 'react';
import {Link} from 'react-router-dom'
// antd
import {Row, Col,Button,Space,Affix,Image } from 'antd'
// 组件
import DeviceImg from './component/DeviceImg'
import DeviceMsg from './component/DeviceMsg'
import Nav from  './component/Nav'
import ResultTable from './component/ResultTable'
import LineCharts from './component/LineCharts'
import ModelAlgorithm from './component/ModelAlgorithm'
import CreateRadar from './component/charts/CreateRadar'
import ModelBar from './component/charts/ModelBar';
export default class Visualization extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className = "visualization-content">
                <Nav></Nav>
                <Affix  className = "affix">
                    <Link to ='/ActionChoose'><Button type="dashed" ghost ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>{" 返回"} </Button>
                    </Link>
                </Affix>
                <div className = "module-box1">
                    <div className = "_module" id="left-item" >
                
                        <LineCharts></LineCharts>

                    </div>
                    <div className  ="_module"  id ="center-item">
                        <Space direction = "vertical">
                        <Image src="./images/QQ图片20210603112104.png"  className ="_deviceImg">
                        </Image>
                        <DeviceMsg ></DeviceMsg>
                        </Space>
                    </div>
                    <div className = "_module" id = "right-item" >
                        {/* 123 */}
                        {/* <LineCharts></LineCharts> */}
                            {/* <TableList></TableList> */}

                            <CreateRadar></CreateRadar>
                    </div>
                </div>
                <div className = "module-box2">
                    <div className = "_module" id="left-item" >
                    
                    <ModelAlgorithm></ModelAlgorithm>
                    </div>
                    <div className = "_module" id = "#center-item">
                        <ModelBar></ModelBar>
                    </div>
                    <div className = "_module" id = "right-item" >
                    <ResultTable></ResultTable>

                    </div>
                </div>

                <div className = "visulization-footer"></div>
            </div>
        )
    }
}