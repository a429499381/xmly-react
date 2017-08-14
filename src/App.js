import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
        <a href="#" className="top_l">
          城市
          <i className="top_l_icon"></i>
        </a>
        <div className="search">
          <i className="search_icon"></i>
          <input type="text" placeholder="请输入要搜索的关键字"/>
        </div>
        <a href="#" className="top_r">
          用户
        </a>
      </div>
      </div>
    );
  }
}

export default App;
