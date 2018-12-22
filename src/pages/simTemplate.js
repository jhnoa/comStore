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

const windowSize = Dimensions.get('window').width;
type Props = {};
type State = {};

class simTemp extends React.Component<Props, State> {
  state = {
    ItemName: 'AMD Ryzen 5 2600 ',
    jester: '',
    joker: '',
  };
  render() {
    console.log(this.state);
    return (
      <Layout title={'Pilih Range Budget'}>
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
            <Text style={{fontSize: 30, marginBottom: 20}}>
              Pilih Rentang Harga PC
            </Text>
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
                    Silahkan lihat penawaran kami disini apabila anda ingin
                    memiliki PC dengan rentang harga sekitar 5-10 juta
                  </Text>
                </View>
                <Button
                  style={styles.btn}
                  title="Simulate"
                  onPress={() => {}}
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
                    Silahkan lihat penawaran kami disini apabila anda ingin
                    memiliki PC dengan rentang harga sekitar 10-15 juta
                  </Text>
                </View>
                <Button
                  style={styles.btn}
                  title="Simulate"
                  onPress={() => {}}
                />
              </View>
              {/* EoBar */}
              <View style={styles.boxrow}>
                <Image
                  resizeMode="contain"
                  style={styles.imej}
                  source={require('../assets/picture/catalog/AMD Ryzen 5 2600.png')}
                />
                <View style={styles.boxrowv2}>
                  <Text>
                    Silahkan lihat penawaran kami disini apabila anda ingin
                    memiliki PC dengan rentang harga diatas 15 juta
                  </Text>
                </View>
                <Button
                  style={styles.btn}
                  title="Simulate"
                  onPress={() => {}}
                />
              </View>
            </View>
            <Button
              style={{paddingRight: 20}}
              title="Kembali"
              onPress={() => {}}
            />
          </View>
        </View>
      </Layout>
    );
  }
}

export default simTemp;
let styles = StyleSheet.create({
  container: {
    width: 1500,
    padding: 40,
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
    marginHorizontal: 20,
  },
  btn: {marginBottom: 5},
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
    width: 355,
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
