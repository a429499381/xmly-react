import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

import {get} from '../axios/get.js'


class Top extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }
  render() {
        const data = this.state.data
    return (
        <div>
            <div>
                <audio controls>
                    <source src="http://audio.xmcdn.com/group31/M08/5E/4D/wKgJSVmQzqaxRkU7ADgCGAG-E10527.m4a"></source>
                </audio>
                <audio controls>
                    <source src="http://audio.xmcdn.com/group30/M07/E9/20/wKgJXlmQcTPQ5W1dAHqvPmz6iBI916.m4a"></source>
                </audio>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                </a>
            </div>

        </div>
    )
  }
  componentDidMount() {
     get().then((res) => {
         this.setState({
             data: res.data
         })
         console.log(res.data)
     })
  }
}

export default Top;