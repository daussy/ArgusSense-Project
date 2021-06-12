import React,{Component} from 'react'

// store
import store from '@/pages/Store/index'

// antd
import {Space,Button,Modal,Form,Input,InputNumber} from 'antd'

// 方法
import {_modelConstruct,_vibcreateModel} from './functionList'

export default class CreateModels extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            datasetName:store.getState().TagManagementreducer.zipMsg.name,
            dataType:store.getState().Preprocessingreducer.dataType,

        }
        this.formRef = React.createRef();
        store.subscribe(this.handleStoreChange)

    }
    
    handleStoreChange = ()=>{
        this.setState({
            dataType:store.getState().Preprocessingreducer.dataType,
        })
    }
 
    onOpen = ()=>{
        if(this.state.dataType == 1){
            this.setState({
                visible:true,
            },()=>{
                let records = this.props.onClick()
                this.formRef.current.setFieldsValue({
                    algorithm:records.algorithm,
                    task:records.task,
                    datasetName:this.state.datasetName,
                });
            })
                // 要在setState完成之后再挂载，否则数据挂不上
            // console.log(this.props.onClick())
        }else{
            this.setState({
                visible:true,
            },()=>{
                let records = this.props.onClick()
                this.formRef.current.setFieldsValue({
                    algorithm:records.algorithm,
                    datasetName:this.state.datasetName,
                });
            })
        }

    }
    /**
     * 关闭窗口
     */
    onClose = ()=>{
        this.setState(
            {
                visible:false,
            }
        )
    }
      /**
     * 提交表单
     */
    handleSubmit = (values) => {
        if(this.state.dataType == 1){
            values.classifierLr = 0.00001
            values.rpnLr = 0.00001
            values.trainStatus = "未完成"
            _modelConstruct(values)
        }else{
            _vibcreateModel(values)
        }

        // console.log(values)
        this.onClose();
    };

    render(){
        const {visible,dataType} = this.state;
        // console.log('this.props.records',this.props.getRecords())
        return(
            <div>
                <Button  onClick = {this.onOpen}>构建模型</Button>
                <Modal
                title="模型构建" 
                visible ={visible}
                // width = {400}
                footer={null}
                onCancel = {this.onClose}
                >
            
                  <Form
                        {...layout}
                        ref={this.formRef}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.handleSubmit}
                        >
                         {
                             dataType ==1 ? imgformItemArr.map((item,index)=>{
                                    return(
                                        <Form.Item
                                        label={item.label}
                                        name={item.name}
                                        
                                        rules={ item.rule?
                                        [
                                        {
                                            required: true,
                                            message: `输入${item.label}`,
                                        },
                                        ]:null
                                    }
                                    >
                                       {item.content}
                                    </Form.Item>
                                    )
                                }):vibformItemArr.map((item,index)=>{
                                    return(
                                        <Form.Item
                                        label={item.label}
                                        name={item.name}
                                        
                                        rules={ item.rule?
                                        [
                                        {
                                            required: true,
                                            message: `输入${item.label}`,
                                        },
                                        ]:null
                                    }
                                    >
                                       {item.content}
                                    </Form.Item>
                                    )
                                })
                            }
                         <Form.Item {...tailLayout}>
                            <Button className ="normalBtn"  htmlType="submit" >确认创建模型</Button>
                        </Form.Item>
                        </Form>
            </Modal>

            </div>
        );
    }
}

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const imgformItemArr = [
    {
        label:"处理任务",
        name:"task",
        rule:false,
        content:<Input disabled ></Input>
    },
    {
        label:"训练算法",
        name:"algorithm",
        rule:false,
        content:<Input disabled ></Input>
    },
    {
        label:"数据集",
        name:"datasetName",
        rule:false,
        content:<Input disabled ></Input>
    },
    {
        label:"模型名称",
        name:"modelName",
        rule:true,
        content:<Input></Input>
    },
   {
        name:"numEpochs",
        label:"迭代次数",
        rule:true,
        content:   <Input   placeholder = {2}  />
    },
    {
        name:"epochLength",
        label:"单次迭代数据量",
        rule:true,
        content:   <Input   placeholder = {2}  />
    },{
        name:"classifierLr",
        label:"分类器学习率",
        content:   <Input  disabled defaultValue = {0.00001} />
    },
    {
        name:"rpnLr",
        label:"rpn学习率",
        content:   <Input  disabled defaultValue = {0.00001} />
    }
]
const vibformItemArr = [
    {
        label:"处理任务",
        name:"task",
        rule:false,
        content:<Input disabled defaultValue = {"轴承故障诊断"}  ></Input>
    },
    {
        label:"训练算法",
        name:"algorithm",
        rule:false,
        content:<Input disabled ></Input>
    },
    {
        label:"模型名称",
        name:"name",
        rule:true,
        content:<Input></Input>
    },
   {
        name:"iter_num",
        label:"迭代次数",
        rule:true,
        content:   <Input   placeholder = {50}  />
    },
    {
        name:"min_num",
        label:"训练批次",
        rule:true,
        content:   <Input   placeholder = {32}  />
    },{
        name:"lr",
        label:"学习率",
        content:   <Input   placeholder = {0.001}  />
    }
   
]

