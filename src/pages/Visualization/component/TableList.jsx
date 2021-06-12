import {Component} from 'react';

// antd
import {Table,Space} from "antd";
import {data,columns} from './tableConfig'
export default class TableList extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }

    render(){
        return(
            <Space direction="vertical">
                <Table  dataSource={data} columns={columns} pagination = {false}/>
                <Table  dataSource={data} columns={columns} pagination = {false}/>
                <Table dataSource={data} columns={columns} pagination = {false}/>
            </Space>
        )
    }
}