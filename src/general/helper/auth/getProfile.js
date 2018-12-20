// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

let getProfile = async () => {
  let url = config.userProfileURL;
  return await fetch(url);
};
export default getProfile;
