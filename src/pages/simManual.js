// @flow

import React from 'react';
import {
  CheckBox,
  View,
  Text,
  Picker,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import fontSize from '../constant/fontsize';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Capital from '../general/helper/capitalize';
import formatCurrency from '../general/helper/numberToCurrency';

const windowSize = Dimensions.get('window').width;

type Item = {
  name: string,
  category: string,
  brand: string,
  price: number,
  picture: string,
};
type Props = {};
type State = {};

class simulateManual extends React.Component<Props, State> {
  state = {
    caseStd: '',
    caseTwr: '',
    checkStd: true,
    totalItem: {},
    totalPrice: 0,
  };

  render() {
    let {data} = this.state;
    console.log(this.state);
    return (
      <Layout title={'Pilih Casing'}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height - 90,
          }}
        >
          <View style={styles.container}>
            <Text style={{fontSize: 30, marginVertical: 10}}>
              Pilih Dahulu Tipe Casing
            </Text>
            <View style={styles.boxrowv3}>
              {/* kiri */}
              <View style={styles.boxcol}>
                <View style={styles.boxrowv3}>
                  <CheckBox
                    style={{marginHorizontal: 10, marginTop: 5}}
                    value={this.state.checkStd}
                    onValueChange={(props) => {
                      this.setState({checkStd: props});
                    }}
                  />
                  <Text>Pilih ini untuk Casing Standard</Text>
                </View>

                <View style={styles.boxrow2}>
                  {/* image */}
                  <View style={styles.boxrow2}>
                    <Image
                      resizeMode="contain"
                      style={{height: 150, width: 150, alignSelf: 'center'}}
                      source={require('../assets/picture/catalog/AMD Ryzen 5 2600.png')}
                    />
                  </View>
                  {/* descbar */}
                  <View style={styles.boxrowv3}>
                    <Text style={styles.itemDesc}>
                      Most first time builders don’t realize this, but picking
                      the right computer case is a monumental decision. PC
                      chassis come in a variety of sizes, from miniscule
                      mini-ITX systems meant to sit on your desk, to massive
                      full towers designed for maximum expandability.
                    </Text>
                  </View>
                  <Picker
                    selectedValue={this.state.caseStd}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({caseStd: itemValue})
                    }
                  >
                    <Picker.Item label="Pilih Casing Standard" value="Bd0" />
                    <Picker.Item label="Dell" value="Bd1" />
                    <Picker.Item label="HP" value="Bd2" />
                  </Picker>
                  {/* EoBar */}
                </View>
              </View>

              {/* kanan */}
              <View style={styles.boxcol}>
                <View style={styles.boxrowv3}>
                  <CheckBox
                    style={{marginHorizontal: 10, marginTop: 5}}
                    value={!this.state.checkStd}
                    onValueChange={(props) => {
                      this.setState({checkStd: !props});
                    }}
                  />
                  <Text>Pilih ini untuk Casing Tower</Text>
                </View>

                <View style={styles.boxrow2}>
                  {/* image */}
                  <View style={styles.boxrow2}>
                    <Image
                      resizeMode="contain"
                      style={{height: 150, width: 150, alignSelf: 'center'}}
                      source={require('../assets/picture/catalog/AMD Ryzen 5 2600.png')}
                    />
                  </View>
                  {/* descbar */}
                  <View style={styles.boxrowv3}>
                    <Text style={styles.itemDesc}>
                      Most first time builders don’t realize this, but picking
                      the right computer case is a monumental decision. PC
                      chassis come in a variety of sizes, from miniscule
                      mini-ITX systems meant to sit on your desk, to massive
                      full towers designed for maximum expandability.
                    </Text>
                  </View>
                  <Picker
                    selectedValue={this.state.caseTwr}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({caseTwr: itemValue})
                    }
                  >
                    <Picker.Item label="Pilih Casing Tower" value="Bd0" />
                    <Picker.Item label="Asus RoG" value="Bd1" />
                    <Picker.Item label="Corsair" value="Bd2" />
                  </Picker>
                  {/* EoBar */}
                </View>
              </View>
            </View>
            {/* EoPartition */}
            {/* Buttonbelow */}
            <View style={styles.boxrowv2}>
              <Button title="Kembali" onPress={() => {}} />
              <Button title="Lanjutkan" onPress={() => {}} />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default simulateManual;
let styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 100,
    height: 600,
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
    height: Dimensions.get('window').height - 420,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  btn: {marginBottom: 5},
  boxrowv2: {
    flexDirection: 'row',
    width: 250,
    padding: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  boxrowv3: {
    flexDirection: 'row',
    padding: 5,
  },
  boxcol: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 5,
    width: 500,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  textin: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  imej: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    margin: 5,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  itemLabel: {
    fontSize: 15,
    marginRight: 15,
  },
  itemDesc: {
    fontSize: 15,
    width: '100%',
  },
  dropdown: {
    flex: 1,
    marginVertical: 10,
  },
  dropdownbody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});
