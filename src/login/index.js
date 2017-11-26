import React from 'react'
import {Modal, Button, notification, Spin, Alert, BackTop} from 'antd'
import './index.scss'

notification.config({
    placement: 'bottomLeft',
    bottom: 10,
    duration: 3,
});

class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }


    showDeleteConfirm() {
        let that = this
        notification.success({
            message: '001',
            description: '你好'
        })
        const confirm = Modal.confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okType: 'danger',
            cancelText: 'No',
            okText: 'Yes',
            onOk() {
                that.setState({
                    loading: true
                })
                console.log('确认');
            },
            onCancel() {
                that.setState({
                    loading: false
                })
                console.log('取消');
            },
        })

    }

    render() {
        return (
            <div className='login'>
                <div>
                    <BackTop className="components-back-top-demo-custom" visibilityHeight={50}>
                        <div className="ant-back-top-inner">UP</div>
                    </BackTop>
                </div>
                <div>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                    <p>001</p>
                </div>
                <Spin tip='加载中....' spinning={this.state.loading}></Spin>
                <Button onClick={this.showDeleteConfirm.bind(this)}>002</Button>
            </div>
        )
    }
}

export default login