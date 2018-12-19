// @flow
import getStorage from './getStorage';

const oneMonth = 30 * 24 * 60 * 60 * 1000;

let makeParams = async (method?: string, data?: Object): RequestOptions => {
  let params: RequestOptions = {
    method: method || 'GET',
  };
  let header = {};

  let AuthorizationTime = parseInt(await getStorage('AuthorizationTime'), 10);
  let now = Date.now();

  if (now - AuthorizationTime < oneMonth) {
    let Authorization = await getStorage('Authorization');
    header['Authorization'] = Authorization;
  }
  if (method === 'PATCH' || method === 'PUT' || method === 'POST') {
    params['headers'] = {
      ...header,
      'Content-Type': 'application/json; charset=utf-8',
    };
    params['body'] = JSON.stringify(data);
  }

  return params;
};

let myFetch = async (url: string, method?: string, data?: Object) => {
  let params: RequestOptions = await makeParams(method, data);
  return fetch(url, params).then((response) => response.json()); // parses response to JSON
};

export default myFetch;
export {makeParams};

// METHOD: GET
// PARAMS: (URL)

// METHOD: POST
// PARAMS: (URL, 'POST', {data})

// METHOD: PUT
// PARAMS: (URL, 'PUT', {data})

// METHOD: PATCH
// PARAMS: (URL, 'PATCH', {data})

// METHOD: REMOVE
// PARAMS: (URL, 'DELETE')
