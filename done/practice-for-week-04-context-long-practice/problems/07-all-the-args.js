function allTheArgs(func, ...args) {
  return func.bind(this, ...args);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
