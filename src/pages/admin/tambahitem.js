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
import createNewItem from '../../general/helper/catalog/createNewItem';
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
    name: '',
    category: '',
    brand: '',
    price: 0,
    casing: 'none',
  };
  render() {
    console.log(this.state);
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
                value={this.state.name}
                onChangeText={(name) => {
                  this.setState({name});
                }}
                style={styles.textin}
                placeholder={'ketik Nama produk'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Kategori Produk: </Text>
              <TextInput
                value={this.state.category}
                onChangeText={(category) => {
                  this.setState({category});
                }}
                style={styles.textin}
                placeholder={'ketik Kategori produk'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Brand Produk: </Text>
              <TextInput
                value={this.state.brand}
                onChangeText={(brand) => {
                  this.setState({brand});
                }}
                style={styles.textin}
                placeholder={'ketik Brand produk'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Harga Produk: </Text>
              <TextInput
                value={this.state.price}
                onChangeText={(price) => {
                  this.setState({price: parseInt(price, 10)});
                }}
                style={styles.textin}
                placeholder={'ketik Harga produk (hanya angka)'}
              />
            </View>
            <View style={styles.boxrow}>
              <Text style={{flex: 1}}>Tipe Casing: </Text>
              <Picker
                style={styles.dropdown}
                selectedValue={this.state.casing}
                onValueChange={(casing) => {
                  this.setState({casing});
                }}
              >
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Tower" value="tower" />
                <Picker.Item label="None" value="none" />
              </Picker>
            </View>
            <View style={styles.boxrow}>
              <View style={{flex: 1}} />
              <Button
                title={'Batalkan'}
                onPress={() => {
                  window.history.back();
                }}
              />
              <View style={{flex: 1}} />
              <Button
                title={'Tambahkan'}
                onPress={async () => {
                  console.log(this.state);
                  let {name, brand, price, category, casing} = this.state;
                  await createNewItem({
                    name,
                    brand,
                    price,
                    category,
                    casing,
                  });
                  navigateTo('/admin/');
                }}
              />
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
