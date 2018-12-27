// @flow

import React from 'react';
import Helmet from 'react-helmet';
import {View, StyleSheet, Dimensions} from 'react-native';
import './index.css';
import config from '../../constant/config';
import Header from '../coreUI/header';
import Footer from '../coreUI/footer';
import Reg from '../coreUI/register';
import Login from '../coreUI/login';
import Modal from 'modal-enhanced-react-native-web';
import isAuthenticated from '../helper/auth/auth';
import {navigateTo} from 'gatsby-link';
import getStorage from '../helper/getStorage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = {
  noPadding?: boolean,
  children: React$Node,
  title?: string,
  isLoggedIn?: Function,
  isLoggedOut?: Function,
};
type State = {
  width: number,
  paddingTop: number,
  paddingBottom: number,
  isLoggedIn: boolean,
  loginModal: boolean,
  regModal: boolean,
};

class Layout extends React.Component<Props, State> {
  state = {
    width: windowWidth,
    // height: windowHeight,
    paddingTop: this.props.noPadding === true ? 0 : 60,
    paddingBottom: this.props.noPadding === true ? 0 : 30,
    isLoggedIn: false,
    loginModal: false,

    regModal: false,
  };
  handler = (dims: DimensionsHandlerProps) => {
    let {width} = dims.window;
    this.setState({width});
  };
  async componentDidMount() {
    Dimensions.addEventListener('change', this.handler);
    let isLoggedIn = await isAuthenticated();
    console.log('layoutmount', isLoggedIn);
    if (isLoggedIn.status === true) {
      if (this.props.isLoggedIn) {
        this.props.isLoggedIn();
      }
    }
    this.setState((state) => {
      return {...state, isLoggedIn: isLoggedIn.status};
    });
  }

  componentWillUnmount() {
    // Important to stop updating state after unmount
    Dimensions.removeEventListener('change', this.handler);
  }
  render() {
    let {children} = this.props;
    let pageTitle = this.props.title
      ? `${this.props.title} - ${config.companyName}`
      : config.companyName;
    let {width, paddingTop, paddingBottom} = this.state;
    let {isLoggedIn} = this.state;
    console.log(isLoggedIn);
    return (
      <View style={[styles.container, {width, paddingTop, paddingBottom}]}>
        <Helmet
          title={pageTitle}
          meta={[
            {name: 'description', content: 'Bayar & Cicil Tanpa Kartu Kredit'},
            {name: 'keywords', content: 'loan, payment, vospay, credit'},
          ]}
        />
        <Header
          isLogin={isLoggedIn}
          onLoginPressed={() => {
            this.setState({loginModal: true});
          }}
          onRegPressed={() => {
            this.setState({regModal: true});
          }}
          onLogoutPressed={() => {
            if (this.props.isLoggedOut) {
              this.props.isLoggedOut();
            }
            this.setState({isLoggedIn: false});
            navigateTo('/');
          }}
        />
        <Modal
          isVisible={this.state.loginModal}
          onBackdropPress={() => {
            this.setState({loginModal: false});
          }}
        >
          <Login
            success={() => {
              if (this.props.isLoggedIn) {
                this.props.isLoggedIn();
              }
              this.setState({
                loginModal: false,
                isLoggedIn: true,
              });
            }}
          />
        </Modal>
        {/* register modal */}
        <Modal
          isVisible={this.state.regModal}
          onBackdropPress={() => this.setState({regModal: false})}
        >
          <Reg success={() => this.setState({regModal: false})} />
        </Modal>
        {children}
        <Footer isLoggedIn={isLoggedIn} />
      </View>
    );
  }
}

export default Layout;

let styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    // height: windowHeight,
    margin: 0,
    padding: 0,
    //paddingTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

/*   link={[{rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}]}
 */
