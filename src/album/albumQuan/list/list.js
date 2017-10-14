import React, {Component} from 'react';
import LoadIcon from '../../../PageCom/loadIcon'
import {Link} from 'react-router'
import '../list/list.scss'

class AlbumQuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumQuanIndex: 0,
            rank: '',
            recent: '',
            classic: '',
            url: ''
        }
    }

    render() {
        let data = this.props.data
        return (
            <div className="albumQuanList fix">
                <div className="albumQuannav">
                    <Link to="/album-quan/comic-郭德纲/rank" onClick={this.push.bind(this, 'rank')}>
                        <span className="item active">最火</span>
                    </Link>
                    <Link to="/album-quan/comic-郭德纲/recent" onClick={this.push.bind(this, 'recent')}>
                        <span className="item ">最近更新</span>
                    </Link>
                    <Link to="/album-quan/comic-郭德纲/classic" onClick={this.push.bind(this, 'classic')}>
                        <span className="item ">经典</span>
                    </Link>


                </div>
                <div className="Quanlist">
                    {
                        data
                            ?
                            <div classID="ablumTagList" >
                                {
                                    data.map((item, index) => {
                                        return <div className="list p5 rel mt5 mb5" key={index}>
                                            <Link to={item.href}>
                                                <img src={item.src} alt="" className="img"/>
                                                <div className="container ">
                                                    <h4>{item.title}</h4>
                                                    <p className="palyNum">{item.playNum}</p>
                                                    <i className="down"></i>
                                                </div>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            : <LoadIcon/>

                    }
                </div>
            </div>
        )
    }

    push(id) {
        this.props.push(id)
    }
}

export default AlbumQuan;