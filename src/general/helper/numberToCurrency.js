// @flow

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});

export default formatter.format;
