// @flow

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
  name: string,
  category: string,
  brand: string,
  price: number,
  picture: string,
};
type State = {};

class userprofilefrag extends React.Component<Props, State> {
  state = {
    name: this.props.name || 'AMD Ryzen 5 2600',
    picture: this.props.picture || 'AMD Ryzen 5 2600.png',
    category: this.props.category || 'This is Category',
    brand:
      this.props.brand ||
      'Gading Serpong, Jl.Scientia Boulevar SDC-Learning Lab Lt.1 - unit C, Curug Sangereng, Klp. Dua, Tangerang, Banten 15810',
    price: this.props.price || 25122018,
  };
  render() {
    let {name, brand, category, price, picture} = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        {/* atas */}
        <Text style={{fontSize: 40}}>User Profile</Text>
        {/* bawah */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            height: 300,
            flexDirection: 'row',
            padding: 10,
          }}
        >
          {/* image */}
          {/* descbar */}
          <View style={styles.boxcol}>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Unique User ID:</Text>
              <Text style={styles.itemLabel}>{name}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Nama Pelanggan:</Text>
              <Text style={styles.itemLabel}>{name}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>No. Telfon:</Text>
              <Text style={styles.itemLabel}>{category}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Alamat:</Text>
              <Text style={styles.itemLabel}>{brand}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Waktu Pembuatan ID:</Text>
              <Text style={styles.itemLabel}>{price}</Text>
            </View>
          </View>
          {/* EoBar */}
        </View>
      </View>
    );
  }
}

export default userprofilefrag;
let styles = StyleSheet.create({
  container: {
    width: 600,
    padding: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
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
    // flexGrow: 1,
    // flexStretch: 0,
    width: '100%',
  },
  boxcol: {
    width: '100%',
    alignItems: 'flex-start',
  },
  textin: {
    fontSize: 20,
    width: 450,
  },
  itemLabel: {
    fontSize: 15,
    flex: 8,
  },
  itemDesc: {fontSize: 15, flex: 4},
});
