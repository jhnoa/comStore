// @flow

import passwordValidator from '../passwordValidator';

type Password = {
  text: string,
  expect: string | boolean,
};

type Passwords = Array<Password>;

let passwords: Passwords = [
  {
    text: 'Abc123qw',
    expect: true,
  },
  {
    text: 'ABCD1234',
    expect: 'Minimum 1 Lowercase',
  },
  {
    text: 'abcd1234',
    expect: 'Minimum 1 Uppercase',
  },
  {
    text: 'ABCDabcd',
    expect: 'Minimum 1 Number',
  },
  {
    text: 'ABCabc1',
    expect: 'Minimum 8 Characters',
  },
];

describe('passwordValidator', () => {
  passwords.forEach((password) => {
    it(`should test password: ${password.text} with expectation to be: ${String(
      password.expect,
    )}`, () => {
      expect(passwordValidator(password.text)).toBe(password.expect);
    });
  });
});
