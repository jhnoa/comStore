// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';

const windowSize = Dimensions.get('window').width;

const LoginPage = () => (
  <Layout title={'Home'}>
    {/* header */}
    <Header />

    <View
      style={{
        flex: 1,
        background: 'grey',
        width: '95%',
        marginBottom: 5,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
      }}
    >
      {/* <View style={{flex: 1}}>
        <Text style={{fontSize: 30}}>Description about Simulation</Text>
      </View> */}
      <View style={{flexWrap: 'wrap'}}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/picture/google.png')}
        />
      </View>
      <View>
        <Button title="Simulate" />
      </View>
    </View>
    <View
      style={{
        flex: 1,
        background: 'purple',
        width: '95%',
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/picture/google.png')}
      />
      <Button title="wham" />
    </View>

    <Footer />
  </Layout>
);

export default LoginPage;

let styles = StyleSheet.create({
  image: {
    width: windowSize / 5,
    height: windowSize / 10,
  },
});
