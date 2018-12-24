// @flow

import React from 'react';
import {View, Text, Image, Button, Dimensions} from 'react-native';
import Layout from '../general/layouts/admin';
import isAuthenticated from '../general/helper/auth/auth';
import {navigateTo} from 'gatsby-link';

const windowSize = Dimensions.get('window').width;

type Props = {};

type State = {
  isLoggedIn: boolean,
};

class IndexPage extends React.Component<Props, State> {
  state = {
    isLoggedIn: false,
  };
  render() {
    console.log(this.state);
    return (
      <Layout
        title={'Home'}
        isLoggedIn={() => this.setState({isLoggedIn: true})}
      >
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
            <Button title="Simulate" onPress={() => this._simulate()} />
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
            padding: 10,
          }}
        >
          <Image
            resizeMode="contain"
            style={{height: 150, width: 280}}
            source={require('../assets/picture/google.png')}
          />
          <Button
            title="Catalog"
            onPress={() => {
              navigateTo('itemList');
            }}
          />
        </View>
      </Layout>
    );
  }

  _simulate = () => {
    if (!this.state.isLoggedIn) {
      window.alert('Please Login To Continue!');
    } else {
      //navigate to simulate Option
      navigateTo('simulateOptions');
    }
  };
}

export default IndexPage;
