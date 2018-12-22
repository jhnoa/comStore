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
    console.log(this.state);
    return (
      <Layout
        title={'Home'}
        isLoggedIn={() => this.setState({isLoggedIn: true})}
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
