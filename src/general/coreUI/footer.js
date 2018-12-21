import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FooterPart = () => (
  <View style={styles.footer}>
    <Text style={{fontSize: 20}}>#Insert Copyright Here#</Text>
  </View>
);

let styles = StyleSheet.create({
  footer: {
    position: 'fixed',
    justifyContent: 'center',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'silver',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FooterPart;
