import React, {Component} from 'react';
import LoadIcon from  '../../../PageCom/loadIcon'
import '../list/list.scss'

class AlbumQuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumQuanIndex: 0,
            rank: '',
            recent:'',
            classic: '',
        }
    }
    render() {
        let data = this.state.rank
        return (
            <div className="albumQuanList">
                <div className="nav">
                    <span className="item">最火</span>
                    <span className="item">最近更新</span>
                    <span className="item">经典</span>
                </div>
                <div className="list">

                </div>
            </div>
        )
    }
}

export default AlbumQuan;