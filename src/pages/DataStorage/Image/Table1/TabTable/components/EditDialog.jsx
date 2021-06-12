import React, { Component } from 'react';
import store from '@/pages/Store/index';

// antd
import {Button,Modal,Form, Input} from 'antd'

// 导入方法
import {_handleSubmit} from './functionList'

export default class EditDialog extends Component {
  static displayName = 'EditDialog';
  /** 
  static contextTypes={
    changeChild:PropTypes.func,
  }
  */
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      treeKey: store.getState().DataStoragereducer.treeKey,
      label:store.getState().DataStoragereducer.label,
    };
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange = ()=>{
    this.setState(
      {
      treeKey: store.getState().DataStoragereducer.treeKey,
      label:store.getState().DataStoragereducer.label,
      }
    )
  }

  /**
   * 提交编辑表单
   */
  handleSubmit = (values) => {
    let record =  this.props.onClick()
    let name = values.name
    let setid = record.id
    let menuId = record.menuId
    _handleSubmit(menuId,setid,name,this.state.label);
    this.onClose();
  };


  // 打开编辑弹窗
  onOpen = () => {
    this.props.onClick();
    this.setState({
      visible: true,
    });
  };

  // 关闭弹窗
  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    const{visible} = this.state;
    const { index, record } = this.props;
    return (
      <div style={styles.editDialog}>
        <Button
          size="small"
          onClick={() => this.onOpen(index, record)}
        >
          编辑
        </Button>
        <Modal
        title="编辑" 
        visible ={visible}
        width = {320}
        onCancel = {this.onClose}
        footer={null}
      >
            <Form
            {...layout}
            name="提交编辑"
            initialValues={{ remember: true }}
            onFinish={this.handleSubmit}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="数据集名称："
              name="name"
              rules={[{ required: true, message: '必填选项' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="操作人员"
              name="importer"
              rules={[{ required: true, message: '必填选项' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        
      </Modal>
      </div>
    );
  }
}

const styles = {
  editDialog: {
    display: 'inline-block',
    marginRight: '5px',
  },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};