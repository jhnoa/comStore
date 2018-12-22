// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import fontSize from '../constant/fontsize';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Auth from '../general/helper/authMiddleware';
import {navigateTo} from 'gatsby-link';
const windowSize = Dimensions.get('window').width;
type Props = {};
type State = {};

class simChoice extends React.Component<Props, State> {
  render() {
    console.log(this.state);
    return (
      <Layout title={'Simulasi'}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height - 90,
          }}
        >
          <View style={styles.container}>
            {/* atas */}
            <Text style={{fontSize: 30}}>Pilih Mode Simulasi</Text>
            {/* bawah */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 550,
                flexDirection: 'row',
                padding: 10,
              }}
            >
              {/* image */}
              <View style={styles.boxrow}>
                <Image
                  resizeMode="contain"
                  style={styles.imej}
                  source={require('../assets/picture/catalog/AMD Ryzen 5 2600.png')}
                />
                <View style={styles.boxrowv2}>
                  <Text>
                    Pilih ini untuk menikmati rancangan yang telah disesuaikan
                    dengan budget anda
                  </Text>
                </View>
                <Button
                  title="Simulate"
                  onPress={() => {
                    navigateTo('simTemplate');
                  }}
                />
              </View>
              {/* descbar */}
              <View style={styles.boxrow}>
                <Image
                  resizeMode="contain"
                  style={styles.imej}
                  source={require('../assets/picture/catalog/AMD Ryzen 5 2600.png')}
                />
                <View style={styles.boxrowv2}>
                  <Text>
                    Pilih ini untuk menentukan sendiri rancangan yang anda
                    inginkan
                  </Text>
                </View>
                <Button
                  title="Simulate"
                  onPress={() => {
                    navigateTo('simManual');
                  }}
                />
              </View>
              {/* EoBar */}
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default Auth(simChoice);
let styles = StyleSheet.create({
  container: {
    width: 1200,
    padding: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: 400,
    height: 300,
    alignItems: 'center',
    marginRight: 20,
  },
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
    width: 300,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  boxcol: {
    justifyContent: 'center',
    width: 200,
    height: 200,
    alignItems: 'center',
    marginRight: 20,
  },
  textin: {
    fontSize: 20,
    width: 450,
  },
  itemLabel: {
    fontSize: 15,
    marginRight: 15,
  },
  itemDesc: {fontSize: 15},
  imej: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    margin: 5,
  },
});
