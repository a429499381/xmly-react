import React from 'react'
import { Modal, } from 'antd-mobile';


class login extends React.Component {
    render() {
        return (
            <div className='login'>

            </div>
        )
    }
    componentDidMount() {
        Modal.prompt(
            '登陆',
            '手机号或者用户名登陆',
            (login, password) => console.log(`login: ${login}, password: ${password}`),
            'login-password',
            null,
            ['请输入你的用户名', '请输入你的密码'],
        )
    }

}

export default login