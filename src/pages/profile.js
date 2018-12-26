// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import Auth from '../general/helper/authMiddleware';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Profiler from '../general/helper/auth/getProfile';

type Item = {
  name: string,
  address: string,
  contactNumber: string,
};
type Props = {};

let defaultData = [
  {
    _id: '5c20bb1aefab403d10f03ea8',
    address: 'jl. mangga no. 5',
    contactNumber: '08110000001',
    createdAt: '2018-12-24T10:55:22.759Z',
    name: 'Bukan Jeruk',
    userID: '5c20bb1aefab403d10f03ea7',
    __v: 0,
  },
];

class Profile extends React.Component {
  state = {
    name: '-',
    address: '-',
    contactNumber: '-',
    mayEdit: false,
  };
  async componentDidMount() {
    let result = await Profiler();
    console.log(result);
    let {name, address, contactNumber} = result;
    this.setState({
      name,
      address,
      contactNumber,
    });
  }
  render() {
    console.log(this.state);
    return (
      <Layout title={'Profile'}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height - 90,
          }}
        >
          <View style={styles.container}>
            <View style={{alignSelf: 'baseline', marginBottom: 20}}>
              <Text style={{fontSize: 40}}>Profile:</Text>
            </View>
            <View style={styles.boxcon}>
              <Text style={{marginRight: 25, fontSize: 25}}>Nama:</Text>
              <TextInput
                style={styles.textin}
                placeholder={this.state.name}
                editable={this.state.mayEdit}
              />
            </View>
            <View style={styles.boxcon}>
              <Text style={{marginRight: 25, fontSize: 25}}>Telfon:</Text>
              <TextInput
                style={styles.textin}
                placeholder={this.state.contactNumber}
                editable={this.state.mayEdit}
              />
            </View>
            <View style={styles.boxcon}>
              <Text style={{marginRight: 14, fontSize: 25}}>Alamat:</Text>
              <TextInput
                style={styles.textin}
                multiline
                placeholder={this.state.address}
                editable={this.state.mayEdit}
              />
            </View>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <Button
                title="Edit"
                style={{alignSelf: 'center'}}
                onPress={() => {
                  this.setState((state) => ({
                    mayEdit: !state.mayEdit,
                  }));
                }}
              />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

// export default Auth(Profile);
export default Auth(Profile);

let styles = StyleSheet.create({
  container: {
    width: 600,
    padding: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    flexDirection: 'column',
  },
  boxcon: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textin: {
    fontSize: 20,
    width: 450,
  },
});
