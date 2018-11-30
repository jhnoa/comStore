// @flow

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Layout from '../general/layouts/index';

let menuSection = (name, styles, children) => (
  <TouchableOpacity
    style={[
      {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 1,
        padding: 5,
        paddingHorizontal: 15,
      },
      styles,
    ]}
    onPress={() => {
      console.log(name);
    }}
  >
    {children}
    <Text style={{fontSize: 20}}>{name}</Text>
  </TouchableOpacity>
);

const IndexPage = () => (
  <Layout title={'Home'}>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        backgroundColor: 'blue',
      }}
    >
      {menuSection(
        '',
        {},
        <Image
          resizeMode="contain"
          style={{height: 20, width: 40}}
          source={require('../assets/picture/google.png')}
        />,
      )}
      {menuSection('', {flex: 1})}
      {menuSection('Simulation')}
      {menuSection('About Us')}
      {menuSection('Catalog')}
    </View>
  </Layout>
);

export default IndexPage;
