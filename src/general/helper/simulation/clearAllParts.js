// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

let clearAllParts = async () => {
  let url = config.simulasiURL;
  return await fetch(url, 'POST', {});
};
export default clearAllParts;
