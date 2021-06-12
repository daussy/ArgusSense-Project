import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message,Image  } from 'antd';

// store
import store from '@/pages/Store/index'


export function _updateData(index){

    let option = {
        backgroundColor: 'rgba(255, 255, 255, 0.1);',
                xAxis: {
                    type: 'category',
                    data:[0,1,2,3,4,5,6,7,8,9],
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data:[11,2,3,4,51,8,42,15,1,3],
                    type: 'line'
        }]
    }
    

    let random = Math.random()*100
    console.log(  option.series[0].data,  option.xAxis.data);
    option.xAxis.data.shift();
    option.xAxis.data.push(index);
        option.series[0].data.shift();
        option.series[0].data.push(random)
     
        console.log(option);
return option;

}
