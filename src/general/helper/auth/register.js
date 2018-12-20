// @flow
import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  email: string,
  password: string,
  name: string,
  address: string,
  contactNumber: string,
  type?: 'admin' | 'customer',
};

let register = async (props: Props) => {
  try {
    await fetch(config.registerURL, 'POST', {
      ...props,
    });
  } catch (e) {
    return false;
  }
  return true;
};
export default register;
