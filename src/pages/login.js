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

const LoginPage = () => (
  <Layout title={'Home'} noPadding>
    <View
      style={{
        flex: 0.2,
        height: 200,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.H1}>Login</Text>
    </View>

    <View
      style={{
        height: 200,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {/* Email */}
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
        }}
      >
        <TextInput style={styles.textBox} placeholder="Masukan Email Anda" />
      </View>
      {/* password */}
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={styles.textBox}
          secureTextEntry
          placeholder={'Masukan Password'}
        />
      </View>
      {/* login submit */}
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  </Layout>
);

export default LoginPage;

let styles = StyleSheet.create({
  H1: {
    fontSize: 40,
    fontFamily: 'Gill Sans',
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
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    // placeholderTextColor: 'white',
    marginHorizontal: 20,
  },
});
