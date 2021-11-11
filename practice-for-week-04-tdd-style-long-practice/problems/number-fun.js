function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (typeof n !== 'number') console.log('Please input a number');
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
