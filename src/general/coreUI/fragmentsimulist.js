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

type Props = {
  item: {
    itemId: number,
    name: string,
    brand: string,
    jumlah: number,
    price: number,
    category: string,
    picture: string,
  },
  plus: (number, number) => Promise<any>,
  minus: (number, number) => Promise<any>,
  disable: boolean,
};

class ItemFragSimulate extends React.Component<Props> {
  render() {
    let {
      itemId,
      name,
      brand,
      jumlah,
      price,
      category,
      picture,
    } = this.props.item;
    let {minus, plus, disable} = this.props;
    console.log('simulist');
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
            source={require(`../../assets/picture/catalog/${picture}`)}
          />
        </View>
        {/* dropdown kiri end */}
        {/* itemlist kanan start */}
        <View
          style={{
            flex: 0.8,
            padding: 20,
            borderLeftWidth: 1,
            justifyContent: 'center',
            backgroundColor: 'beige',
            height: 98,
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Text>Nama Barang : </Text>
            <Text>
              {name.slice(0, 40)}
              {name.length > 40 && '...'}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Brand Barang : </Text>
            <Text>{Capital(brand)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Price : </Text>
            <Text>{formatCurrency(price)}</Text>
          </View>
        </View>
        {/* itemlist kanan end */}
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, height: '50%', alignSelf: 'center'}}>
            {jumlah}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Button
              disabled={disable}
              color={'red'}
              title={'-'}
              onPress={() => {
                console.log('onMinus');
                this.props.minus(itemId, jumlah);
              }}
            />
            <Button
              disabled={disable}
              color={'green'}
              title={'+'}
              onPress={() => {
                console.log('onPlus');
                this.props.plus(itemId, jumlah);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default ItemFragSimulate;
