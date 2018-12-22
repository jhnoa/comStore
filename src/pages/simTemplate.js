// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Layout from '../general/layouts/index';
import fontSize from '../constant/fontsize';
import Footer from '../general/coreUI/footer';
import Header from '../general/coreUI/header';
import Auth from '../general/helper/authMiddleware';
import getSimulation from '../general/helper/templateSimulation/getSimulation';
import {navigateTo} from 'gatsby-link';
const windowSize = Dimensions.get('window').width;

type Props = {};
type State = {data: Array<Object>};

class simTemp extends React.Component<Props, State> {
  state = {
    data: [],
  };

  async componentDidMount() {
    let data = await getSimulation();
    this.setState({data});
  }

  render() {
    console.log(this.state);

    return (
      <Layout title={'Pilih Range Budget'}>
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
              Pilih Rentang Harga PC
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
              {this.state.data.map((element) => (
                <View style={styles.boxrow}>
                  <Image
                    resizeMode="contain"
                    style={styles.imej}
                    source={require('../assets/picture/catalog/AMD Ryzen 5 2600.png')}
                  />
                  <View style={styles.boxrowv2}>
                    <Text>{element.description}</Text>
                  </View>
                  <Button
                    style={styles.btn}
                    title="Simulate"
                    onPress={() => {
                      navigateTo({
                        pathname: 'simTempResult',
                        state: element.parts,
                      });
                    }}
                  />
                </View>
              ))}
              {/* descbar */}
            </View>
            <Button
              style={{paddingRight: 20}}
              title="Kembali"
              onPress={() => {
                window.history.back();
              }}
            />
          </View>
        </View>
      </Layout>
    );
  }
}

export default Auth(simTemp);
let styles = StyleSheet.create({
  container: {
    width: 1500,
    padding: 40,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxrow: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: 400,
    height: 300,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  btn: {marginBottom: 5},
  boxrowv2: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
    width: 355,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  boxcol: {
    justifyContent: 'center',
    width: 200,
    height: 200,
    alignItems: 'center',
    marginRight: 20,
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
});
