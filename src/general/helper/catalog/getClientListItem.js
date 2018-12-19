// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  category: string,
  brand: string,
};

let getClientListItem = async (props: Props) => {
  let url = config.catalogURL;
  if (Object.keys(props).length === 1) {
    url = `${url}?${props[Object.keys(props)[0]]}`;
  } else if (Object.keys(props).length === 2) {
    url = `${url}?${props[Object.keys(props)[0]]}&${
      props[Object.keys(props)[1]]
    }`;
  }
  return await fetch(url);
};
export default getClientListItem;
