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

const windowSize = Dimensions.get('window').width;

class ItemFrag extends React.Component {
  state = {
    itemName: this.props.item.name || '',
    itemBrand: this.props.item.brand || '',
    itemPrice: this.props.item.price || '',
    itemCat: this.props.item.category || '',
  };
  render() {
    let {itemName, itemBrand, itemPrice} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          width: 500,
          borderWidth: 5,
          borderColor: 'black',
        }}
      >
        {/* dropdown kiri start */}
        <View
          style={{
            flex: 0.2,
            padding: 20,
            justifyContent: 'center',
            backgroundColor: 'white',
            height: 90,
          }}
        >
          <Image
            resizeMode="contain"
            style={{flex: 1}}
            source={require('../../assets/picture/google.png')}
          />
        </View>
        {/* dropdown kiri end */}
        {/* itemlist kanan start */}
        <View
          style={{
            flex: 0.8,
            padding: 20,
            borderLeftWidth: 5,
            justifyContent: 'center',
            backgroundColor: 'beige',
            height: 90,
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Text>Nama Barang : </Text>
            <Text>{itemName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Brand Barang : </Text>
            <Text>{itemBrand}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Price : </Text>
            <Text>{itemPrice}</Text>
          </View>
        </View>
        {/* itemlist kanan end */}
      </View>
    );
  }
}

export default ItemFrag;
