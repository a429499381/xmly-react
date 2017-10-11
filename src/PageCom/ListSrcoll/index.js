import React, { Component } from 'react';
import { Link } from 'react-router'
import './index.css'

class ListSrcoll extends Component {
  constructor(props) {
    super(props)
      this.state = {
        title : [],
        container: []
      }
  }
  render() {
    let title = this.state.title
    let container = this.state.container
    return (
      <div  key = {title.num}>
        {/* 标题 */}
        <div className="n_content">
          <div className="love_title">
            <a className="love_t" href={'#'+title.href} >{title.title}</a>&nbsp;
            <a href={'#'+this.state.title.href} className="more">更多</a>&nbsp;
            <i className="content">&nbsp;</i>
          </div>

          {/* 列表 */}
            {
              container.map((item,index) =>{
                  return <div  key={index}>
                           <Link to = {item.href.indexOf('/')? '/'+ item.href : item.href}  >
                            <div className="list" >
                              <div className="list_img">
                            <img src={item.src} className="img" alt=""></img>
                            <div className="list_txt">
                              <h6 className="txt_title">{item.txt}</h6>
                              <p className="txt_num">
                                <span className="num">4.8分</span>
                                <span className="txt_pl">81评价</span>
                              </p>
                              <p className="price">
                                <span className="num1">99</span>
                                <span className="num2">/94.05</span>
                                <span className="num3">喜点</span>
                                <span className="num4">会员价</span>
                              </p>
                              <p className="txt_con">
                                <span className="txt_1">雪球 聪明的投资者都在听！</span>
                                <span className="con_num1">5072.4万</span>
                                <span className="con_num2">407集</span>
                              </p>
                            </div>
                          </div>
                        </div>
                            </Link>
                          </div>
              })
            }

        </div>

      </div>
    )
  }

  componentDidMount(){
    let data = this.props.data
    let  container = []

      data.map((item, index) => {
      if (index === 0) {
        this.setState({
            title: item
        })
        return false
      } else {
          container.push(item)
          return true
      }
    })
      this.setState({
          container : container
      })


  }

}



export default ListSrcoll;