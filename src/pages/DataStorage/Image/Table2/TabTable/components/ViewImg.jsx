import {Button,Image,Modal} from 'antd'
import React, { useState } from 'react';
const  ViewImg = (props) =>{

    const [isModalVisible, setIsModalVisible] = useState(false);
    
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return(
        <div>
        <Button 
         onClick={showModal}
        >查看</Button>
        
        <Modal
          title="查看图片" 
          visible={isModalVisible}
          onCancel={handleCancel}
          width = {320}
          footer={null}
        >
          123
          {/* {
              props.gettext()
          } */}
          {/* {props.text} */}
        {props}
        </Modal>
        </div>
    )
}    
export default ViewImg;