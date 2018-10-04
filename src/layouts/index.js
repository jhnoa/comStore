// @flow

import React from 'react';
// import Helmet from 'react-helmet';
import {View} from 'react-native';

import './index.css';

type Props = {
  children: () => void,
};

type State = {
  isLoaded: boolean,
};

class Layout extends React.Component<Props, State> {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    this.setState({isLoaded: true});
  }

  render() {
    let {children} = this.props;
    let {isLoaded} = this.state;
    return (
      <View
        style={{
          flex: 1,
          visibility: isLoaded ? 'visible' : 'hidden',
        }}
      >
        {children()}
      </View>
    );
  }
}

export default Layout;

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

/* <Helmet
  title={'Vospay'}
  meta={[
    {name: 'description', content: 'Bayar & Cicil Tanpa Kartu Kredit'},
    {name: 'keywords', content: 'loan, payment, vospay, credit'},
  ]}
  link={[{rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}]}
/>; */
