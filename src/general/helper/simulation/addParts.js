// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  itemId: number,
  jumlah: number,
};

let editProfile = async (props: Props) => {
  let url = config.simulasiURL;
  return await fetch(url, 'PUT', props);
};
export default editProfile;
