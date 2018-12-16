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

const RegisterPage = () => (
  <Layout title={'Home'} noPadding>
    <View style={{flex: 0.2, marginBottom: 25}}>
      <Text style={styles.H1}>Daftarkan diri anda sekarang</Text>
    </View>

    <View
      style={{
        height: 300,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
      }}
    >
      {/* Email */}
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
        }}
      >
        <TextInput style={styles.textBox} placeholder="Masukan Email Anda" />
      </View>
      {/* password */}
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={styles.textBox}
          secureTextEntry
          placeholder={'Masukan Password'}
        />
      </View>
      {/* Re-entry password */}
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={styles.textBox}
          secureTextEntry
          placeholder={'Masukan Ulang Password'}
        />
      </View>
      {/* Username */}
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
        }}
      >
        <TextInput style={styles.textBox} placeholder={'Masukan Nama Anda'} />
      </View>
      {/* Userphone */}
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
        }}
      >
        <TextInput style={styles.textBox} placeholder="Masukan No. HP Anda" />
      </View>
    </View>
  </Layout>
);

export default RegisterPage;

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
