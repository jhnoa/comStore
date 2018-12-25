// @flow

import React from 'react';
import {
  View,
  Text,
  Picker,
  CheckBox,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import fontSize from '../constant/fontsize';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import nextToPayment from '../general/helper/simulation/nextToPayment';
import {navigateTo} from 'gatsby-link'

const windowSize = Dimensions.get('window').width;
type Props = {};
type State = {};

class jaskir extends React.Component<Props, State> {
  state = {
    denganKurir: true,
    kurir: '',
  };
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
            <Text style={{fontSize: 30}}>Pilih Jasa Kurir</Text>
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
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'rgba(255,255,255, 0.8)',
                    width: 300,
                  }}
                >
                  <CheckBox
                    style={{marginHorizontal: 10, marginTop: 5}}
                    value={this.state.denganKurir}
                    onValueChange={(props) => {
                      this.setState({denganKurir: props});
                    }}
                  />
                  <Text>pilih disini untuk memilih jasa angkut</Text>
                </View>
                <View style={styles.boxrowv2}>
                  <Picker
                    selectedValue={this.state.kurir}
                    style={styles.dropdown}
                    enabled={this.state.denganKurir}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({kurir: itemValue})
                    }
                  >
                    <Picker.Item label="Pilih Jasa Angkut" value="" />
                    <Picker.Item label="JNE" value="JNE" />
                    {/* <Picker.Item label="TIKI" value="TIKI" /> */}
                  </Picker>
                </View>
              </View>
              {/* descbar */}
              <View style={styles.boxrow}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'rgba(255,255,255, 0.8)',
                    width: 300,
                  }}
                >
                  <CheckBox
                    style={{marginHorizontal: 10, marginTop: 5}}
                    value={!this.state.denganKurir}
                    onValueChange={(props) => {
                      this.setState({denganKurir: !props});
                    }}
                  />
                  <Text>pilih disini untuk mengambil sendiri</Text>
                </View>
              </View>
              {/* EoBar */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 200,
              }}
            >
              <Button
                title="Batal"
                onPress={() => {
                  window.history.back();
                }}
              />
              <Button
                title="Konfirmasi"
                onPress={() => {
                  nextToPayment({
                    pengiriman:
                      this.state.denganKurir === true
                        ? this.state.kurir
                        : 'ambil',
                  });
                  navigateTo('/');
                }}
                disabled={
                  this.state.denganKurir === true
                    ? this.state.kurir !== ''
                      ? false
                      : true
                    : this.state.denganKurir === false
                      ? true
                      : false
                }
              />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default jaskir;
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
  dropdown: {
    flex: 1,
    marginVertical: 10,
  },
});
