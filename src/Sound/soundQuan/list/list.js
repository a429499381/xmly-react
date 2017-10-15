import React, {Component} from 'react';
import LoadIcon from '../../../PageCom/loadIcon'
import {Link} from 'react-router'
import '../list/list.scss'

class AlbumQuan extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data
        let id = this.props.id
        return (
            <div className="soundQuanList fix">
                <div className="albumQuannav">
                    <Link to={`/sound-quan/${id}/rank`} onClick={this.push.bind(this)}>
                        <span className="item active">最火</span>
                    </Link>
                    <Link to={`/sound-quan/${id}/recnet`} onClick={this.push.bind(this)}>
                        <span className="item ">本周热门</span>
                    </Link>
                    <Link to={`/sound-quan/${id}/classic`} onClick={this.push.bind(this)}>
                        <span className="item itemBn">最多赞</span>
                    </Link>


                </div>
                <div className="Quanlist">
                    {
                        data
                            ?
                            <div classID="ablumTagList" >
                                {
                                    data.map((item, index) => {
                                        return <div className="list p10 rel mt5 mb5" key={index}>
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
    loadHandle() {
        window.location.reload()
    }
    push(){
        console.log('push list')
        console.log(this.props)
    }

}

export default AlbumQuan;