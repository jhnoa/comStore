// @flow

import {makeParams} from '../fetch';

let testCases = {
  get: {
    params: [],
    result: {method: 'GET'},
  },
  post: {
    params: ['POST', {}],
    result: {
      method: 'POST',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: '{}',
    },
  },
  patch: {
    params: ['PATCH', {}],
    result: {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: '{}',
    },
  },
  put: {
    params: ['PUT', {}],
    result: {
      method: 'PUT',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: '{}',
    },
  },
  delete: {
    params: ['DELETE'],
    result: {method: 'DELETE'},
  },
};
describe('makeParams', () => {
  Object.keys(testCases).forEach((Case, ...other) => {
    let testCase = testCases[Case];
    it(`should fetch with parameter ${Case}`, async (done) => {
      let result = await makeParams(...testCase.params);
      expect(result).toEqual(testCase.result);
      done();
    });
  });
});
