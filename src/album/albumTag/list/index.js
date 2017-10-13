import React, {Component} from 'react';
import {Link} from 'react-router'
import './index.scss'
import LoadIcon from '../../../PageCom/loadIcon'

// 有声小说
export default class comic extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let data = this.props.data
        return (
            <div>
                <div className="lists fix">
                    {
                        data
                            ?
                            <div >
                                {
                                    data.map((item, index) => {
                                        return <div key={index} className="list">
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



}

