import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Logout from '../helper/auth/logout';
import {navigateTo} from 'gatsby-link';
let menuSection = (name, styles, children, onPress) => {
  let defaultFunction = () => {
    console.log('name');
  };
  console.log(name);
  console.log(typeof onPress);
  let func = onPress || defaultFunction;
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
      onPress={() => func()}
    >
      {children}
      <Text style={{fontSize: 20}}>{name}</Text>
    </TouchableOpacity>
  );
};

type Props = {
  onLogoutPressed: Function,
  isLogin?: boolean,
};

class HeaderPart extends React.Component<Props> {
  state = {
    onLoginPressed: this.props.onLoginPressed,
    onRegPressed: this.props.onRegPressed,
    isLogin: this.props.isLogin,
  };
  headerMenu = {
    authenticated: [
      menuSection(
        ' ADMIN SIDE',
        {},
        <Image
          resizeMode="contain"
          style={{height: 20, width: 40}}
          source={require('../../assets/picture/google.png')}
        />,
        () => {
          navigateTo('/admin/');
        },
      ),
      menuSection('', {flex: 1}),
      menuSection('Go To Customer Side', {}, null, () => {
        navigateTo('/');
      }),
      menuSection('Log Out', {}, null, () => {
        if (Logout()) {
          this.props.onLogoutPressed();
        }
      }),
    ],
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState((state) => ({...nextProps}));
  }
  render() {
    console.log(this.state);
    return (
      <View
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          zIndex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          // height: '100%',
          backgroundColor: 'gray',
        }}
      >
        {this.headerMenu['authenticated']}
      </View>
    );
  }
}

export default HeaderPart;
