// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  category?: string,
  brand?: string,
};

let getClientListItem = async (props: Props = {}) => {
  let url = config.catalogURL + '?';
  for (let i = 0; i < Object.keys(props).length; i++) {
    let key = Object.keys(props)[i];
    let value = Object.values(props)[i];
    if (url.endsWith('?')) {
      url += key + '=' + String(value);
    } else {
      url += '&' + key + '=' + String(value);
    }
  }
  console.log(url);
  return await fetch(url);
};
export default getClientListItem;
