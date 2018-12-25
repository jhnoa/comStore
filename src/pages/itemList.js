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
import FragmentItemList from '../general/coreUI/fragmentitemlist';
import Category from '../constant/catbarang';
import getClientListItem from '../general/helper/catalog/getClientListItem';
const windowSize = Dimensions.get('window').width;

type Props = {};
type State = {
  allData: Array<Object>,
  sortBy: string,
  category: string,
  brand: string,
};
class ProductPage extends React.Component<Props, State> {
  state = {
    sortBy: 0,
    selectedCategory: -1,
    selectedBrand: -1,
    listCategory: [],
    listBrand: [],
    allData: [],
    filteredData: [],
  };

  _arrayIncludeString = (arr, str) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (str.toLowerCase() === element.toLowerCase()) {
        return true;
      }
    }
    return false;
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
    });
  }
  //set listBrand if length === 0
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
    if (filteredData.length > 0) {
      state.filteredData = filteredData;
    }
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
    if (filteredData.length > 0) {
      state.filteredData = filteredData;
    }
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
    let result = this._sortData(filteredData, value, 'price');
    this.setState({filteredData: result, sortBy: value});
  };
  render() {
    console.log(this.state.selectedCategory, this.state.selectedBrand);
    console.log(this.state.listCategory);
    console.log(this.state.listBrand);
    // console.log(this.state.filteredData);
    return (
      <Layout title={'Catalog'}>
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
                flex: 1,
                width: windowSize * 0.85,
                borderWidth: 1,
              }}
            >
              {/* dropdown kiri start */}
              <View
                style={{
                  // flex: 2,
                  padding: 20,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  width: 300,
                  // height: Dimensions.get('window').height - 320,
                  // flex: 1,
                  // flexGrow: 1,
                  // flexShrink: 1,
                  // marginVertical: 40,
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
              </View>
              {/* dropdown kiri end */}
              {/* itemlist kanan start */}
              <ScrollView
                style={{
                  flex: 8,
                  padding: 20,
                  backgroundColor: 'beige',
                  // height: Dimensions.get('window').height - 320,
                  // flex: 1,
                  flexGrow: 1,
                  flexShrink: 0,
                  // marginVertical: 40,
                }}
              >
                {this.state.filteredData.map((element, index) => {
                  // console.log(element)
                  return <FragmentItemList item={element} key={element._id} />;
                })}
              </ScrollView>
              {/* itemlist kanan end */}
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default ProductPage;
let styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height - 90 - 40,
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
