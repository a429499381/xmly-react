import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router'

import './index.scss'


class HeaderTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            value: ''
        }
    }
  render() {
      let data = this.state.data
      return (
      <div className="headerTop">
        {
          this.state.data
            ?   <div className="top">
            <Link href={data.href} >
                    <span className="xinxi" onClick={this.back.bind(this)}>
                      {this.props.title}
                      <i></i>
                    </span>&nbsp;
            </Link>
            <div className="input dib">
                    <input type="serch" placeholder={data.value || '请输入要搜索的内容'}
                           value ={this.state.value}
                           onChange={this.ChangeHandle.bind(this)}
                           onKeyUp={this.KeyCode.bind(this)}
                           onFocus={this.Focus.bind(this)}
                    />
            </div>&nbsp;
            <span className="top_r dib">
                  <Link href="/Ls" className="lishi">{data.lishi}</Link>
                  <Link href="/Down" className="down">{data.down}</Link>
                  <i className="content">&nbsp;</i>
              </span>&nbsp;
            <i className="content">&nbsp;</i>
          </div>
            : <div>'没有内容'</div>
        }
      </div>

    )
  }
  componentDidMount() {
      // 映射 父 组件传来数据  this.props.data 到 this.state.data
      this.setState({
          data: this.props.data
      })
  }
  // 每按一个键就吧 获取的字符 映射到 this.state.value
  ChangeHandle(e) {
        this.setState({
            value: e.target.value
        })
  }
  // 回车 处理  13 代码回车键
  KeyCode(e) {
    e.preventDefault();
    let search = e.target.value
    if(e.keyCode !== 13) {
        return
    }
    hashHistory.push('/Search' + '/' + search)

  }
  Focus() {

  }

  // 单击返回
  back() {
    hashHistory.push('/')
  }

}

export default HeaderTop;