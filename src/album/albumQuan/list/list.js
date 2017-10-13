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
            <div className="albumQuanList fix">
                <div className="albumQuannav">
                    <span className="item active">最火</span>
                    <span className="item">最近更新</span>
                    <span className="item">经典</span>
                </div>
                <div className="Quanlist">

                </div>
            </div>
        )
    }
}

export default AlbumQuan;