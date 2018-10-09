// @flow

import React from 'react';
import {isLoggedIn} from '../../backend/auth';
import {navigateTo} from 'gatsby-link';

function connect(BaseComponent: *) {
  class Authenticated extends React.Component<*> {
    componentDidMount() {
      let authenticated = isLoggedIn();
      if (!authenticated) {
        navigateTo('/login');
      }
    }

    render() {
      let props = this.props;
      return <BaseComponent {...props} />;
    }
  }

  return Authenticated;
}

export default connect;
