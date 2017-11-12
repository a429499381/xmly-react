import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router'
import './index.scss'

class SearchInput extends Component {
    render() {
        return (
            <div className="input dib">
                <input type="serch" placeholder={this.props.value || '请输入要搜索的内容'}
                       value ={this.props.value}
                       onChange={this.ChangeHandle.bind(this)}
                       onKeyUp={this.KeyCode.bind(this)}
                       onFocus={this.Focus.bind(this)}
                />
            </div>
        )}

    // 每按一个键就吧 获取的字符 映射到 this.state.value
    ChangeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    // 回车 处理  13 代码回车键
    KeyCode(e) {
        let search = e.target.value
        if(e.keyCode !== 13) {
            return
        }
        hashHistory.push('/Search' + '/' + search)
        this.props.input(e.target.value)
    }
    Focus() {

    }
}

export default SearchInput;