import React, { Component } from 'react';
import LoadIcon from '../src/PageCom/loadIcon'
import './css/reset.css'
import './css/zxx.css'

class App extends Component {
  loading() {
      if(LoadIcon) {
          return <LoadIcon/>
      }
      return null
  }

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
