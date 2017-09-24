import React, {Component} from 'react';



class Play extends Component {
    render() {
        return (
            <div>

                <div className="mt86"></div>
                <h4 classID="name">李玉刚 - 刚好遇见你</h4>
                <audio classID="audio" src="http://audio.xmcdn.com/group32/M08/05/87/wKgJnFnFHgmA3tnSAHEVQqq3e00956.m4a"
                       controls autoplay="true"></audio>
                <button classID="btn-play">播放</button>
                <button classID="btn-stop">暂停</button>
                <button classID="btn-pre">上一首</button>
                <button classID="btn-next">下一首</button>
            </div>
        )
    }
}

export  default Play