import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.title}
        <div>List</div>
      </div>

    )
  }
}

export default List;