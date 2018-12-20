import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

let menuSection = (name, styles, children, onPress) => {
  let defaultFunction = () => {
    console.log(name);
  };
  return (
    <TouchableOpacity
      key={Math.random()}
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
      onPress={onPress || defaultFunction}
    >
      {children}
      <Text style={{fontSize: 20}}>{name}</Text>
    </TouchableOpacity>
  );
};

class HeaderPart extends React.Component {
  state = {
    onLoginPressed: this.props.onLoginPressed,
    onRegPressed: this.props.onRegPressed,
    login: this.props.isLogin === true ? 'authenticated' : 'unauthenticated',
  };
  headerMenu = {
    authenticated: [
      menuSection(
        '',
        {},
        <Image
          resizeMode="contain"
          style={{height: 20, width: 40}}
          source={require('../../assets/picture/google.png')}
        />,
      ),
      menuSection('', {flex: 1}),
      menuSection('Simulation'),
      menuSection('Catalog'),
      menuSection('About Us', {}, null, () => {
        console.log('YOU SEE NOTHING');
      }),
      menuSection('Log Out'),
    ],
    unauthenticated: [
      menuSection(
        '',
        {},
        <Image
          resizeMode="contain"
          style={{height: 20, width: 40}}
          source={require('../../assets/picture/google.png')}
        />,
      ),
      menuSection('', {flex: 1}),
      menuSection('Catalog'),
      menuSection('About Us'),
      menuSection('Login', {}, null, this.props.onLoginPressed),
      menuSection('Register', {}, null, this.props.onRegPressed),
    ],
  };
  render() {
    return (
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
        {this.headerMenu[this.state.login]}
      </View>
    );
  }
}

export default HeaderPart;
