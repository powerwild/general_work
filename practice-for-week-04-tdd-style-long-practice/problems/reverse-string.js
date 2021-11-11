module.exports = function reverseString(string) {
  if (typeof string !== 'string'){
    throw Error("Please input a string");
  }
  return string.split('').reverse().join('');
};
