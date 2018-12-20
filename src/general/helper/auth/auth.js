import fetch from '../fetch';
import config from '../../../constant/config';

const isAuthenticated = async () => {
  let validation = await fetch(config.userProfileURL, 'DELETE');
  if (validation.isAuthenticated) {
    return true;
  } else {
    return false;
  }
};
export default isAuthenticated;
