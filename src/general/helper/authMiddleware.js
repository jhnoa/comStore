// @flow

import React from 'react';
import isAuthenticated from './auth/auth';
import {navigateTo} from 'gatsby-link';

function connect(BaseComponent: *) {
  class Authenticated extends React.Component<*, {visible: boolean}> {
    state = {visible: false};
    async componentDidMount() {
      let authenticated = await isAuthenticated();
      if (!authenticated) {
        navigateTo('/');
      } else {
        this.setState({visible: true});
      }
    }

    render() {
      let props = this.props;
      let component =
        this.state.visible === true ? <BaseComponent {...props} /> : [];
      return component;
    }
  }

  return Authenticated;
}

export default connect;
