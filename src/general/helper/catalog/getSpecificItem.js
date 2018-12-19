// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  itemId: number | string,
};

let getClientListItem = async (props: Props): JSONData => {
  return await fetch(`${config.catalogURL}/${props.itemId}`);
};
export default getClientListItem;
