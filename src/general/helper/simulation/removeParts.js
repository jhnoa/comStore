// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

let removeParts = async (props: number | string) => {
  let url = config.simulasiURL + '?itemId=' + props;
  return await fetch(url, 'DELETE');
};
export default removeParts;
