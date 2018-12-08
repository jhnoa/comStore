import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

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

const HeaderPart = () => (
  <View
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 50,
      zIndex: 1,
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
        source={require('../../assets/picture/google.png')}
      />,
    )}
    {menuSection('', {flex: 1})}
    {menuSection('Simulation')}
    {menuSection('Catalog')}
    {menuSection('About Us')}
  </View>
);

export default HeaderPart;
