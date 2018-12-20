// @flow
import fetch from '../fetch';
import setStorage from '../setStorage';
import config from '../../../constant/config';
let login = async (email: string, password: string) => {
  let result: FeathersAuthenticationType = await fetch(
    config.loginURL,
    'POST',
    {
      strategy: 'local',
      email,
      password,
    },
  );
  let accessToken = String((result && result.accessToken) || '');
  if (accessToken) {
    await setStorage('Authorization', accessToken);
    await setStorage('AuthorizationTime', Date.now().toString());
    return true;
  } else {
    return false;
  }
};
export default login;
