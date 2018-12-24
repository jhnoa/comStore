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
import FragmentItemList from '../general/coreUI/fragmentitemlist';
import Auth from '../general/helper/authMiddleware';
import getClientListItem from '../general/helper/catalog/getClientListItem';
import getSimulation from '../general/helper/simulation/getSimulation';
import addParts from '../general/helper/simulation/addParts';
import clearAllParts from '../general/helper/simulation/clearAllParts';
import {navigateTo} from 'gatsby-link';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Props = {};
type State = {};

class simChoice extends React.Component<Props, State> {
  state = {
    simulationPartsData: [],
    dataFromAPI: [],
    casingType: '',
    dataForCasing: {},
    categoryList: [],
    brandList: [],
    nameList: [],
    selectedCategory: -1,
    selectedBrand: -1,
    selectedName: -1,
    selectedNameData: [],
    selectedBrandData: [],
    allPartsData: [],
    selectedItemId: -1,
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
    let Simulation = await getSimulation();
    let APIData = await getClientListItem();
    let includes = this._arrayIncludeString;
    //APIData.sort(this._casingSort);
    let casingType = Simulation.parts[0].casing;
    if (!casingType) {
      navigateTo('simManual');
    }
    let dataForCasing = {all: [], tower: [], none: []};
    let categoryForCasing = {all: [], tower: [], none: []};
    for (let index = 0; index < APIData.length; index++) {
      const part = APIData[index];
      if (part.casing.startsWith('all')) {
        dataForCasing.all.push(part);
        if (!includes(categoryForCasing.all, part.category)) {
          categoryForCasing.all.push(part.category);
        }
      } else if (part.casing.startsWith('tower')) {
        dataForCasing.tower.push(part);
        if (!includes(categoryForCasing.tower, part.category)) {
          categoryForCasing.tower.push(part.category);
        }
      } else {
        dataForCasing.none.push(part);
        if (!includes(categoryForCasing.none, part.category)) {
          categoryForCasing.none.push(part.category);
        }
      }
    }
    dataForCasing.all.sort();
    dataForCasing.tower.sort();
    dataForCasing.none.sort();
    categoryForCasing.all.sort();
    categoryForCasing.tower.sort();
    let categoryList = [];
    let selectedData = [];

    if (casingType.startsWith('tower')) {
      let keys = ['all', 'tower', 'none'];
      for (let index = 0; index < keys.length; index++) {
        const arr = categoryForCasing[keys[index]];
        selectedData.push(...dataForCasing[keys[index]]);
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          if (!includes(categoryList, element)) {
            categoryList.push(element);
          }
        }
      }
    } else if (casingType.startsWith('all')) {
      let keys = ['all', 'none'];
      for (let index = 0; index < keys.length; index++) {
        const arr = categoryForCasing[keys[index]];
        selectedData.push(...dataForCasing[keys[index]]);

        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          if (!includes(categoryList, element)) {
            categoryList.push(element);
          }
        }
      }
    }
    console.log(categoryList);
    console.log(selectedData);

    // if (casingType.startsWith('all')) {
    //   for (let index = 0; index < APIData.length; index++) {
    //     const part = APIData[index];
    //     if (part.casing.startsWith('all') || part.casing.startsWith('-')) {
    //       dataForCasing.push(part);
    //       if (!categoryList.includes(part.category)) {
    //         categoryList.push(part.category);
    //       }
    //     } else {
    //       dataForCasing.push(part);
    //       if (!categoryList.includes(part.category)) {
    //         categoryList.push(part.category);
    //       }
    //     }
    //   }
    // }
    this.setState({
      simulationPartsData: Simulation.parts,
      dataForCasing,
      categoryList,
      casingType,
      allPartsData: selectedData,
      selectedItemId: -1,
    });
  }

  _renderBrand = (value) => {
    let includes = this._arrayIncludeString;
    let brands = [];
    let selectedBrandData = [];
    if (parseInt(value, 10) !== -1) {
      let {categoryList, allPartsData} = this.state;
      let category = categoryList[value];

      for (let j = 0; j < allPartsData.length; j++) {
        const part = allPartsData[j];

        if (part.category.toLowerCase() === category.toLowerCase()) {
          if (!includes(brands, part.brand)) {
            brands.push(part.brand);
          }
          selectedBrandData.push(part);
        }
      }
    }
    this.setState({
      selectedCategory: value,
      selectedBrand: -1,
      selectedName: -1,
      brandList: brands || [],
      nameList: [],
      selectedBrandData,
      selectedItemId: -1,
    });
  };

  _renderName = (value) => {
    let includes = this._arrayIncludeString;
    let {selectedBrandData, brandList} = this.state;
    let brand = brandList[value];
    console.log(brand);
    let nameList = [];
    let selectedNameData = [];
    if (parseInt(value, 10) !== -1) {
      for (let index = 0; index < selectedBrandData.length; index++) {
        const part = selectedBrandData[index];
        if (part.brand.toLowerCase() === brand.toLowerCase()) {
          if (!includes(nameList, part.name)) {
            nameList.push(part.name);
          }
          selectedNameData.push(part);
          console.log(selectedNameData);
          console.log(nameList);
          console.log(part);
        }
      }
    }
    this.setState({
      selectedBrand: value,
      selectedName: -1,
      nameList,
      selectedNameData,
      selectedItemId: -1,
    });
  };

  _patchSimulationParts = async () => {
    let {selectedItemId: itemId} = this.state;
    if (parseInt(itemId, 10) !== -1) {
      let simulationPartsData = await addParts({itemId, jumlah: 1});

      this.setState({simulationPartsData: simulationPartsData.parts});
    }
  };

  _clearAll = async () => {
    let [casing] = this.state.simulationPartsData;
    await clearAllParts();
    let simulationPartsData = await addParts({itemId: casing.itemId, jumlah: 1});

    this.setState({simulationPartsData: simulationPartsData.parts});
  };

  render() {
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
                selectedValue={this.state.selectedCategory}
                style={styles.dropdown}
                enabled={this.state.categoryList.length > 0}
                onValueChange={
                  this._renderBrand
                  // (itemValue, itemIndex) =>
                  // this.setState({kurir: itemValue})
                }
              >
                <Picker.Item label="Pilih Kategori" value={-1} />
                {this.state.categoryList.map((category, index) => (
                  <Picker.Item label={category} value={index} />
                ))}

                {/* <Picker.Item label="TIKI" value="TIKI" /> */}
              </Picker>
              <Picker
                selectedValue={this.state.selectedBrand}
                style={styles.dropdown}
                enabled={this.state.brandList.length > 0}
                onValueChange={this._renderName}
              >
                <Picker.Item label="Pilih Brand" value={-1} />
                {this.state.brandList.map((brand, index) => (
                  <Picker.Item label={brand} value={index} />
                ))}
              </Picker>
              <Picker
                selectedValue={this.state.selectedName}
                style={styles.dropdown}
                enabled={this.state.nameList.length > 0}
                onValueChange={(value) =>
                  this.setState({
                    selectedName: value,
                    selectedItemId: this.state.selectedNameData[value].itemId,
                  })
                }
              >
                <Picker.Item label="Pilih Nama Barang" value={-1} />
                {this.state.nameList.map((name, index) => (
                  <Picker.Item label={name} value={index} />
                ))}
              </Picker>
              <Button
                style={{alignSelf: 'center'}}
                title={'pilih'}
                onPress={this._patchSimulationParts}
              />
            </View>
            {/* picker atas ends here */}
            {/* box bawah untuk simulate */}
            <View style={styles.boxrowv4}>
              <View style={styles.boxrow}>
                {this.state.simulationPartsData.map((element, index, array) => {
                  console.log(array);
                  return (
                    <FragmentItemList item={{...element}} key={element._id} />
                  );
                })}

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
                    onPress={this._clearAll}
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

export default Auth(simChoice);
let styles = StyleSheet.create({
  container: {
    width: windowWidth - 100,
    height: windowHeight - 90,
    padding: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'column',
    borderRadius: 5,
    padding: 5,
    width: '60%',
    height: windowHeight - 90 - 60 - 60,
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
    // height: 400,
    flexGrow: 1,
    flex: 1,
    flexShrink: 0,
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
    height: windowHeight - 90 - 60 - 60,
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
    width: '30%',
    margin: 10,
  },
});
