import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import React, { Component } from 'react';

class AnimatedLoader extends Component {
  render() {
    return (
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
    );
  }
}

export default AnimatedLoader;