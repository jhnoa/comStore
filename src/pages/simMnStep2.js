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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = {};
type State = {};

class simChoice extends React.Component<Props, State> {
  state = {
    ItemName: 'AMD Ryzen 5 2600 ',
    checkStd: true,
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
            <View style={styles.boxrowv2}>
              <Picker
                selectedValue={this.state.kurir}
                style={styles.dropdown}
                enabled={this.state.checkStd}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({kurir: itemValue})
                }
              >
                <Picker.Item label="Pilih Kategori" value="Bd0" />
                <Picker.Item label="JNE" value="JNE" />
                <Picker.Item label="TIKI" value="TIKI" />
              </Picker>
              <Picker
                selectedValue={this.state.kurir}
                style={styles.dropdown}
                enabled={this.state.checkStd}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({kurir: itemValue})
                }
              >
                <Picker.Item label="Pilih Brand" value="Bd0" />
                <Picker.Item label="JNE" value="JNE" />
                <Picker.Item label="TIKI" value="TIKI" />
              </Picker>
              <Picker
                selectedValue={this.state.kurir}
                style={styles.dropdown}
                enabled={this.state.checkStd}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({kurir: itemValue})
                }
              >
                <Picker.Item label="Pilih Nama Barang" value="Bd0" />
                <Picker.Item label="JNE" value="JNE" />
                <Picker.Item label="TIKI" value="TIKI" />
              </Picker>
              <Button style={{alignSelf: 'center'}} title={'sort'} />
            </View>
            {/* picker atas ends here */}
            {/* box bawah untuk simulate */}
            <View style={styles.boxrowv4}>
              <View style={styles.boxrow}>
                <Text>To Be Filled With Boxes</Text>
              </View>
              {/* kiri ends here */}
              <View style={styles.boxcolv3}>
                <View
                  style={{
                    width: '95%',
                    borderRadius: 3,
                    borderWidth: 1,
                    marginVertical: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.2)',
                  }}
                >
                  <Button
                    buttonStyle={{borderRadius: 10}}
                    title={'Clear All'}
                    onPress={() => {}}
                  />
                </View>
                {/* as you can see it's a button there */}
                <Text> </Text>
                {/* spacer */}
                <View style={styles.boxcol}>
                  <Text>To Be Filled with Item Info & price</Text>
                  <Text>To Be Filled with Item Info & price</Text>
                  <Text>To Be Filled with Item Info & price</Text>
                  <Text>To Be Filled with Item Info & price</Text>
                  <Button title={'Test Filling'} />
                </View>
                {/* mini cart end */}
                <View
                  style={{
                    width: '95%',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginVertical: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.2)',
                  }}
                >
                  <Text>Total Item: XYZ</Text>
                  <Text>Total Harga: Rp xx.xxx.xxx</Text>
                </View>
                {/* totaltotalan end */}
                <View
                  style={{
                    width: '95%',
                    borderRadius: 3,
                    borderWidth: 1,
                    marginVertical: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.2)',
                  }}
                >
                  <Button
                    color={'lawngreen'}
                    buttonStyle={{borderRadius: 10}}
                    title={'Check Out'}
                    onPress={() => {}}
                  />
                </View>
                <View
                  style={{
                    width: '95%',
                    borderRadius: 3,
                    borderWidth: 1,
                    marginVertical: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.2)',
                  }}
                >
                  <Button
                    color={'red'}
                    buttonStyle={{borderRadius: 10}}
                    title={'Batal'}
                    onPress={() => {}}
                  />
                </View>
              </View>
              {/* kanan ends here */}
            </View>
            {/* boxie bawah ends here */}
          </View>
        </View>
      </Layout>
    );
  }
}

export default simChoice;
let styles = StyleSheet.create({
  container: {
    width: windowWidth - 100,
    height: 800,
    padding: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'row',
    borderRadius: 5,
    padding: 5,
    width: '60%',
    height: 650,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderRadius: 5,
    padding: 5,
    width: '80%',
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  boxrowv3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxrowv4: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  boxcol: {
    width: '95%',
    height: 400,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  boxcolv2: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: 400,
    height: 300,
    alignItems: 'center',
    marginRight: 20,
  },
  boxcolv3: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    width: '39%',
    height: 650,
    marginLeft: '1%',
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  butcon: {
    flex: 1,
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
    margin: 10,
  },
});
