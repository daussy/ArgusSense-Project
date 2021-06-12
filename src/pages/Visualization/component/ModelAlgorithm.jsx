import {Component} from 'react';

// antd
// import {Table,Tag,Pagination,Divider} from 'antd';
import { PageHeader, Tabs, Button, Space, Descriptions ,Cascader,Modal,Image} from 'antd';

import {_vibmodelList,getModelList} from './functionList'
// import {tableColumns,modelData} from './dataConfig'
// style
import './style.scss'

import ModelChoose from './ModelMsg/ModelChoose'


const modelData = [
    // {
    //     title: '模型',
    //     key: 'name',
    //     value:"model0222"
    //   },
      {
        title: '训练批次',
        key: 'minNum',
        value:"26"
      },
      {
        title: '学习率',
        key: 'lr',
        value:"0.0001"

      },
      {
        title: '迭代次数',
        key: 'iterNum',
        value:"100"
      },
];

export default class ModelAlgorithm extends Component{
    constructor(props){
        super(props)

        this.state={
            selectedRowKeys:"",
            modelName:"test.model",
            visible:false,
            modelMsg:modelData,
        }
    }
    

    /**
     * 模型选择
     */
     optionOnchange= (e)=>{
        //  console.log(value[0]);
        let modelMsg = [];
        for(let item in e[0]){
            if(e[0][item] !== null && item!="id" && item !="setId")
            modelMsg.push({
                title:item,
                key:item,
                value:e[0][item]
            })
        }
        // console.log(modelMsg);
        this.setState({
            modelName:e[0].name,
            modelMsg
        })
     }

     /**打开窗口 */
     open = ()=>{
         this.setState({
             visible:true,
         })
     }

         // 关闭弹窗
    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    render(){
   
        const modelMsg = ()=>{
          let content =   <Descriptions  size = {"small"}  column ={1}>
            {
                this.state.modelMsg.map((item,index)=>{
                    return(
                        <Descriptions.item key = {item.key} label = { <span style = {{fontWeight:"bolder"}}>{item.title}</span>}>
                            <span >{item.value}</span>
                        </Descriptions.item>
                    )
                })
            }
            </Descriptions>
            return content;
        }
        return(
            <div className = "ModelAlgorithm">
        <PageHeader 
            className="site-page-header-responsive container"
            title={<span className = "PageHeader-dev-des-title">{this.state.modelName} </span>}
            subTitle={<span style = {{color:"#fff"}}>当前使用模型 </span>}
            extra={<Space>
                    <Button key="3"  type="dashed" ghost onClick = {this.open}>详细信息</Button>
                    <ModelChoose onChange={this.optionOnchange}  onSelectModel = {this.optionOnchange}/>
            </Space>
          }
            ghost
            >
            {/* <Image
                width={"100%"}
                heigh ={"100%"}
                src={"images/模型结构图.png"}
                />       */}
            <div className = "img-container">
            <img src="images/卷积神经网络.png" alt="卷积神经网络" className = "modelImg" />
            </div>

        </PageHeader>
            <Modal
                    title="模型详细信息" 
                    visible ={this.state.visible}
                    width = {400}
                    destroyOnClose= {true}
                    onCancel = {this.onClose}
                    footer={null}
                >
                {modelMsg()}
                </Modal>
        </div>
        )
    }
}


