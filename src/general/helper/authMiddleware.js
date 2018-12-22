// @flow

import React from 'react';
import isAuthenticated from './auth/auth';
import {navigateTo} from 'gatsby-link';

function connect(BaseComponent: *, passThrough: boolean = false) {
  class Authenticated extends React.Component<
    *,
    {visible: boolean, isLoggedIn: boolean},
  > {
    state = {visible: false, isLoggedIn: false};
    async componentDidMount() {
      let isLoggedIn = await isAuthenticated();

      if (!isLoggedIn && !passThrough) {
        navigateTo('/');
      } else {
        this.setState({visible: true});
      }
      this.setState({isLoggedIn});
    }

    render() {
      let props = this.props;
      let component =
        this.state.visible === true ? (
          <BaseComponent {...props} isLoggedIn={this.state.isLoggedIn} />
        ) : (
          []
        );
      return component;
    }
  }

  return Authenticated;
}

export default connect;
