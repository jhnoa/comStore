// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import Layout from '../../general/layouts/admin';
import isAuthenticated from '../../general/helper/auth/auth';
import {navigateTo} from 'gatsby-link';
import Capital from '../../general/helper/capitalize';
import formatCurrency from '../../general/helper/numberToCurrency';
const windowSize = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Item = {
  name: string,
  uuid: string,
};
type Props = {
  data: Array<Item>,
};

type State = {
  isLoggedIn: boolean,
};

class Userlistpage extends React.Component<Props, State> {
  state = {
    data: [],
  };
  render() {
    console.log(this.state);
    let {data} = this.state;
    return (
      <Layout
        title={'Home'}
        isLoggedIn={() => this.setState({isLoggedIn: true})}
      >
        <View style={styles.container}>
          {/* atas */}
          <Text style={{fontSize: 30, marginBottom: 20, fontWeight: 'bold'}}>
            Tambah Barang Baru
          </Text>
          {/* bawah */}

          <View style={styles.boxcol}>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Nama Produk: </Text>
              <TextInput
                style={styles.textin}
                placeholder={'ketik Nama produk'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Kategori Produk: </Text>
              <TextInput
                style={styles.textin}
                placeholder={'ketik Kategori produk'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Brand Produk: </Text>
              <TextInput
                style={styles.textin}
                placeholder={'ketik Brand produk'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Harga Produk: </Text>
              <TextInput
                style={styles.textin}
                placeholder={'ketik Harga produk (tanpa titik)'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Tipe Casing: </Text>
              <Picker style={styles.dropdown}>
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Tower" value="Tower" />
                <Picker.Item label="None" value="None" />
              </Picker>
            </View>
            <View style={styles.boxrow}>
              <View style={{flex: 1}} />
              <Button title={'Batalkan'} onPress={() => {}} />
              <View style={{flex: 1}} />
              <Button title={'Tambahkan'} onPress={() => {}} />
              <View style={{flex: 1}} />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default Userlistpage;
let styles = StyleSheet.create({
  container: {
    height: windowHeight - 140,
    backgroundColor: 'grey',
    width: '95%',
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  contentContainer: {
    padding: 20,

    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  boxrow: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    width: '95%',
    flexDirection: 'row',
    padding: 10,
    // borderBottomWidth:1
  },
  boxcol: {
    justifyContent: 'center',
    height: windowHeight - 320,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    width: '85%',
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  dropdown: {
    flex: 3,
    backgroundColor: 'silver',
    borderRadius: 5,
  },
  dropdownbody: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textin: {
    flex: 3,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
