import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Logout from '../helper/auth/logout';
import {navigateTo} from 'gatsby-link';

const windowSize = Dimensions.get('window').height;

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
  onLoginPressed: Function,
  onRegPressed: Function,
  onLogoutPressed: Function,
  isLogin?: boolean,
};

class HeaderPart extends React.Component<Props> {
  state = {
    onLoginPressed: this.props.onLoginPressed,
    onRegPressed: this.props.onRegPressed,
    isLogin: this.props.isLogin,
    show: false,
  };
  headerMenu = {
    unauthenticated: [
      menuSection(
        '',
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
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: 'baseline',
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          Menu
        </Text>
        {menuSection('Catalog', styles.customButton, null, () => {
          this.setState({show: !this.state.show});
          navigateTo('/admin/');
        })}
        {this.state.show === true &&
          menuSection('Tambah Barang', styles.customButton2)}
        {this.state.show === true &&
          menuSection('Hapus Barang', styles.customButton2)}
        {menuSection('User List', styles.customButton, null, () => {
          navigateTo('userlist');
        })}
        {menuSection('User Chat', styles.customButton)}
        {menuSection('Transaction List', styles.customButton, null, () => {
          navigateTo('transactionlist');
        })}
      </View>
    );
  }
}

export default HeaderPart;

let styles = StyleSheet.create({
  customButton: {
    alignSelf: 'stretch',
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  customButton2: {
    alignSelf: 'baseline',
    width: '90%',
    marginVertical: 5,
    marginLeft: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  container: {
    position: 'fixed',
    // top: 50,
    // left: 0,
    // right: 0,
    // bottom: 50,
    width: 300,
    height: windowSize - 50,
    zIndex: 1,
    padding: 10,
    // flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // flexGrow: 1,
    // flexStretch: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'silver',
  },
  dropdownbody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});
