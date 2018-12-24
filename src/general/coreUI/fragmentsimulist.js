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
import Capital from '../helper/capitalize';
import formatCurrency from '../helper/numberToCurrency';

const windowSize = Dimensions.get('window').width;

class ItemFrag extends React.Component {
  state = {
    itemName: (this.props.item && this.props.item.name) || '',
    itemBrand: (this.props.item && this.props.item.brand) || '',
    itemCount: (this.props.item && this.props.item.jumlah) || 0,
    itemPrice: (this.props.item && this.props.item.price) || 0,
    itemCat: (this.props.item && this.props.item.category) || '',
    itemPic: (this.props.item && this.props.item.picture) || 'google.png',
  };
  render() {
    let {itemName, itemBrand, itemPrice, itemPic, itemCount} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          width: '100%',
          borderWidth: 1,
          borderColor: 'black',
          marginVertical: 10,
        }}
      >
        {/* dropdown kiri start */}
        <View
          style={{
            flex: 0.2,
            padding: 20,
            justifyContent: 'center',
            backgroundColor: 'white',
            height: 98,
          }}
        >
          <Image
            resizeMode="contain"
            style={{flex: 1}}
            source={require(`../../assets/picture/catalog/${itemPic}`)}
          />
        </View>
        {/* dropdown kiri end */}
        {/* itemlist kanan start */}
        <View
          style={{
            flex: 0.8,
            padding: 20,
            justifyContent: 'center',
            backgroundColor: 'beige',
            height: 98,
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Text>Nama Barang : </Text>
            <Text>
              {itemName.slice(0, 40)}
              {itemName.length > 40 && '...'}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Brand Barang : </Text>
            <Text>{Capital(itemBrand)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Price : </Text>
            <Text>{formatCurrency(itemPrice)}</Text>
          </View>
        </View>
        {/* itemlist kanan end */}
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, height: '50%', alignSelf: 'center'}}>
            {itemCount}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Button color={'red'} title={'-'} />
            <Button color={'green'} title={'+'} onPress={() => {}} />
          </View>
        </View>
      </View>
    );
  }
}

export default ItemFrag;
