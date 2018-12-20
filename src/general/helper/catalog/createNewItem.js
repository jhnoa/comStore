// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  name: string,
  casing: string,
  category: string,
  brand: string,
  price: string,
  picture: string,
};

let createNewItem = async (props: Props = {}) => {
  let url = config.catalogURL;
  return await fetch(url, 'POST', props);
};
export default createNewItem;
