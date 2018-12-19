// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Dimensions,
  Picker,
} from 'react-native';
import Layout from '../general/layouts/index';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Category from '../constant/catbarang';

const windowSize = Dimensions.get('window').width;

type Props = {};
type State = {
  sortBy: string,
  category: string,
  brand: string,
};
class ProductPage extends React.Component<Props, State> {
  state = {sortBy: '', category: '', brand: ''};
  render() {
    return (
      <Layout title={'Home'}>
        <Header isLogin={true} />
        <View style={{flex: 1, flexDirection: 'row', width: windowSize * 0.95}}>
          {/* dropdown kiri start */}
          <View
            style={{
              flex: 0.2,
              padding: 20,
              justifyContent: 'center',
              backgroundColor: 'white',
              height: '50%',
            }}
          >
            <View style={styles.dropdownbody}>
              <Text>Pilih Kategori Barang :</Text>
              <Picker
                selectedValue={this.state.category}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({category: itemValue})
                }
              >
                {Category.map((element) => (
                  <Picker.Item label={element} value={element} />
                ))}
              </Picker>
            </View>
            <View style={styles.dropdownbody}>
              <Text>Pilih Brand yang diinginkan :</Text>
              <Picker
                selectedValue={this.state.brand}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({brand: itemValue})
                }
              >
                <Picker.Item label="Asus" value="Bd1" />
                <Picker.Item label="Corsair" value="Bd2" />
              </Picker>
            </View>
            <View style={styles.dropdownbody}>
              <Text>Sortir Berdasarkan :</Text>
              <Picker
                selectedValue={this.state.sortBy}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sortBy: itemValue})
                }
              >
                <Picker.Item label="Lowest Price" value="lowprc" />
                <Picker.Item label="Highest Price" value="highprc" />
              </Picker>
            </View>
          </View>
          {/* dropdown kiri end */}
          {/* itemlist kanan start */}
          <View
            style={{
              flex: 0.8,
              padding: 20,
              justifyContent: 'center',
              backgroundColor: 'beige',
              height: '50%',
            }}
          >
            <Button title="itemlist 2 row" />
          </View>
          {/* itemlist kanan end */}
        </View>
        <Footer />
      </Layout>
    );
  }
}

export default ProductPage;
let styles = StyleSheet.create({
  dropdown: {
    flex: 1,
  },
  dropdownbody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});
