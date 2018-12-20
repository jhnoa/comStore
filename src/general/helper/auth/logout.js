// @flow
import removeStorage from '../removeStorage';
import {navigateTo} from 'gatsby-link';

let logout = async () => {
  await removeStorage('Authorization');
  await removeStorage('AuthorizationTime');
  navigateTo('/');
};
export default logout;
