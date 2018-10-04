// @flow

type PasswordValidator = (password: string) => boolean | string;

let test = [
  {
    enable: true,
    re: new RegExp('(?=.*[a-z])'),
    errorMessage: 'Minimum 1 Lowercase',
  },
  {
    enable: true,
    re: new RegExp('(?=.*[A-Z])'),
    errorMessage: 'Minimum 1 Uppercase',
  },
  {
    enable: true,
    re: new RegExp('(?=.*[0-9])'),
    errorMessage: 'Minimum 1 Number',
  },
  {
    enable: false,
    re: new RegExp('(?=.[!@#$%^&])'),
    errorMessage: 'Minimum 1 Special Character ! @ # $ % ^ &',
  },
  {
    enable: true,
    re: new RegExp('(?=.{8,})'),
    errorMessage: 'Minimum 8 Characters',
  },
];

let passwordValidator: PasswordValidator = (password) => {
  password = String(password);
  for (let regex of test) {
    if (regex.enable) {
      if (!regex.re.test(password)) {
        return regex.errorMessage;
      }
    }
  }
  return true;
};
export default passwordValidator;
