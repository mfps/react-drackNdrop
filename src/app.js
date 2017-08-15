import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/app';

class DnD extends Component {
  render() {
    return <App />;
  }
}

render(<DnD />, document.getElementById('app'));
