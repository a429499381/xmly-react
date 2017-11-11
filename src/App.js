import React, {Component} from 'react';
import './css/reset.css'
import './css/zxx.css'

class App extends Component {
    render() {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }

    componentWillMount() {
        window.audio === undefined ? window.audio = new Audio() : ''

        //  定期清理缓存
        let oldTime = localStorage.getItem('V1')
        if(!oldTime){
            // 初始化版本时间
            let TIME = new Date().getTime()
            localStorage.clear()
            localStorage.setItem('V1', TIME)
            return true
        } else {
            // 过期时间 小时
            let exporTime = 24
            let NowTime = new Date().getTime()
            let T = ((NowTime - oldTime)/1000/60/60).toFixed(2)
            console.log('过期时间：',T, '小时' )
            // 超过24小时 清理所有缓存
            if(T >= exporTime) {
                let TIME = new Date().getTime()
                localStorage.clear()
                localStorage.setItem('V1', TIME)
            }
        }
    }
}

export default App;
