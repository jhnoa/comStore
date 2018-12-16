// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import Carousel from 'nuka-carousel';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';

const windowSize = Dimensions.get('window').width;
class IndexPage extends React.Component {
  render() {
    return (
      <Layout title={'Home'}>
        <Header isLogin={true} />
        <Carousel
          style={{flex: 1, paddingTop: 10}}
          // slideWidth={0.9}
          width="70%"
          heightMode={'max'}
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
          <Button title="wham" onPress={() => {}} />
        </View>
        <Footer />
      </Layout>
    );
  }
}

export default IndexPage;
