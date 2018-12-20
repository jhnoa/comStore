// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

let getListAllItem = async () => {
  let url = config.catalogURL + '?all=true';
  return await fetch(url);
};
export default getListAllItem;
