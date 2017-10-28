import React, { Component } from 'react';
import './css/reset.css'
import './css/zxx.css'

class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>

    )
  }
}

export default App;
