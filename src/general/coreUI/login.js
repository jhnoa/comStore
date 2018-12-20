// @flow

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {H1, H3} from '../../constant/fontsize';
import loginFunction from '../helper/auth/login';

const windowSize = Dimensions.get('window').width;

class LoginPage extends React.Component {
  state = {email: '', password: ''};
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 30,
          backgroundColor: 'grey',
          width: 400,
          height: 350,
        }}
      >
        <View
          style={{
            height: 100,
            marginBottom: 5,
            backgroundColor: 'grey',
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
            <TextInput
              style={styles.textBox}
              placeholder="Masukan Email Anda"
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
            />
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
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
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
            <Button
              title="Login"
              onPress={async () => {
                let {email, password} = this.state;
                let result = await loginFunction(email, password);
                if (result === true) {
                  console.log('Login Success');
                  this.props.success();
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default LoginPage;

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
    marginHorizontal: 20,
  },
});
