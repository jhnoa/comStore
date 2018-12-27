// @flow

type Config = {[string]: string};

let mainURL = 'http://localhost:3030/';
let config: Config = {
  mainURL,
  companyName: 'Vinando Computer',
  loginURL: mainURL + 'authentication',
  registerURL: mainURL + 'registration',
  catalogURL: mainURL + 'item-list',
  userProfileURL: mainURL + 'user-profile',
  simulasiURL: mainURL + 'simulasi',
  templateSimulationURL: mainURL + '/preferensi',
};

export default config;
