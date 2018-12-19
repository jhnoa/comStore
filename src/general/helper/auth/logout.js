// @flow
import removeStorage from '../removeStorage';

let logout = async () => {
  await removeStorage('Authorization');
  await removeStorage('AuthorizationTime');
};
export default logout;
