// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Dimensions,
  Picker,
} from 'react-native';
import Layout from '../general/layouts/index';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';

const windowSize = Dimensions.get('window').width;
class Sandbox extends React.Component {
  state = {sortBy: '', category: '', brand: ''};
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          width: 500,
          borderWidth: 5,
          borderColor: 'black',
        }}
      >
        {/* dropdown kiri start */}
        <View
          style={{
            flex: 0.2,
            padding: 20,
            justifyContent: 'center',
            backgroundColor: 'white',
            height: 90,
          }}
        >
          <Image
            resizeMode="contain"
            style={{flex: 1}}
            source={require('../assets/picture/google.png')}
          />
        </View>
        {/* dropdown kiri end */}
        {/* itemlist kanan start */}
        <View
          style={{
            flex: 0.8,
            padding: 20,
            borderLeftWidth: 5,
            justifyContent: 'center',
            backgroundColor: 'beige',
            height: 90,
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Text>Nama Barang : </Text>
            <Text>This is Placeholder</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Brand Barang : </Text>
            <Text>This is Placeholder</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Price : </Text>
            <Text>This is Placeholder</Text>
          </View>
        </View>
        {/* itemlist kanan end */}
      </View>
    );
  }
}

export default Sandbox;
let styles = StyleSheet.create({
  dropdown: {
    flex: 1,
  },
  dropdownbody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});
