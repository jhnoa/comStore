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
import register from '../helper/auth/register';
const windowSize = Dimensions.get('window').width;
type Props = {
  success: Function,
};
type State = {
  email: string,
  password: string,
  repassword: string,
  name: string,
  phone: string,
  address: string,
};
class RegisterPage extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    repassword: '',
    name: '',
    phone: '',
    address: '',
  };
  render() {
    return (
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
            <TextInput
              style={styles.textBox}
              placeholder={'Masukan Email Anda'}
              placeholderTextColor="white"
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
            />
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
              placeholderTextColor="white"
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
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
              placeholderTextColor="white"
              value={this.state.repassword}
              onChangeText={(text) => this.setState({repassword: text})}
            />
          </View>
          {/* Username */}
          <View
            style={{
              flex: 1.5,
              flexDirection: 'row',
            }}
          >
            <TextInput
              style={styles.textBox}
              placeholder={'Masukan Nama Anda'}
              placeholderTextColor="white"
              value={this.state.name}
              onChangeText={(text) => this.setState({name: text})}
            />
          </View>
          {/* Userphone */}
          <View
            style={{
              flex: 1.5,
              flexDirection: 'row',
            }}
          >
            <TextInput
              style={styles.textBox}
              placeholder="Masukan No. HP Anda"
              placeholderTextColor="white"
              value={this.state.phone}
              onChangeText={(text) => this.setState({phone: text})}
            />
          </View>

          <View
            style={{
              flex: 1.5,
              flexDirection: 'row',
            }}
          >
            <TextInput
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: 40,
                width: 300,
                borderColor: 'black',
                borderWidth: 2,
                marginHorizontal: 60,
              }}
              placeholder="Masukan Alamat Anda"
              placeholderTextColor="white"
              multiline={true}
              numberOfLines={3}
              onChangeText={(text) => this.setState({address: text})}
            />
          </View>

          <Button
            title="register"
            onPress={async () => {
              let {email, password, name, phone, address} = this.state;
              let result = await register({
                email,
                password,
                name,
                contactNumber: phone,
                address,
              });
              if (result) {
                this.props.success();
              }
            }}
          />
        </View>
      </View>
    );
  }
}
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
    marginHorizontal: 30,
  },
});
