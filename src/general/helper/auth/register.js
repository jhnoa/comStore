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
  await fetch(config.registerURL, 'POST', {
    ...props,
  });
};
export default register;
