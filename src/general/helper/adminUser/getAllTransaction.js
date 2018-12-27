import fetch from '../fetch';
import config from '../../../constant/config';

let getAllTransaction = async (): boolean => {
  let result = await fetch(config.adminTransactionURL, 'GET');
  return result;
};
export default getAllTransaction;
