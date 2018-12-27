// @flow

import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import formatCurrency from '../helper/numberToCurrency';
import deleteItem from '../helper/catalog/deleteItem';

type Props = {
  name: string,
  category: string,
  brand: string,
  price: number,
  itemId: string,
  closeFunction: Function,
};
type State = {};

class admindescfrag extends React.Component<Props, State> {
  render() {
    let {
      name,
      brand,
      category,
      price,
      itemId,
      closeFunction,
      // picture = 'AMD Ryzen 5 2600.png',
    } = this.props;
    return (
      <View style={styles.container}>
        {/* atas */}
        <Text style={{fontSize: 25}}>{name}</Text>
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
          {/* <View style={styles.boxrow}>
            <Image
              resizeMode="contain"
              style={{height: 150, width: 150, alignSelf: 'center'}}
              source={require(`../../assets/picture/catalog/${picture}`)}
            /> */}
          {/* </View> */}
          {/* descbar */}
          <View style={styles.boxcol}>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemLabel}>Nama Product:</Text>
              <Text style={styles.itemDesc}>{name}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 23,
                }}
              >
                Jenis Product:
              </Text>
              <Text style={styles.itemDesc}>{category}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemLabel}>Brand Product:</Text>
              <Text style={styles.itemDesc}>{brand}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemLabel}>Harga Product:</Text>
              <Text style={styles.itemDesc}>{formatCurrency(price)}</Text>
            </View>
          </View>
          {/* EoBar */}
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            title={'Hapus'}
            onPress={async () => {
              await deleteItem({itemId});
              closeFunction();
            }}
          />
        </View>
      </View>
    );
  }
}

export default admindescfrag;
let styles = StyleSheet.create({
  container: {
    width: 600,
    padding: 20,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    height: 200,
    alignItems: 'center',
    marginRight: 20,
  },
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  boxcol: {
    alignItems: 'baseline',
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
});
