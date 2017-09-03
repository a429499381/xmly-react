import React, {Component} from 'react';
import './index.css'

class Love extends Component {
    constructor(props) {
        super(props)
        this.state = {
            love: [],
            title: []
        }
    }

    render() {
        let title = this.state.title
        let love = this.state.love
        return (
            <div  key={title.num} >
                {/* 猜你喜欢 */}
                <div className="love">
                    <div className="love_title">
                        <a className="love_t"  href={title.href}>{title.title}</a>&nbsp;
                        <a href={title.href} className="more">更多 ></a>&nbsp;
                        <i className="content">&nbsp;</i>
                    </div>
                    <div className ="love_list">
                        {
                            love.map((item, index) => {
                                return  <div  key ={index}>
                                            <div className="love_con">
                                                <a key ={index} href={item.href} className="con_item">
                                                    <p className="img">
                                                        <img className = "img_bg" src={item.src} alt=""/>
                                                        <span className="img_number">{item.num}</span>
                                                    </p>
                                                    <span className="item_txt">{item.txt}</span>
                                                </a>
                                            </div>&nbsp;
                                        </div>
                            })
                        }
                        <i className="content">&nbsp;</i>
                    </div>

                </div>
                {/* 猜你喜欢 */}
            </div>
        )
    }

    componentDidMount() {
        let love = []
        let title = []
        let data = this.props.love

        data.map((item, index) => {
            if (index === 0) {
                title = item
            } else {
                love.push(item)
            }
        })

        this.setState({
            love: love,
            title: title
        })
    }
}

export default Love;