import React, { Component } from 'react';
export default class Item extends Component {
 
    render() {
      return <div class="itemss"><h1>{this.props.title}</h1> <img src={this.props.images} alt="" /></div>
    }
  }
