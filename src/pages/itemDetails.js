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
  TextInput,
} from 'react-native';
import Layout from '../general/layouts/index';

const windowSize = Dimensions.get('window').width;

const DetailsPage = () => (
  <Layout title={'Home'} noPadding>
    <View styles={styles.container}>
      <View styles={{flex: 1}}>
        <Text>This</Text>
      </View>
      <View styles={{flex: 1}}>
        <Text>is</Text>
      </View>
      <View styles={{flex: 1}}>
        <Text>a</Text>
      </View>
      <View styles={{flex: 1}}>
        <Text>Text</Text>
      </View>
      <Text>So</Text>
      <Text>Does</Text>
      <Text>This</Text>
    </View>
  </Layout>
);

export default DetailsPage;

let styles = StyleSheet.create({
  H1: {
    fontSize: 40,
    fontFamily: 'Gill Sans',
  },
  H2: {
    fontSize: 30,
  },
  H3: {
    fontSize: 20,
    marginRight: 10,
    fontFamily: 'Gill Sans',
  },
  image: {
    width: windowSize / 5,
    height: windowSize / 10,
  },
  container: {
    width: windowSize * 0.75,
    height: windowSize * 0.5,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
