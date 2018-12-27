import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Chat from './chat';
import getStorage from '../helper/getStorage';

class Footer extends React.Component {
  state = {userType: 'admin'};
  async componentDidMount() {
    let userType = await getStorage('userType');
    this.setState({userType});
  }
  render() {
    console.log('userType: ', this.state.userType);
    return (
      <View style={styles.footer}>
        <Text style={{fontSize: 20}}>#Insert Copyright Here#</Text>
        {this.props.isLoggedIn === true &&
          this.state.userType !== 'admin' && <Chat />}
      </View>
    );
  }
}
let styles = StyleSheet.create({
  footer: {
    position: 'fixed',
    justifyContent: 'space-between',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'silver',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});

export default Footer;
