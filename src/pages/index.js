// @flow

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Layout from '../general/layouts/index';
import Carousel from 'nuka-carousel';

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
    <Carousel>
      <img
        alt="1"
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
      />
      <img
        alt="2"
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
      />
      <img
        alt="3"
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"
      />
      <img
        alt="4"
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"
      />
      <img
        alt="5"
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"
      />
      <img
        alt="6"
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"
      />
    </Carousel>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        backgroundColor: 'green',
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
