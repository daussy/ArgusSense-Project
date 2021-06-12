import {Component} from 'react';

// antd
import {Card,Space,Descriptions,Table,Image,Button} from 'antd';

// 
import {Link} from 'react-router-dom'

import DeviceMsg from './DeviceMsg'
import LineCharts from './LineCharts'
import {errorMsg} from './dataConfig'
import {detectAnomalies} from './dataConfig'
import './style.scss'
export default class DeviceImg extends Component{
    constructor(props){
        super(props)
        
        this.state={
            
        }
    }

    render(){
        return(
            <>
            {/* <Space>
                <Space wrap = {true}> */}
            
                {/* <Link to ='/Devproject'><Button>返回</Button></Link> */}

                {/* <Card
                    hoverable
                    style={{ width: 240,height: "100%"}}
                    cover={<img alt="example" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2027367522,1910292912&fm=26&gp=0.jpg" />}
                    // actions = {[
                    //     <DeviceMsg></DeviceMsg>
                    // ]}
                >
                    <DeviceMsg></DeviceMsg>
                </Card> */}
                {/* <Card
                    style={{ width: 240,height: "100%" }}
                    // cover={<img alt="example" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2027367522,1910292912&fm=26&gp=0.jpg" />}
                
                >
                    <div>
                    <Descriptions size = {"small"} bordered column ={1}>
                        {
                            errorMsg.map((item,index)=>{
                                return(
                                    <Descriptions.item label = {item.label}>
                                        {item.value}
                                    </Descriptions.item>
                                )
                            })
                        }
                    </Descriptions>
                    </div>
                </Card>
                <Card
                    style={{ height: "100%" }}
                    // cover={<img alt="example" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2027367522,1910292912&fm=26&gp=0.jpg" />}
                    title = {"检测异常信息"}
                >
                    <Table dataSource={detectAnomalies.data} columns={detectAnomalies.columns}  pagination = {false}/>
                    
                </Card> */}
                {/* </Space>

            </Space>  */}
           
            </>
        )
    }

}