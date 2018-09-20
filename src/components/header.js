import React from 'react';
import {View} from 'react-native';
import {Link} from 'gatsby';

type Props = {
  siteTitle: string,
};

type Header = (props: Props) => ReactEl;

const header: Header = ({siteTitle}: Props) => (
  <View
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <View
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </View>
  </View>
);

export default header;
