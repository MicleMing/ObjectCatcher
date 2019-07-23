/**
 * devtools entry
 */

import React, { Component } from 'react';

export default class DevToolsAPP extends Component {
  constructor(props) {
    super();
    this.state = {
      phone: props.data
    }
  }
  render() {
    return (
      <div>
        my name is {this.state.phone.uri}
      </div>
    )
  }
}
