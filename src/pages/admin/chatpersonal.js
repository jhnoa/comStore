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
import getAllUser from '../../general/helper/adminUser/getAllUser';
import io from 'socket.io-client';
import getStorage from '../../general/helper/getStorage';

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
    socket: {},
    userId: '',
    userType: '',
    chatHistory: [],
    chatValue: '',
  };
  async componentDidMount() {
    let userId = this.props.location.state;
    let userType: string = await getStorage('userType');
    const socket = io('http://localhost:3030/');
    socket.on('connect', () => {
      socket.emit('auth', userId);
    });
    socket.on('debug', console.log);
    socket.on('disconnect', (reason) => {
      // console.log('IO Disconected, Reason: ', reason);
      // if (reason === 'io server disconnect') {
      //   // the disconnection was initiated by the server, you need to reconnect manually
      //   socket.connect();
      // }
      // // else the socket will automatically try to reconnect
    });
    socket.on('history', (chatHistory) => {
      // console.log(chatHistory);
      this.setState({chatHistory});
    });
    socket.on(
      'toClientChat',
      (props: {
        userId: string,
        data: {sender: 'admin' | 'customer', message: string},
      }) => {
        console.log('toClientChat', props);
        let newHistory = [...this.state.chatHistory, props.data];
        console.log('new History', newHistory);
        this.setState({chatHistory: newHistory});
      },
    );
    this.setState({socket, userId, userType});
  }
  pushChat = (message: string) => {
    let {userId, userType, socket} = this.state;
    let chat = {userId, data: {sender: userType, message}};
    socket.emit('toServerChat', chat);
    this.setState({chatValue: ''});
  };
  renderText = (sender, message) => {
    let styles = {
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'column',
      padding: 5,
      flexWrap: 'wrap',
      maxWidth: '70%',
      width: '70%',
      marginVertical: 5,
      alignItems: sender === 'admin' ? 'flex-start' : 'flex-end',
      alignSelf: sender === 'admin' ? 'flex-start' : 'flex-end',
    };
    return (
      <View style={styles}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>{sender}:</Text>
        <Text>{message}</Text>
      </View>
    );
  };
  render() {
    console.log(this.state);
    let {chatHistory} = this.state;
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
            {/* ilist */}
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={styles.contentContainer}
            >
              {chatHistory.map((element) => {
                let {sender, message} = element;
                return (
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '100%',
                      // borderRadius: 5,
                      //   paddingHorizontal: 10,
                    }}
                  >
                    {this.renderText(sender, message)}
                  </View>
                );
              })}
            </ScrollView>
            <TextInput
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'center',
                height: 40,
                width: '100%',
                borderColor: 'black',
                borderWidth: 2,
              }}
              placeholder={'Masukan Chat Anda Disini'}
              value={this.state.chatValue}
              onChangeText={(text) => this.setState({chatValue: text})}
              onSubmitEditing={() => this.pushChat(this.state.chatValue)}
            />
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
    width: '85%',
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
