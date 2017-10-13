import React, {Component} from 'react';
import {Link} from 'react-router'
import './index.scss'
import {albumTagData} from '../../../data/axios/album-tag'
import LoadIcon from '../../../PageCom/loadIcon'

// 有声小说
export default class comic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    render() {
        let data = this.state.data
        return (
            <div>
                <div className="list ">
                    <Link to='/'>
                        <img src="" alt=""/>
                        <p className="name">全部</p>
                    </Link>
                </div>
                <div className="lists fix">
                    {
                        data
                            ?
                            <div >
                                {
                                    data.map((item, index) => {
                                        return <div key={index}>
                                            <Link to={item.href} >
                                                <img src={item.src} alt=""/>
                                                <p className="name">{item.name}</p>
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

    componentDidMount() {
        let id = this.props.params.location.pathname
        let data = JSON.parse(localStorage.getItem(id))
        console.log('album-tag',id)
        if(!data) {
            albumTagData(id).then(res => {
                data = res
                localStorage.setItem(id, JSON.stringify(res))

            })
        }

        this.setState({
            data: data
        })

    }

}

