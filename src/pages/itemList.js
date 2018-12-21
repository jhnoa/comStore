// @flow

import React from 'react';
import {
  View,
  Text,
  ScrollView,
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
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height - 90,
          }}
        >
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                width: windowSize * 0.85,
                borderWidth: 1,
              }}
            >
              {/* dropdown kiri start */}
              <View
                style={{
                  flex: 0.2,
                  padding: 20,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  height: Dimensions.get('window').height - 320,
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
              <ScrollView
                style={{
                  flex: 0.8,
                  padding: 20,
                  backgroundColor: 'beige',
                  height: Dimensions.get('window').height - 320,
                }}
              >
                <Button title="itemlist 2 row" />
              </ScrollView>
              {/* itemlist kanan end */}
            </View>
          </View>
        </View>
        <Footer />
      </Layout>
    );
  }
}

export default ProductPage;
let styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 100,
    height: Dimensions.get('window').height - 240,
    padding: 40,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    flex: 1,
  },
  dropdownbody: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});
