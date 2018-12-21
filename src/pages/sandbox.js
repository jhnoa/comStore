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

class Sandbox extends React.Component<Props, State> {
  state = {
    ItemName: 'AMD Ryzen 5 2600 ',
    jester: '',
    joker: '',
  };
  render() {
    console.log(this.state);
    return (
      <Layout>
        <Header />
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
                <View style={styles.boxcol}>
                  {/* label */}
                  <Text style={styles.textin}>Informasi Barang</Text>
                  {/* ilist */}
                  <View style={styles.boxrowv3}>
                    <Text>
                      Silahkan lihat penawaran kami disini apabila anda ingin
                      memiliki PC dengan rentang harga sekitar 5-10 juta
                    </Text>
                  </View>
                </View>
                <View style={styles.boxrowv2}>
                  <Text>
                    Silahkan lihat penawaran kami disini apabila anda ingin
                    memiliki PC dengan rentang harga sekitar 5-10 juta
                  </Text>
                </View>
              </View>
              {/* descbar */}
              {/* EoBar */}
            </View>
            <Button
              style={{paddingRight: 20, alignSelf:'flex-end'}}
              title="Kembali"
              onPress={() => {}}
            />
          </View>
        </View>
        <Footer />
      </Layout>
    );
  }
}

export default Sandbox;
let styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width-100,
    height: Dimensions.get('window').height-240,
    padding: 40,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: 1000,
    height: 300,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  btn: {marginBottom: 5},
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
    marginHorizontal: 10,
    width: 355,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  boxrowv3: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  boxcol: {
    height: 250,
    flexDirection: 'column',
    alignItems: 'baseline',
    padding: 5,
    marginHorizontal: 10,
    width: 555,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  textin: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
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
