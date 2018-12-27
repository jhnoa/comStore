import fetch from '../fetch';
import config from '../../../constant/config';

let getAllUser = async (): boolean => {
  let result = await fetch(config.adminUserListURL, 'GET');
  return result;
};
export default getAllUser;
