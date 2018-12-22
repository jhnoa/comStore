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
import fontSize from '../constant/fontsize';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Capital from '../general/helper/capitalize';
import formatCurrency from '../general/helper/numberToCurrency';

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

class simchoiceresult extends React.Component<Props, State> {
  state = {
    data: this.props.data || defaultData,
    totalItem: {},
    totalPrice: 0,
  };
  componentDidMount() {
    let {data} = this.state;
    let total = 0;
    let item = {};
    for (let i = 0; i < data.length; i++) {
      const part = data[i];
      total += part.price;
      item[part.category] = (item[part.category] || 0) + 1;
    }
    this.setState({totalPrice: total, totalItem: item});
  }
  render() {
    let {data} = this.state;
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
            <Text style={{fontSize: 30, marginBottom: 20}}>
              Hasil Rekomendasi Berdasarkan Harga
            </Text>
            {/* bawah */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 550,
                flexDirection: 'row',
                padding: 10,
              }}
            >
              {/* image */}
              <View style={styles.boxrow}>
                <View style={styles.boxcol}>
                  {/* label */}
                  <Text style={styles.textin}>Informasi Barang</Text>
                  {/* ilist */}
                  <ScrollView
                    style={{width: 535}}
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
                          }}
                        >
                          <View style={{flexDirection: 'row', width: '70%'}}>
                            <Text>
                              {Capital(category)}: ({Capital(brand)}){' '}
                              {Capital(name)}
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
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'baseline',
                    padding: 5,
                    marginHorizontal: 10,
                    width: 355,
                    marginBottom: 10,
                    backgroundColor: 'rgba(255,255,255, 0.8)',
                  }}
                >
                  <Text>
                    Jumlah Item:{'\n'}
                    {Object.keys(this.state.totalItem).map((label) => {
                      return (
                        Capital(label) +
                        ': ' +
                        this.state.totalItem[label] +
                        '\n'
                      );
                    })}
                  </Text>
                  <Text syle={{fontSize: 20, fontWeight: '900'}}>
                    <b>Total Harga: {formatCurrency(this.state.totalPrice)}</b>
                  </Text>
                </View>
              </View>
              {/* descbar */}
              {/* EoBar */}
            </View>
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
                onPress={() => {}}
              />
              <Button
                style={{paddingRight: 20, alignSelf: 'flex-end'}}
                title="Menuju Simulasi Manual"
                onPress={() => {}}
              />
              <Button
                style={{paddingRight: 20, alignSelf: 'flex-end'}}
                title="Checkout"
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default simchoiceresult;
let styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 100,
    height: Dimensions.get('window').height - 240,
    padding: 40,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: 1000,
    height: Dimensions.get('window').height - 420,
    alignItems: 'center',
    marginHorizontal: 20,
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
  boxcol: {
    height: Dimensions.get('window').height - 480,
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
    justifyContent: 'space-between',
  },
});
