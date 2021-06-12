import {Component} from 'react';

// antd
// import {Space} from 'antd'; 
// import CreateChart from './charts/CreateChart'
import CreateChartDemo from './charts/CreateChartDemo'
export default class LineCharts extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }

    render(){
        return(
            <div>
                    <CreateChartDemo></CreateChartDemo>
            </div>
        )
    }
}
