// @flow
import fetch from '../fetch';
import setStorage from '../setStorage';
import config from '../../../constant/config';
let login = async (email: string, password: string) => {
  let result = await fetch(config.loginURL, 'POST', {
    strategy: 'local',
    email,
    password,
  });
  if (result.accessToken) {
    await setStorage('Authorization', result.accessToken);
    await setStorage('AuthorizationTime', Date.now().toString());
    return true;
  } else {
    return false;
  }
};
export default login;
