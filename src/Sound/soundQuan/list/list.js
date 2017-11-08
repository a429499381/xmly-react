import React, {Component} from 'react';
import LoadIcon from '../../../PageCom/loadIcon'
import {Link} from 'react-router'
import '../list/list.scss'

class AlbumQuan extends Component {
    render() {
        let data = this.props.data
        let id = this.props.id
        return (
            <div className="soundQuanList fix">
                <div className="albumQuannav">
                    <Link to={`/sound-quan/${id}/rank`} onClick={this.push.bind(this, 'rank')}>
                        <span className={this.props.index === 'rank' ? 'item  active' : "item"}>最火</span>
                    </Link>
                    <Link to={`/sound-quan/${id}/recnet`} onClick={this.push.bind(this, 'recent')}>
                        <span className={this.props.index === 'recent' ? 'item  active' : "item "}>本周热门</span>
                    </Link>
                    <Link to={`/sound-quan/${id}/classic`} onClick={this.push.bind(this, 'classic')}>
                        <span className={this.props.index === 'classic' ? 'item itemBn active' : "item itemBn"}>最多赞</span>
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
    push(id){
        console.log('push list')
        this.props.push(id)
    }

}

export default AlbumQuan;