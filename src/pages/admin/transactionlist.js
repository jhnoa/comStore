// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import Layout from '../../general/layouts/admin';
import isAuthenticated from '../../general/helper/auth/auth';
import {navigateTo} from 'gatsby-link';
import Capital from '../../general/helper/capitalize';
import formatCurrency from '../../general/helper/numberToCurrency';
import getAllTransaction from '../../general/helper/adminUser/getAllTransaction';
const windowSize = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

type State = {
  isLoggedIn: boolean,
};

class Transactionlistpage extends React.Component<Props, State> {
  state = {
    isLoggedIn: false,
    data: [],
    totalItem: {},
    totalPrice: 0,
  };
  async componentDidMount() {
    let dataFromAPI = await getAllTransaction();
    let data = dataFromAPI;
    this.setState({data});
  }
  render() {
    console.log(this.state);
    let {data} = this.state;
    return (
      <Layout
        title={'Home'}
        isLoggedIn={() => this.setState({isLoggedIn: true})}
      >
        <View style={styles.container}>
          {/* atas */}
          <Text style={{fontSize: 30, marginBottom: 20, fontWeight: 'bold'}}>
            List Transaksi
          </Text>
          {/* bawah */}

          <View style={styles.boxcol}>
            {/* label */}
            <View
              style={{
                width: '100%',
                alignItems: 'flex-start',
                paddingTop: 5,
                flexDirection: 'row',
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{flexDirection: 'row', width: '80%', paddingLeft: 10}}
              >
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 20}}>Status Pemesanan</Text>
                </View>
                <View
                  style={{
                    flex: 5,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    Nama Pelanggan
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    Jumlah Transaksi
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    Waktu Transaksi
                  </Text>
                </View>
                {/* end of label kiri */}
              </View>
              <View
                style={{
                  width: '20%',
                  flexDirection: 'row',
                  paddingLeft: 10,
                }}
              >
                <Text style={{fontSize: 20, alignSelf: 'center'}}>Detail</Text>
              </View>
              {/* end label kanan */}
            </View>
            {/* ilist */}
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={styles.contentContainer}
            >
              {data.map((element) => {
                let {
                  status,
                  userData,
                  totalPrice,
                  simulasiData,
                  createdAt,
                } = element;
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      width: '100%',
                      // borderWidth: 1,
                      // borderRadius: 5,
                      paddingHorizontal: 10,
                      borderBottomWidth: 1,
                    }}
                  >
                    <View style={{flexDirection: 'row', width: '80%'}}>
                      <View style={{flex: 1}}>
                        <Text>{status}</Text>
                      </View>
                      {/* ^- status pemesanan*/}
                      <View
                        style={{
                          flex: 5,
                          paddingHorizontal: 10,
                        }}
                      >
                        <Text>
                          {userData.name.slice(0, 60)}
                          {userData.name.length > 60 && '...'}
                          Username
                        </Text>
                      </View>
                      {/* ^- user name */}
                      <View style={{flex: 1, paddingLeft: 5}}>
                        <Text style={{alignSelf: 'flex-start'}}>
                          {formatCurrency(totalPrice)}
                        </Text>
                      </View>
                      {/* ^- jumlah transaksi*/}
                      <View style={{flex: 1, paddingLeft: 5}}>
                        <Text style={{alignSelf: 'flex-start'}}>
                          {createdAt.split('T')[0]}
                        </Text>
                      </View>
                      {/* ^- waktu transaksi*/}
                    </View>
                    {/* for border */}
                    <View
                      style={{
                        width: '20%',
                        flexDirection: 'row',
                        paddingLeft: 10,
                      }}
                    >
                      <Text style={{alignSelf: 'flex-start'}}>
                        {simulasiData.parts.map((part) => (
                          <Text>
                            {Capital(part.category)}: ({part.jumlah}x){' '}
                            {part.name}
                            {'\n'}
                          </Text>
                        ))}
                      </Text>
                    </View>
                    {/* ^- userphonenumber */}
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {/* huehuehue */}
        </View>
      </Layout>
    );
  }

  _simulate = () => {
    if (!this.state.isLoggedIn) {
      window.alert('Please Login To Continue!');
    } else {
      //navigate to simulate Option
      navigateTo('simulateOptions');
    }
  };
}

export default Transactionlistpage;
let styles = StyleSheet.create({
  container: {
    height: windowHeight - 140,
    backgroundColor: 'grey',
    width: '95%',
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 0,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  boxrow: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    padding: 10,
  },
  boxcol: {
    height: windowHeight - 320,
    flexDirection: 'column',
    alignItems: 'baseline',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.8)',
  },
  dropdown: {
    flex: 1,
  },
  dropdownbody: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
