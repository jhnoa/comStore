// @flow

import React from 'react';
import {View, Text, Image, Button, Dimensions} from 'react-native';
import Layout from '../general/layouts/index';
import Carousel from 'nuka-carousel';
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
    console.log('indexLoggedIn', this.state.isLoggedIn);
    return (
      <Layout
        title={'Home'}
        isLoggedIn={() => {
          console.log('indexIsLogging in');
          this.setState({isLoggedIn: true});
        }}
        isLoggedOut={() => {
          console.log('indexIsLogging out');
          this.setState({isLoggedIn: false});
        }}
      >
        <Carousel
          style={{flex: 1, paddingTop: 10}}
          // slideWidth={0.9}
          width="70%"
          heightMode={'max'}
          disableKeyboardControls
          initialSlideHeight={600}
          wrapAround={true}
          //renderCenterLeftControls={({previousSlide}) =>(<)}
        >
          <img alt="1" src={require('../assets/picture/slider1.png')} />
          <img alt="2" src={require('../assets/picture/slider2.png')} />
          <img alt="3" src={require('../assets/picture/slider3.png')} />
          <img alt="4" src={require('../assets/picture/slider4.png')} />
          <img alt="5" src={require('../assets/picture/slider5.png')} />
        </Carousel>
        <View
          style={{
            flex: 1,
            backgroundColor: 'silver',
            width: '95%',
            marginBottom: 5,
            marginTop: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <View>
            <Image
              resizeMode="contain"
              style={{height: 300, width: 840}}
              source={require('../assets/picture/iklan.png')}
            />
          </View>
          <View>
            <Button title="Simulate" onPress={() => this._simulate()} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'skyblue',
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
            style={{height: 300, width: 840}}
            source={require('../assets/picture/iklan.png')}
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
