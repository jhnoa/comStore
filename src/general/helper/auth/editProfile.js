// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  name: string,
  address: string,
  contactNumber: string,
};

let editProfile = async (props: Props) => {
  let url = config.userProfileURL;
  return await fetch(url, 'PUT', props);
};
export default editProfile;
