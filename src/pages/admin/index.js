// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
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
    searchBy: '',
    sortBy: 0,
    selectedCategory: -1,
    selectedBrand: -1,
    listCategory: [],
    listBrand: [],
    allData: [],
    filteredData: [],
    searchFilteredData: [],
  };
  async componentDidMount() {
    let allData = await getClientListItem();
    let listCategory = [];
    let listBrand = [];
    let includes = this._arrayIncludeString;

    for (let index = 0; index < allData.length; index++) {
      const element = allData[index];
      if (!includes(listCategory, element.category)) {
        listCategory.push(element.category);
      }
      if (!includes(listBrand, element.brand)) {
        listBrand.push(element.brand);
      }
    }
    this.setState({
      allData,
      listCategory,
      listBrand,
      filteredData: allData,
      searchFilteredData: allData,
    });
  }
  _arrayIncludeString = (arr, str) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (str.toLowerCase() === element.toLowerCase()) {
        return true;
      }
    }
    return false;
  };
  _categoryFilter = (index) => {
    index = parseInt(index, 10);
    let {allData, selectedBrand, listCategory, listBrand} = this.state;
    let filteredData = [];
    let listBrandFiltered = [];
    let listCategoryFiltered = [];
    let includes = this._arrayIncludeString;
    let selectedBrandAfter = -1;
    let filteredByCategoryAndBrand = false;
    if (index === -1 && selectedBrand === -1) {
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];

        filteredData.push(element);
        if (!includes(listBrandFiltered, element.brand)) {
          listBrandFiltered.push(element.brand);
        }
        if (!includes(listCategoryFiltered, element.category)) {
          listCategoryFiltered.push(element.category);
        }
      }
    } else if (index !== -1 && selectedBrand === -1) {
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (
          element.category.toLowerCase() === listCategory[index].toLowerCase()
        ) {
          filteredData.push(element);
          if (!includes(listBrandFiltered, element.brand)) {
            listBrandFiltered.push(element.brand);
          }
        }
        if (!includes(listCategoryFiltered, element.category)) {
          listCategoryFiltered.push(element.category);
        }
      }
    } else if (index === -1 && selectedBrand !== -1) {
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (
          element.brand.toLowerCase() === listBrand[selectedBrand].toLowerCase()
        ) {
          filteredData.push(element);
          if (!includes(listCategoryFiltered, element.category)) {
            listCategoryFiltered.push(element.category);
          }
        }
        if (!includes(listBrandFiltered, element.brand)) {
          if (
            element.brand.toLowerCase() ===
            listBrand[selectedBrand].toLowerCase()
          ) {
            selectedBrandAfter = listBrandFiltered.length;
          }
          listBrandFiltered.push(element.brand);
        }
      }
    } else if (index !== -1 && selectedBrand !== -1) {
      filteredByCategoryAndBrand = true;
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (
          element.brand.toLowerCase() ===
            listBrand[selectedBrand].toLowerCase() &&
          element.category.toLowerCase() === listCategory[index].toLowerCase()
        ) {
          filteredData.push(element);
          if (!includes(listBrandFiltered, element.brand)) {
            listBrandFiltered.push(element.brand);
          }
          if (!includes(listCategoryFiltered, element.category)) {
            listCategoryFiltered.push(element.category);
          }
        }
      }
    }
    let state = {selectedCategory: index};
    filteredData = this._sortData(filteredData, this.state.sortBy, 'price');
    let searchFilteredData = this._searchData(
      filteredData,
      this.state.searchBy,
      'name',
    );
    state.filteredData = filteredData;
    state.searchFilteredData = searchFilteredData;
    if (listBrandFiltered.length > 0) {
      state.listBrand = listBrandFiltered;
    }
    if (listCategoryFiltered.length > 0) {
      state.listCategory = listCategoryFiltered;
    }
    if (filteredByCategoryAndBrand === true) {
      state.selectedCategory = 0;
      state.selectedBrand = 0;
    }
    if (selectedBrandAfter >= 0) {
      state.selectedBrand = selectedBrandAfter;
    }
    this.setState(state);
  };

  _brandFilter = (index) => {
    index = parseInt(index, 10);
    let {allData, selectedCategory, listBrand, listCategory} = this.state;
    let filteredData = [];
    let listCategoryFiltered = [];
    let listBrandFiltered = [];
    let includes = this._arrayIncludeString;
    let filteredByCategoryAndBrand = false;
    let selectedCategoryAfter = -1;
    if (index === -1 && selectedCategory === -1) {
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];

        filteredData.push(element);
        if (!includes(listBrandFiltered, element.brand)) {
          listBrandFiltered.push(element.brand);
        }
        if (!includes(listCategoryFiltered, element.category)) {
          listCategoryFiltered.push(element.category);
        }
      }
    } else if (index !== -1 && selectedCategory === -1) {
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (element.brand.toLowerCase() === listBrand[index].toLowerCase()) {
          filteredData.push(element);
          if (!includes(listCategoryFiltered, element.category)) {
            listCategoryFiltered.push(element.category);
          }
        }
        if (!includes(listBrandFiltered, element.brand)) {
          listBrandFiltered.push(element.brand);
        }
      }
    } else if (index === -1 && selectedCategory !== -1) {
      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (
          element.category.toLowerCase() ===
          listCategory[selectedCategory].toLowerCase()
        ) {
          filteredData.push(element);
          if (!includes(listBrandFiltered, element.brand)) {
            listBrandFiltered.push(element.brand);
          }
        }
        if (!includes(listCategoryFiltered, element.category)) {
          if (
            element.category.toLowerCase() ===
            listCategory[selectedCategory].toLowerCase()
          ) {
            selectedCategoryAfter = listCategoryFiltered.length;
          }
          listCategoryFiltered.push(element.category);
        }
      }
    } else if (index !== -1 && selectedCategory !== -1) {
      filteredByCategoryAndBrand = true;

      for (let i = 0; i < allData.length; i++) {
        const element = allData[i];
        if (
          element.category.toLowerCase() ===
            listCategory[selectedCategory].toLowerCase() &&
          element.brand.toLowerCase() === listBrand[index].toLowerCase()
        ) {
          filteredData.push(element);
          if (!includes(listBrandFiltered, element.brand)) {
            listBrandFiltered.push(element.brand);
          }
          if (!includes(listCategoryFiltered, element.category)) {
            listCategoryFiltered.push(element.category);
          }
        }
      }
    }
    let state = {selectedBrand: index};
    filteredData = this._sortData(filteredData, this.state.sortBy, 'price');
    let searchFilteredData = this._searchData(
      filteredData,
      this.state.searchBy,
      'name',
    );
    state.filteredData = filteredData;
    state.searchFilteredData = searchFilteredData;
    if (listCategoryFiltered.length > 0) {
      state.listCategory = listCategoryFiltered;
    }
    if (listBrandFiltered.length > 0) {
      state.listBrand = listBrandFiltered;
    }
    if (filteredByCategoryAndBrand === true) {
      state.selectedCategory = 0;
      state.selectedBrand = 0;
    }
    if (selectedCategoryAfter >= 0) {
      state.selectedCategory = selectedCategoryAfter;
    }
    this.setState(state);
  };

  _sortData = (arrayData, sortValue = 1, field) => {
    let _sort = (a, b) => {
      let data1 = field !== undefined ? a[field] : a;
      let data2 = field !== undefined ? b[field] : b;
      sortValue = parseInt(sortValue, 10);
      if (data1 > data2) {
        return -1 * sortValue;
      } else if (data1 < data2) {
        return sortValue;
      } else {
        return 0;
      }
    };
    let result = arrayData.sort(_sort);
    return result;
  };

  _sortBy = (value) => {
    let {filteredData} = this.state;
    filteredData = this._sortData(filteredData, value, 'price');
    let searchFilteredData = this._searchData(
      filteredData,
      this.state.searchBy,
      'name',
    );
    this.setState({filteredData, sortBy: value, searchFilteredData});
  };

  _searchData = (arrayData, searchValue = '', field) => {
    let result = [];
    for (let index = 0; index < arrayData.length; index++) {
      const element = arrayData[index];
      if (searchValue) {
        if (element[field].includes(searchValue)) {
          result.push(element);
        }
      } else {
        result.push(element);
      }
    }
    return result;
  };
  _searchBy = (value) => {
    let {filteredData} = this.state;
    let result = this._searchData(filteredData, value, 'name');
    this.setState({searchFilteredData: result, searchBy: value});
  };
  render() {
    console.log(this.state);
    console.log('searchValue= ', this.state.searchFilteredData);
    let {searchFilteredData} = this.state;
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
                width: '100%',
                alignItems: 'flex-start',
                paddingTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{flexDirection: 'row', width: '85%', paddingLeft: 10}}
              >
                <View style={{flex: 2}}>
                  <Text style={{fontSize: 20}}>{Capital('category')}</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{fontSize: 20}}>{Capital('brand')}</Text>
                </View>
                <View
                  style={{
                    flex: 7,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    Nama Barang
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 20,
                }}
              >
                <Text style={{fontSize: 20, alignSelf: 'center'}}>
                  Harga Barang
                </Text>
              </View>
            </View>
            {/* ilist */}
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={styles.contentContainer}
            >
              {searchFilteredData.map((element, index) => {
                let {category, brand, name, price} = element;
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      width: '100%',
                      // borderWidth: 1,
                      // borderRadius: 5,
                      paddingHorizontal: 10,
                    }}
                  >
                    <View style={{flexDirection: 'row', width: '85%'}}>
                      <View style={{flex: 2}}>
                        <Text>{Capital(category)}</Text>
                      </View>
                      <View
                        style={{
                          flex: 2,
                          borderLeftWidth: 1,
                          alignItems: 'center',
                        }}
                      >
                        <Text>{Capital(brand)}</Text>
                      </View>
                      <View
                        style={{
                          flex: 7,
                          borderLeftWidth: 1,
                          borderRightWidth: 1,
                          paddingHorizontal: 10,
                        }}
                      >
                        <Text>
                          {name.slice(0, 60)}
                          {name.length > 60 && '...'}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                      }}
                    >
                      <Text style={{alignSelf: 'flex-start'}}>
                        {formatCurrency(price)}
                      </Text>
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
                selectedValue={this.state.selectedCategory}
                style={styles.dropdown}
                onValueChange={this._categoryFilter}
              >
                <Picker.Item label={'All Category'} value={-1} />
                {this.state.listCategory.map((element, index) => (
                  <Picker.Item label={element} value={index} key={index} />
                ))}
              </Picker>
            </View>
            <View style={styles.dropdownbody}>
              <Text>Pilih Brand yang diinginkan :</Text>
              <Picker
                selectedValue={this.state.selectedBrand}
                style={styles.dropdown}
                onValueChange={this._brandFilter}
              >
                <Picker.Item label="All Brand" value={-1} />
                {this.state.listBrand.map((element, index) => (
                  <Picker.Item label={element} value={index} key={index} />
                ))}
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
            <View style={styles.dropdownbody}>
              <Text>Cari Produk</Text>
              <TextInput
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: 40,
                  width: '100%',
                  borderColor: 'black',
                  borderWidth: 2,
                }}
                placeholder="Apa yang ingin anda Cari?"
                placeholderTextColor="white"
                value={this.state.searchBy}
                onChangeText={this._searchBy}
              />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
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
    paddingTop: 0,
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
