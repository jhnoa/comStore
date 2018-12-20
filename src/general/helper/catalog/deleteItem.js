// @flow

import fetch from '../fetch';
import config from '../../../constant/config';

type Props = {
  itemId: number | string,
};

let deleteItem = async (props: Props) => {
  return await fetch(`${config.catalogURL}/${props.itemId}`, 'DELETE');
};
export default deleteItem;
