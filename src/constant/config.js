// @flow

type Config = {[string]: string};

let config: Config = {
  loginURL: 'http://localhost:3030/authentication',
  registerURL: 'http://localhost:3030/registration',
  catalogURL: 'http://localhost:3030//item-list',
};

export default config;
