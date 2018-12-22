// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

let clearAllParts = async () => {
  let url = config.templateSimulationURL;
  return await fetch(url);
};
export default clearAllParts;
