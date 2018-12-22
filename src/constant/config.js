// @flow

type Config = {[string]: string};

let config: Config = {
  companyName: 'Vinando Computer',
  loginURL: 'http://localhost:3030/authentication',
  registerURL: 'http://localhost:3030/registration',
  catalogURL: 'http://localhost:3030/item-list',
  userProfileURL: 'http://localhost:3030/user-profile',
  simulasiURL: 'http://localhost:3030/simulasi',
  templateSimulationURL: 'http://localhost:3030/preferensi',
};

export default config;
