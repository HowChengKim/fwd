import React, {Component} from 'react';
import {Button} from 'amazeui-touch';

class MyT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button amStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default MyT;