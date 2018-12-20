// @flow

import React from 'react';
import {View, Text, StyleSheet, Image, Button, Dimensions} from 'react-native';
import Layout from '../general/layouts/index';

const windowSize = Dimensions.get('window').width;
type Props = {};
type State = {};

class Sandbox extends React.Component<Props, State> {
  state = {
    tester: '',
    jester: '',
    joker: '',
  };
  render() {
    console.log(this.state);
    return (
      <Layout>
        <View
          style={{
            flex: 1,
            flexDirecction: 'row',
            justifyContent:'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Image
              resizeMode="contain"
              style={{height: 20, width: 40, }}
              source={require('../assets/picture/google.png')}
            />
          </View>
        </View>
      </Layout>
    );
  }
}

export default Sandbox;
let styles = StyleSheet.create({
  boxcon: {
    flex: 1,
  },
  dropdownbody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});
