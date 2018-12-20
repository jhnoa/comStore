// @flow

import React from 'react';
import Helmet from 'react-helmet';
import {View, StyleSheet, Dimensions} from 'react-native';
import './index.css';
import config from '../../constant/config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = {
  noPadding?: boolean,
  children: React$Node,
  title?: string,
};
type State = {
  width: number,
  paddingTop: number,
  paddingBottom: number,
};

class Layout extends React.Component<Props, State> {
  state = {
    width: windowWidth,
    // height: windowHeight,
    paddingTop: this.props.noPadding === true ? 0 : 60,
    paddingBottom: this.props.noPadding === true ? 0 : 30,
  };
  handler = (dims: DimensionsHandlerProps) => {
    let {width} = dims.window;
    this.setState({width});
  };
  componentDidMount() {
    Dimensions.addEventListener('change', this.handler);
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
    return (
      <View style={[styles.container, {width, paddingTop, paddingBottom}]}>
        <Helmet
          title={pageTitle}
          meta={[
            {name: 'description', content: 'Bayar & Cicil Tanpa Kartu Kredit'},
            {name: 'keywords', content: 'loan, payment, vospay, credit'},
          ]}
        />
        {children}
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
    backgroundColor: 'red',
  },
});

/*   link={[{rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}]}
 */
