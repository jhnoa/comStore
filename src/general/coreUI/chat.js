// @flow

import io from 'socket.io-client';
import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import getStorage from '../helper/getStorage';

type State = {
  chatText: string,
  chatShow: boolean,
  socket: Object,
  userId: string,
  userType: string,
  chatHistory: Array<Object>,
};
type OnLayoutEvent = {
  nativeEvent: {layout: {height: number, width: number, x: number, y: number}},
  timeStamp: number,
};
export default class Chat extends React.Component<{}, State> {
  state = {
    chatText: 'aswdfserdfgae',
    chatShow: true,
    socket: {},
    userId: '',
    userType: '',
    chatHistory: [],
  };

  async componentDidMount() {
    let userId: string = await getStorage('userId');
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
    console.log('push', message);
    let {userId, userType, socket} = this.state;
    let chat = {userId, data: {sender: userType, message}};
    socket.emit('toServerChat', chat);
  };

  renderText = (
    props: {
      userId: string,
      data: {sender: 'admin' | 'customer', message: string},
    },
    index: number,
  ) => {
    // console.log(index, props);
    return (
      <View
        key={Math.random()}
        style={{
          maxWidth: '70%',
          flexWrap: 'wrap',
          alignSelf:
            props && props.sender === 'customer' ? 'flex-end' : 'flex-start',
          backgroundColor: 'blue',
        }}
      >
        <Text>{props && props.message}</Text>
      </View>
    );
  };

  render() {
    console.log('render');
    console.log(this.state);
    let {chatHistory} = this.state;
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 250,
        }}
        onLayout={this._onLayout}
      >
        <TouchableWithoutFeedback
          onPress={() => this.setState((state) => ({chatShow: !state.chatShow}))}
        >
          <View
            style={{
              width: '100%',
            }}
          >
            <Text style={{textAlign: 'center'}}>Chat</Text>
          </View>
        </TouchableWithoutFeedback>

        {this.state.chatShow && (
          <View
            style={{
              // borderRadius: 10,
              width: 250,
              height: 300,
              position: 'absolute',

              top: -300,
              borderWidth: 1,
            }}
          >
            <ScrollView style={{flex: 1}}>
              {chatHistory.map((chat, index) => this.renderText(chat, index))}
            </ScrollView>
            <TextInput
              value={this.state.chatText}
              onChangeText={(chatText) => this.setState({chatText})}
              onSubmitEditing={() => this.pushChat(this.state.chatText)}
              style={{height: 30}}
            />
          </View>
        )}
      </View>
    );
  }

  _onLayout = (event: OnLayoutEvent) => console.log(event);
}
