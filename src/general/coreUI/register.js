// @flow

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import {H1, H3} from '../../constant/fontsize';

const windowSize = Dimensions.get('window').width;

let RegisterPage = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 30,
      backgroundColor: 'grey',
      width: 500,
      height: 500,
    }}
  >
    <View style={{marginBottom: 30}}>
      <Text style={styles.H1}>Daftarkan diri anda sekarang</Text>
    </View>

    <View
      style={{
        height: 300,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
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

      <Button title="register" onPress={() => {}} />
    </View>
  </View>
);

export default RegisterPage;

let styles = StyleSheet.create({
  H1,
  H3,
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
    marginHorizontal: 30,
  },
});
