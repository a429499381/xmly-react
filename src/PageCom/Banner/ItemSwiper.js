import React, { Component } from 'react';

class ItemSwiper extends Component {
  constructor(props) {
    super(props)

  }

    render() {
        return (
           <div>
               {
                   this.props.data.map((item, index) => {
                       return <div key ={index}>
                           <a href={item.href}>
                               <img src={item.src} alt=""/>
                           </a>
                       </div>
                   })
               }
           </div>
        )
    }

}

export default ItemSwiper;