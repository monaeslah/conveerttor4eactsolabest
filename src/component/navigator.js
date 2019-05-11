import React, { Component } from 'react';
export default class Navigator extends Component {
    render() {
      return <div class="navigator" onClick={this.props.click}>{this.props.label}</div>
    }
  }