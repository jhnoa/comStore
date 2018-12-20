// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  pengiriman: string,
};

let editProfile = async (props: Props) => {
  let url = config.simulasiURL;
  return await fetch(url, 'PATCH', props);
};
export default editProfile;
