// @flow

import mailValidator from '../mailValidator';

let mails = [
  {
    address: 'johndoe@domainsample.com',
    expect: true,
  },
  {
    address: 'john.doe@domainsample.net',
    expect: true,
  },
  {
    address: 'john.doe43@domainsample.co.uk',
    expect: true,
  },
  {
    address: 'john.doe43.@domainsample.co.uk',
    expect: false,
  },
  {
    address: '.john.doe43@domainsample.co.uk',
    expect: false,
  },
  {
    address: 'john.doe43@domainsample.coe.uka',
    expect: true,
  },
  {
    address: 'john.doe@43@domainsample.co.uk',
    expect: false,
  },
];

describe('mailValidator', () => {
  mails.forEach((mail) => {
    it('should validate valid email', () => {
      expect(mailValidator(mail.address)).toBe(mail.expect);
    });
  });
});
