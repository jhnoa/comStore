import fetch from '../fetch';
import config from '../../../constant/config';

type IsAuthenticated = () => Promise<boolean>;

let isAuthenticated: IsAuthenticated = async (): boolean => {
  let validation: FeathersAuthenticationType = await fetch(
    config.userProfileURL,
    'DELETE',
  );
  if (validation.isAuthenticated) {
    return true;
  } else {
    return false;
  }
};
export default isAuthenticated;
