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

class Profile extends React.Component {
  componentDidMount() {}
  render() {
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
              <TextInput style={styles.textin} placeholder="bokunamaewa" />
            </View>
            <View style={styles.boxcon}>
              <Text style={{marginRight: 25, fontSize: 25}}>Telfon:</Text>
              <TextInput style={styles.textin} placeholder="bokunamaewa" />
            </View>
            <View style={styles.boxcon}>
              <Text style={{marginRight: 14, fontSize: 25}}>Alamat:</Text>
              <TextInput
                style={styles.textin}
                multiline
                placeholder="bokunamaewa"
              />
            </View>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <Button
                title="Edit"
                style={{alignSelf: 'center'}}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

// export default Auth(Profile);
export default Profile;

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
