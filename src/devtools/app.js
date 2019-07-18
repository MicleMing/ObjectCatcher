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
        aaaa- {this.state.phone}
      </div>
    )
  }
}
