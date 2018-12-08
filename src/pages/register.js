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
    <Header />
    <View style={{flex: 1}}>
      <Text style={styles.H1}>Daftarkan diri anda sekarang</Text>
    </View>
    <Footer />
  </Layout>
);

export default LoginPage;

let styles = StyleSheet.create({
  H1: {
    fontSize: 40,
    fontFamily: 'Gill Sans',
  },
  image: {
    width: windowSize / 5,
    height: windowSize / 10,
  },
});
