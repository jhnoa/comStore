// @flow
import removeStorage from '../removeStorage';
import {navigateTo} from 'gatsby-link';

let logout = async () => {
  await removeStorage('Authorization');
  await removeStorage('AuthorizationTime');
  await removeStorage('userType');
  await removeStorage('userId');

  return true;
};
export default logout;
