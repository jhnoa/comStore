// @flow

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Picker,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../../general/layouts/admin';
import isAuthenticated from '../../general/helper/auth/auth';
import {navigateTo} from 'gatsby-link';
import Capital from '../../general/helper/capitalize';
import formatCurrency from '../../general/helper/numberToCurrency';
import getClientListItem from '../../general/helper/catalog/getClientListItem';
const windowSize = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Item = {
  name: string,
  category: string,
  brand: string,
  price: number,
  picture: string,
};
type Props = {
  data: Array<Item>,
};

type State = {
  isLoggedIn: boolean,
};

let defaultData = [
  {
    _id: '5c1c6c55f95fe531b86eaa2c',
    removed: false,
    itemId: 140,
    name: 'Cougar QBX Gaming Mini ITX Case',
    casing: 'all (mid-tower & tower)',
    category: 'casing',
    brand: 'cougar',
    price: 671000,
    picture: 'Cougar QBX Gaming Mini ITX Case.png',
    createdAt: '2018-12-21T04:30:13.820Z',
    updatedAt: '2018-12-21T04:30:13.820Z',
    __v: 0,
  },
  {
    _id: '5c1c6c55f95fe531b86eaa2d',
    removed: false,
    itemId: 141,
    name: 'AMD Ryzen 5 1400',
    casing: 'all (mid-tower & tower)',
    category: 'proccesor',
    brand: 'amd',
    price: 2050000,
    picture: 'AMD Ryzen 5 1400.png',
    createdAt: '2018-12-21T04:30:13.826Z',
    updatedAt: '2018-12-21T04:30:13.826Z',
    __v: 0,
  },
];

class IndexPage extends React.Component<Props, State> {
  state = {
    isLoggedIn: false,
    data: this.props.data || defaultData,
    totalItem: {},
    totalPrice: 0,
  };
  async componentDidMount() {
    let dataFromAPI = await getClientListItem();
    let data = dataFromAPI;
    // let {data} = this.state;
    let total = 0;
    let item = {};
    for (let i = 0; i < data.length; i++) {
      const part = data[i];
      total += part.price;
      item[part.category] = (item[part.category] || 0) + 1;
    }
    this.setState({data, totalPrice: total, totalItem: item});
  }
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
            Items Catalog
          </Text>
          {/* bawah */}

          <View style={styles.boxcol}>
            {/* label */}
            <View
              style={{
                width: '93%',
                alignSelf: 'center',
                paddingTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{alignSelf: 'flex-start', fontSize: 25}}>
                Nama Barang
              </Text>
              <Text style={{alignSelf: 'flex-end', fontSize: 25}}>
                Harga Barang
              </Text>
            </View>
            {/* ilist */}
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={styles.contentContainer}
            >
              {data.map((element) => {
                let {category, brand, name, price} = element;
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      width: '100%',
                      borderWidth: 1,
                      borderRadius: 5,
                      padding: 10,
                    }}
                  >
                    <View style={{flexDirection: 'row', width: '70%'}}>
                      <Text>
                        {Capital(category)}: ({Capital(brand)}){' '}
                        {name.slice(0, 60)}
                        {name.length > 60 && '...'}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                      }}
                    >
                      <Text>{formatCurrency(price)}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {/* huehuehue */}
          <View
            style={{
              padding: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.2)',
              // width: '90%',
              marginBottom: 10,
            }}
          >
            <View style={styles.dropdownbody}>
              <Text>Pilih Kategori Barang :</Text>
              <Picker
                // selectedValue={this.state.selectedCategory}
                style={styles.dropdown}
                // onValueChange={this._categoryFilter}
              >
                <Picker.Item label={'All Category'} value={-1} />
                {/* {this.state.listCategory.map((element, index) => (
                  <Picker.Item label={element} value={index} key={index} />
                ))} */}
              </Picker>
            </View>
            <View style={styles.dropdownbody}>
              <Text>Pilih Brand yang diinginkan :</Text>
              <Picker
                // selectedValue={this.state.selectedBrand}
                style={styles.dropdown}
                // onValueChange={this._brandFilter}
              >
                <Picker.Item label="All Brand" value={-1} />
                {/* {this.state.listBrand.map((element, index) => (
                  <Picker.Item label={element} value={index} key={index} />
                ))} */}
              </Picker>
            </View>
            <View style={styles.dropdownbody}>
              <Text>Sortir Berdasarkan :</Text>
              <Picker
                selectedValue={this.state.sortBy}
                style={styles.dropdown}
                onValueChange={this._sortBy}
              >
                <Picker.Item label="No Sort" value={0} />
                <Picker.Item label="Lowest Price" value={-1} />
                <Picker.Item label="Highest Price" value={1} />
              </Picker>
            </View>
          </View>
        </View>
      </Layout>
    );
  }

  _simulate = () => {
    if (!this.state.isLoggedIn) {
      window.alert('Please Login To Continue!');
    } else {
      //navigate to simulate Option
      navigateTo('simulateOptions');
    }
  };
}

export default IndexPage;
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
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    padding: 10,
  },
  boxcol: {
    height: windowHeight - 300,
    flexDirection: 'column',
    alignItems: 'baseline',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  dropdown: {
    flex: 1,
  },
  dropdownbody: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
