// @flow

import React from 'react';
import {View, Text, StyleSheet, Image, Button, Dimensions} from 'react-native';
import Layout from '../general/layouts/index';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Login from '../general/coreUI/login';
import Reg from '../general/coreUI/register';
import Modal from 'modal-enhanced-react-native-web';

const windowSize = Dimensions.get('window').width;
class Sandbox extends React.Component {
  state = {
    loginModal: false,
    regModal: false,
  };
  render() {
    console.log(this.state);
    return (
      <Layout title={'Home'}>
        <Header
          isLogin={false}
          onLoginPressed={() => {
            this.setState({loginModal: true});
          }}
          onRegPressed={() => {
            this.setState({regModal: true});
          }}
        />
        {/* login modal */}
        <Modal
          isVisible={this.state.loginModal}
          onBackdropPress={() => this.setState({loginModal: false})}
        >
          <Login />
        </Modal>
        {/* register modal */}
        <Modal
          isVisible={this.state.regModal}
          onBackdropPress={() => this.setState({regModal: false})}
        >
          <Reg />
        </Modal>
        <View
          style={{
            flex: 1,
            backgroundColor: 'grey',
            width: '95%',
            marginBottom: 5,
            marginTop: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
        >
          {/* <View style={{flex: 1}}>
        <Text style={{fontSize: 30}}>Description about Simulation</Text>
      </View> */}
          <View>
            <Image
              resizeMode="contain"
              style={{height: 150, width: 280}}
              source={require('../assets/picture/google.png')}
            />
          </View>
          <View>
            <Button title="Simulate" onPress={() => {}} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'purple',
            width: '95%',
            marginTop: 5,
            marginBottom: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Image
            resizeMode="contain"
            style={{height: 150, width: 280}}
            source={require('../assets/picture/google.png')}
          />
          <Button title="Catalog" onPress={() => {}} />
        </View>
        <Footer />
      </Layout>
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
