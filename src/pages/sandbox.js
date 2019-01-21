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
} from 'react-native';
import Layout from '../general/layouts/index';
import Capital from '../general/helper/capitalize';
import formatCurrency from '../general/helper/numberToCurrency';
import {navigateTo} from 'gatsby-link';
import getSimulation from '../general/helper/simulation/getSimulation';
const windowSize = Dimensions.get('window').width;

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
type State = {};

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
  {
    _id: '5c1c6c55f95fe531b86eaa2e',
    removed: false,
    itemId: 142,
    name: 'ASRock AB350M',
    casing: 'all (mid-tower & tower)',
    category: 'motherboard',
    brand: 'asrock',
    price: 2069000,
    picture: 'ASRock AB350M.png',
    createdAt: '2018-12-21T04:30:13.831Z',
    updatedAt: '2018-12-21T04:30:13.831Z',
    __v: 0,
  },
  {
    _id: '5c1c6c55f95fe531b86eaa2f',
    removed: false,
    itemId: 143,
    name: 'Patriot Signature Line Kit Series 8GB (2 x 4GB) DDR4-2666',
    casing: 'all (mid-tower & tower)',
    category: 'RAM',
    brand: 'patriot',
    price: 776000,
    picture: 'Patriot Signature Line Kit Series 8GB (2 x 4GB) DDR4-2666.png',
    createdAt: '2018-12-21T04:30:13.837Z',
    updatedAt: '2018-12-21T04:30:13.837Z',
    __v: 0,
  },
  {
    _id: '5c1c6c55f95fe531b86eaa30',
    removed: false,
    itemId: 144,
    name: 'Zotac GeForce GTX 1050 2GB DDR5',
    casing: 'all (mid-tower & tower)',
    category: 'VGA',
    brand: 'zotac',
    price: 1880000,
    picture: 'Zotac GeForce GTX 1050 2GB DDR5.png',
    createdAt: '2018-12-21T04:30:13.842Z',
    updatedAt: '2018-12-21T04:30:13.842Z',
    __v: 0,
  },
  {
    _id: '5c1c6c55f95fe531b86eaa31',
    removed: false,
    itemId: 145,
    name: 'Antec VP Series 500W',
    casing: 'all (mid-tower & tower)',
    category: 'PSU',
    brand: 'antec',
    price: 590000,
    picture: 'Antec VP Series 500W.png',
    createdAt: '2018-12-21T04:30:13.847Z',
    updatedAt: '2018-12-21T04:30:13.847Z',
    __v: 0,
  },
  {
    _id: '5c1c6c55f95fe531b86eaa32',
    removed: false,
    itemId: 146,
    name: 'Patriot Burst 240GB',
    casing: 'all (mid-tower & tower)',
    category: 'hard disk',
    brand: 'patriot',
    price: 813000,
    picture: 'Patriot Burst 240GB.png',
    createdAt: '2018-12-21T04:30:13.853Z',
    updatedAt: '2018-12-21T04:30:13.853Z',
    __v: 0,
  },
];

let classification = [
  {
    category: 'RAM',
    to: 'RAM,VGA & PSU',
    index: 3,
  },
  {
    category: 'VGA',
    to: 'RAM,VGA & PSU',
    index: 3,
  },
  {
    category: 'PSU',
    to: 'RAM,VGA & PSU',
    index: 3,
  },
  {
    category: 'casing',
    to: 'Casing',
    index: 0,
  },
  {
    category: 'motherboard',
    to: 'Motherboard',
    index: 1,
  },
  {
    category: 'proccesor',
    to: 'Proccesor',
    index: 2,
  },
  {
    category: 'hard disk',
    to: 'Hard Drive',
    index: 4,
  },
];

class shoppingcart extends React.Component<Props, State> {
  state = {
    data: this.props.data || defaultData,
    item: [],
    // totalItem: {
    //   'RAM,VGA & PSU': [],
    //   Casing: [],
    //   Motherboard: [],
    //   Processor: [],
    //   'Hard Drive': [],
    // },
    // totalPrice: {
    //   'RAM,VGA & PSU': 0,
    //   Casing: 0,
    //   Motherboard: 0,
    //   Processor: 0,
    //   'Hard Drive': 0,
    // },
  };
  async componentDidMount() {
    let dataFromAPI = await getSimulation();
    let data = dataFromAPI.parts;
    // let data = defaultData;
    // let {data} = this.state;
    type Items = {
      parts: Array<string>,
      total: number,
      title: string,
    };
    type ArrayItems = Array<Items>;
    let item: ArrayItems = [];
    for (let i = 0; i < data.length; i++) {
      const part = data[i];
      // total += part.price;
      // item[part.category] = (item[part.category] || 0) + 1;
      // if (part.category.toUpperCase() === 'VGA') {
      //   item['RAM,VGA & PSU'].push(part);
      // }
      for (let c of classification) {
        if (part.category.toLowerCase() === c.category.toLowerCase()) {
          let title = (item[c.index] && item[c.index].title) || c.to;
          let parts = (item[c.index] && item[c.index].parts) || [];
          let total = (item[c.index] && item[c.index].total) || 0;
          item[c.index] = {
            parts: [...parts, part],
            total: total + part.price,
            title,
          };
        }
      }
    }
    console.log('lift', item);
    console.log('data', data);
    this.setState({data, item});
  }
  render() {
    let {item} = this.state;
    console.log(this.state);
    return (
      <Layout title={'Hasil Rekomendasi'}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height - 90,
          }}
        >
          <View style={styles.container}>
            {/* atas */}
            <Text style={{fontSize: 30, marginBottom: 20}}>Shopping Cart</Text>
            {/* bawah */}
            <View style={{flexDirection: 'column'}}>
              <View style={styles.boxrow}>
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>Casing</Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>Motherboard</Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>Processor</Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>RAM, VGA, & PSU</Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>Hard Drive</Text>
                </View>
              </View>
              {/* Header of items ends here */}
              <View style={styles.boxrow}>
                <View style={styles.encapsulator}>
                  <ScrollView style={{height: '20vw'}}>
                    {item[0] &&
                      item[0].parts &&
                      item[0].parts.map((element, index) => {
                        let {brand, name} = element;
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}
                          >
                            <Text style={{fontSize: 20}}>
                              ({Capital(brand)}) {Capital(name)}
                            </Text>
                          </View>
                        );
                      })}
                  </ScrollView>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <ScrollView style={{height: '20vw'}}>
                    {item[1] &&
                      item[1].parts &&
                      item[1].parts.map((element, index) => {
                        let {brand, name} = element;
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}
                          >
                            <Text style={{fontSize: 20}}>
                              ({Capital(brand)}) {Capital(name)}
                            </Text>
                          </View>
                        );
                      })}
                  </ScrollView>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <ScrollView style={{height: '20vw'}}>
                    {item[2] &&
                      item[2].parts &&
                      item[2].parts.map((element, index) => {
                        let {brand, name} = element;
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}
                          >
                            <Text style={{fontSize: 20}}>
                              ({Capital(brand)}) {Capital(name)}
                            </Text>
                          </View>
                        );
                      })}
                  </ScrollView>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <ScrollView style={{height: '20vw'}}>
                    {item[3] &&
                      item[3].parts &&
                      item[3].parts.map((element, index) => {
                        let {brand, name} = element;
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}
                          >
                            <Text style={{fontSize: 20}}>
                              ({Capital(brand)}) {Capital(name)}
                            </Text>
                          </View>
                        );
                      })}
                  </ScrollView>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <ScrollView style={{height: '20vw'}}>
                    {item[4] &&
                      item[4].parts &&
                      item[4].parts.map((element, index) => {
                        let {brand, name} = element;
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              width: '100%',
                            }}
                          >
                            <Text style={{fontSize: 20}}>
                              ({Capital(brand)}) {Capital(name)}
                            </Text>
                          </View>
                        );
                      })}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.boxrow}>
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>
                    {formatCurrency(item[0] && item[0].total)}
                  </Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>
                    {formatCurrency(item[1] && item[1].total)}
                  </Text>
                </View>

                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>
                    {formatCurrency(item[2] && item[2].total)}
                  </Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>
                    {formatCurrency(item[3] && item[3].total)}
                  </Text>
                </View>
                <View style={{flex: 1}} />
                <View style={styles.encapsulator}>
                  <Text style={{fontSize: 20}}>
                    {formatCurrency(item[4] && item[4].total)}
                  </Text>
                </View>
              </View>
            </View>
            {/* descbar */}
            {/* EoBar */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 555,
              }}
            >
              <Button
                style={{paddingRight: 20, alignSelf: 'flex-end'}}
                title="Kembali"
                onPress={() => {
                  window.history.back();
                }}
              />

              <Button
                style={{paddingRight: 20, alignSelf: 'flex-end'}}
                title="Checkout"
                onPress={() => {
                  navigateTo('jasakirim');
                }}
              />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default shoppingcart;
let styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 100,
    height: Dimensions.get('window').height - 100,
    padding: 40,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  encapsulator: {
    backgroundColor: 'white',
    width: '15%',
    alignItems: 'center',
    padding: 5,
    flexWrap: 'wrap',
    borderRadius: 5,
  },
  boxrow: {
    padding: 20,
    marginVertical: 25,
    backgroundColor: 'rgb(200,200,200)',
    width: '100%',
    flexDirection: 'row',
  },
  btn: {marginBottom: 5},
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
    marginHorizontal: 10,
    width: 355,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  boxrowv3: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  boxcolv2: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: '95%',
    height: '100%',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  boxcol: {
    height: '80%',
    flexDirection: 'column',
    alignItems: 'baseline',
    padding: 5,
    marginHorizontal: 10,
    width: 555,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  textin: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
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
  contentContainer: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
