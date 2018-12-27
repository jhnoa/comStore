// @flow

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
  uuid: string,
  name: string,
  contactNumber: string,
  address: string,
  createdAt: string,
};
type State = {};

class userprofilefrag extends React.Component<Props, State> {
  state = {
    uuid: this.props.uuid || '5c2368298ffffe554844ffff',
    name: this.props.name || 'someone',
    contactNumber: this.props.contactNumber || '081100223344',
    address: this.props.address || 'somewhere',
    createdAt: this.props.createdAt || '25/12/2018',
  };

  render() {
    let {name, address, contactNumber, uuid, createdAt} = this.state;
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
          {/* descbar */}
          <View style={styles.boxcol}>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Unique User ID:</Text>
              <Text style={styles.itemLabel}>{uuid}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Nama Pelanggan:</Text>
              <Text style={styles.itemLabel}>{name}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>No. Telfon:</Text>
              <Text style={styles.itemLabel}>{contactNumber}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Alamat:</Text>
              <Text style={styles.itemLabel}>{address}</Text>
            </View>
            <View style={styles.boxrowv2}>
              <Text style={styles.itemDesc}>Waktu Pembuatan ID:</Text>
              <Text style={styles.itemLabel}>{createdAt}</Text>
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
    width: 800,
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
