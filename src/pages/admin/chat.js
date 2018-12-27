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
  TouchableOpacity,
} from 'react-native';
import Layout from '../../general/layouts/admin';
import isAuthenticated from '../../general/helper/auth/auth';
import {navigateTo} from 'gatsby-link';
import Capital from '../../general/helper/capitalize';
import formatCurrency from '../../general/helper/numberToCurrency';
import getAllChat from '../../general/helper/adminUser/getAllChat';
const windowSize = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Item = {
  name: string,
  uuid: string,
};
type Props = {
  data: Array<Item>,
};

type State = {
  isLoggedIn: boolean,
};

let defaultData = [
  // {
  //   _id: '5c1c6c55f95fe531b86eaa2c',
  //   removed: false,
  //   itemId: 140,
  //   name: 'Cougar QBX Gaming Mini ITX Case',
  //   casing: 'all (mid-tower & tower)',
  //   category: 'casing',
  //   brand: 'cougar',
  //   price: 671000,
  //   picture: 'Cougar QBX Gaming Mini ITX Case.png',
  //   createdAt: '2018-12-21T04:30:13.820Z',
  //   updatedAt: '2018-12-21T04:30:13.820Z',
  //   __v: 0,
  // },
  // {
  //   _id: '5c1c6c55f95fe531b86eaa2d',
  //   removed: false,
  //   itemId: 141,
  //   name: 'AMD Ryzen 5 1400',
  //   casing: 'all (mid-tower & tower)',
  //   category: 'proccesor',
  //   brand: 'amd',
  //   price: 2050000,
  //   picture: 'AMD Ryzen 5 1400.png',
  //   createdAt: '2018-12-21T04:30:13.826Z',
  //   updatedAt: '2018-12-21T04:30:13.826Z',
  //   __v: 0,
  // },
];

class Userlistpage extends React.Component<Props, State> {
  state = {
    data: [],
  };
  async componentDidMount() {
    let data = await getAllChat();
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
            Chat Dari User
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
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{flexDirection: 'row', width: '50%', paddingLeft: 10}}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{fontSize: 20, alignSelf: 'center'}}>
                    Nama Pelanggan
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                }}
              >
                <Text style={{fontSize: 20, alignSelf: 'center'}}>
                  Chat Terakhir
                </Text>
              </View>
            </View>
            {/* ilist */}
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={styles.contentContainer}
            >
              {data.map((element) => {
                let {name, lastChat, userId} = element;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigateTo({
                        pathname: 'chatpersonal',
                        state: element.userId,
                      });
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        width: '100%',
                        borderTopWidth: 0.5,
                        borderBottomWidth: 0.5,
                        // borderRadius: 5,
                        //   paddingHorizontal: 10,
                      }}
                    >
                      <View style={{flexDirection: 'row', width: '50%'}}>
                        <View
                          style={{
                            flex: 1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            paddingHorizontal: 10,
                          }}
                        >
                          <Text>
                            {name.slice(0, 60)}
                            {name.length > 60 && '...'}
                          </Text>
                        </View>
                        {/* ^- user name */}
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          width: '50%',
                          paddingHorizontal: 10,
                          borderRightWidth: 1,
                          alignSelf: 'center',
                        }}
                      >
                        <Text style={{alignSelf: 'flex-start'}}>
                          {lastChat.message}
                        </Text>
                      </View>
                      {/* ^- last chat content*/}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
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

export default Userlistpage;
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
