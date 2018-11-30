// @flow

import React from 'react';
import Helmet from 'react-helmet';
import {View, StyleSheet} from 'react-native';

import './index.css';

type Props = {
  children: React$Node,
  title?: string,
};

class Layout extends React.Component<Props> {
  render() {
    let {children} = this.props;
    let pageTitle = this.props.title
      ? `${this.props.title} - ${String(process.env.pageTitle)}`
      : String(process.env.pageTitle);
    return (
      <View style={styles.container}>
        <Helmet
          title={pageTitle}
          meta={[
            {name: 'description', content: 'Bayar & Cicil Tanpa Kartu Kredit'},
            {name: 'keywords', content: 'loan, payment, vospay, credit'},
          ]}
        />
        {children}
      </View>
    );
  }
}

export default Layout;

let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

// // $FlowFixMe
// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

/*   link={[{rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}]}
 */
