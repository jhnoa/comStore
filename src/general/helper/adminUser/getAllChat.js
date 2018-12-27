import fetch from '../fetch';
import config from '../../../constant/config';

let getAllChat = async (): boolean => {
  let result = await fetch(config.adminChatURL, 'GET');
  return result;
};
export default getAllChat;
