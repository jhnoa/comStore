// @flow

import React from 'react';
import {
  CheckBox,
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
type Props = {};
type State = {};

class Sandbox extends React.Component<Props, State> {
  state = {
    totalItem: {},
    totalPrice: 0,
  };

  render() {
    let {data} = this.state;
    console.log(this.state);
    return (
      <Layout>
        <Header />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height - 90,
          }}
        >
          <View style={styles.container}>
            <View style={styles.boxcol}>
              <View style={styles.boxrowv3}>
                <CheckBox style={{marginHorizontal: 10, marginTop: 5}} />
                <Text>Kore</Text>
              </View>

              <View style={styles.boxrowv2}>
                <Text>This is going yo be a long long text</Text>
              </View>
            </View>
          </View>
        </View>
        <Footer />
      </Layout>
    );
  }
}

export default Sandbox;
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
    padding: 5,
    justifyContent: 'center',
  },
  boxrowv3: {
    flexDirection: 'row',
    padding: 5,
  },
  boxcol: {
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
