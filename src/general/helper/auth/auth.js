import fetch from '../fetch';
import config from '../../../constant/config';

type IsAuthenticated = () => Promise<{
  status: boolean,
  type?: 'admin' | 'customer',
}>;

let isAuthenticated: IsAuthenticated = async (): boolean => {
  let validation: FeathersAuthenticationType = await fetch(
    config.userProfileURL,
    'DELETE',
  );
  if (validation.isAuthenticated) {
    return {status: true, type: validation.type};
  } else {
    return {status: false};
  }
};
export default isAuthenticated;
