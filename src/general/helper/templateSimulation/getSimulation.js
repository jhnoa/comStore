// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

let getSimulation = async () => {
  let url = config.templateSimulationURL;
  return await fetch(url);
};
export default getSimulation;
