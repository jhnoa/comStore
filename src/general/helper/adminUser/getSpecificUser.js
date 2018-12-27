import fetch from '../fetch';
import config from '../../../constant/config';

let getSpecificUser = async (id): boolean => {
  let result = await fetch(config.adminUserListURL + '/' + id, 'GET');
  return result;
};
export default getSpecificUser;
