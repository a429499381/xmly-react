import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'index'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

import * as actionsTodoList from '../../actions/todolist'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div>
        <div className="todolist">
          <input type="text" placeholder="输入要待办的事情"
                 onChange = { this.InputHandle.bind(this)}
                 onKeyUp = { this.KeyCode.bind(this)}
                 value = { this.state.value }
          />{this.state.value}
          <div className="list">
            {
              this.props.todolist.length
                ?
                this.props.todolist.map((item, index) => {
                  return (
                    <div key={item.id} id = {item.id} className={item.component} onClick={this.DelHandle.bind(this)}>{item.text}</div>
                  )
                })
                : '没有记录'
            }
          </div>
        </div>

        {/*<HomeHeader cityName={this.props.userinfo.cityName}/>*/}
        {/*<Category/>*/}
        {/*<div style={{height: '15px'}}>/!* 分割线 *!/</div>*/}
        {/*<Ad/>*/}
        {/*<List cityName={this.props.userinfo.cityName}/>*/}
      </div>
    )
  }

  DelHandle(e) {
    const id = e.target.id
    this.props.actionsTodoList.rm(id)

  }

  InputHandle(e) {
    const value = e.target.value
    this.setState({
      value: value
    })
  }

  KeyCode(e) {
    if (e.keyCode !== 13) {
      return
    }
    this.props.actionsTodoList.add(e.target.value)
    this.setState({ value: ''})
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    todolist: state.todolist
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionsTodoList: bindActionCreators(actionsTodoList, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
